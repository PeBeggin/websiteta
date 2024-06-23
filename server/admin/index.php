<?php
session_start();
if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Capricorn Wedding Decoration - Admin Dashboard</title>
    <link rel="shortcut icon" href="../../img/logo_capricorn-Photoroom.png" type="image/x-icon">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            color: #343a40;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
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

        .card {
            border: none;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
            text-align: center;
        }

        .card-header {
            background-color: #007bff;
            color: white;
            border-radius: 10px 10px 0 0;
            padding: 20px;
            position: relative;
            overflow: hidden;
        }

        .card-header:before {
            content: '';
            position: absolute;
            top: -50px;
            left: -50px;
            width: 100px;
            height: 100px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            animation: animate 5s linear infinite;
        }

        @keyframes animate {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(2.5);
                opacity: 0;
            }
        }

        .card-header h1 {
            font-size: 2rem;
            margin: 0;
            font-weight: 600;
            position: relative;
            z-index: 1;
        }

        .card-body {
            padding: 30px;
            background-color: white;
            border-radius: 0 0 10px 10px;
        }

        .btn-block {
            margin-bottom: 10px;
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.3s ease;
            padding: 10px 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
        }

        .btn-block:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 300%;
            height: 300%;
            background: rgba(255, 255, 255, 0.3);
            transform: translate(-50%, -50%) rotate(45deg);
            transition: all 0.5s ease;
            opacity: 0;
        }

        .btn-block:active:before {
            width: 0;
            height: 0;
            opacity: 1;
            transition: 0s;
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

        .btn-block:last-child {
            margin-bottom: 0;
        }
    </style>
</head>

<body>
    <div class="card">
        <div class="card-header">
            <h1>Welcome, Admin</h1>
        </div>
        <div class="card-body">
            <a href="view_requests.php" class="btn btn-primary btn-block">View Requests</a>
            <a href="logout.php" class="btn btn-danger btn-block">Logout</a>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>

</html>
