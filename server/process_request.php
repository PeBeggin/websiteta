<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Check if all required fields are provided
  if (isset($_POST['nama'], $_POST['email_or_phone'], $_POST['jumlah_tamu'], $_POST['event'], $_POST['pesan'])) {
    $nama = $_POST['nama'];
    $email_or_phone = $_POST['email_or_phone'];
    $jumlah_tamu = $_POST['jumlah_tamu'];
    $event = $_POST['event'];
    $pesan = $_POST['pesan'];

    // Prepare and execute the SQL statement using $conn, not $db
    $sql = "INSERT INTO requests (nama, email_or_phone, jumlah_tamu, event, pesan) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
      $stmt->bind_param("ssiss", $nama, $email_or_phone, $jumlah_tamu, $event, $pesan);
      $result = $stmt->execute();

      if ($result) {
        echo 'Data berhasil disimpan.';
      } else {
        echo 'Terjadi kesalahan saat menyimpan data.';
      }

      $stmt->close();
    } else {
      echo 'Terjadi kesalahan dalam pernyataan SQL: ' . $conn->error;
    }
  } else {
    echo 'Semua kolom harus diisi.';
  }
} else {
  echo 'Tidak ada data yang dikirim.';
}

$conn->close();
