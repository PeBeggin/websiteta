<?php
session_start();

// Periksa apakah pengguna sudah login
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header('Location: /capricornweddingdecoration/server/admin/login.php');
    exit();
}