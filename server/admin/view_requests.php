<?php
session_start();

// Validasi admin
if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit();
}

// Include file konfigurasi database
include '../config.php';

// Fungsi untuk menghapus request berdasarkan ID
function deleteRequest($conn, $id)
{
    $sql = "DELETE FROM requests WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    if ($stmt->execute()) {
        return true; // Berhasil menghapus
    } else {
        return false; // Gagal menghapus
    }
}

// Proses jika ada request untuk menghapus
if (isset($_GET['action']) && $_GET['action'] == 'delete' && isset($_GET['id'])) {
    $id_to_delete = $_GET['id'];
    if (deleteRequest($conn, $id_to_delete)) {
        $_SESSION['success'] = "Request with ID $id_to_delete has been deleted successfully.";
    } else {
        $_SESSION['error'] = "Error deleting request.";
    }
    header("Location: view_requests.php"); // Redirect untuk menghindari resubmission
    exit();
}

// Query untuk mengambil data requests
$sql = "SELECT id, nama, email_or_phone, jumlah_tamu, event, pesan, reg_date FROM requests ORDER BY reg_date DESC";
$result = $conn->query($sql);

// Array untuk menyimpan data requests
$requests = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $requests[] = $row;
    }
}

// Menutup koneksi database
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Capricorn Wedding Decoration - View Requests</title>
    <link rel="shortcut icon" href="../../img/logo_capricorn-Photoroom.png" type="image/x-icon">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            color: #343a40;
            margin: 0;
            background: linear-gradient(-45deg, #ff6b6b, #f0e68c, #00d4ff, #c370ff);
            background-size: 400% 400%;
            animation: gradientBG 15s ease infinite;
        }

        @keyframes gradientBG {
            0% {
                background-position: 0% 50%;
            }

            50% {
                background-position: 100% 50%;
            }

            100% {
                background-position: 0% 50%;
            }
        }

        .container {
            margin-top: 50px;
        }

        .card {
            border: none;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 1200px;
            margin: auto;
        }

        .card-header {
            background-color: #007bff;
            color: white;
            border-radius: 10px 10px 0 0;
            padding: 20px;
            text-align: center;
        }

        .card-body {
            padding: 30px;
            background-color: white;
            border-radius: 0 0 10px 10px;
        }

        .table-responsive {
            max-height: 600px;
            overflow-y: auto;
        }

        .table-responsive table {
            table-layout: fixed;
            width: 100%;
        }

        .table-responsive .pesan {
            word-wrap: break-word;
            white-space: normal;
        }

        .btn {
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.3s ease;
            padding: 10px 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
        }

        .btn-primary {
            background: linear-gradient(to right, #6a11cb, #2575fc);
            border: none;
            color: white;
        }

        .btn-primary:hover {
            background: linear-gradient(to right, #2575fc, #6a11cb);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .btn-danger {
            background: linear-gradient(to right, #ff416c, #ff4b2b);
            border: none;
            color: white;
        }

        .btn-danger:hover {
            background: linear-gradient(to right, #ff4b2b, #ff416c);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .btn-fullscreen {
            color: white;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h1>Data Requests</h1>
                <div class="float-right">
                    <?= date('D') ?>، <?= date('Y-m-d h:i:s') ?>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-hover table-striped" id="data-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nama</th>
                                <th>Email/Nomor WA</th>
                                <th>Jumlah Tamu</th>
                                <th>Event</th>
                                <th>Pesan</th>
                                <th>Tanggal</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($requests as $request) : ?>
                                <tr>
                                    <td><?= $request['id'] ?></td>
                                    <td><?= $request['nama'] ?></td>
                                    <td><?= $request['email_or_phone'] ?></td>
                                    <td><?= $request['jumlah_tamu'] ?></td>
                                    <td><?= $request['event'] ?></td>
                                    <td class="pesan"><?= nl2br(htmlspecialchars($request['pesan'])) ?></td>
                                    <td><?= $request['reg_date'] ?></td>
                                    <td>
                                        <a href="view_requests.php?action=delete&id=<?= $request['id'] ?>" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure you want to delete this request?')">Delete</a>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
                <div class="row mt-4">
                    <div class="col-md-6">
                        <a href="index.php" class="btn btn-primary btn-block">Back to Dashboard</a>
                    </div>
                    <div class="col-md-6">
                        <a href="logout.php" class="btn btn-danger btn-block">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js"></script>
    <script>
        $(document).ready(function () {
            // Initialize DataTable
            var table = $('#data-table').DataTable({
                "order": [[6, "desc"]], // Urutkan berdasarkan tanggal (kolom ke-6) secara descending
                "autoWidth": false,
                "responsive": true
            });
        });
    </script>
</body>

</html>
