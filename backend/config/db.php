<?php
$conn = new mysqli("localhost", "root", "", "agri_app");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>