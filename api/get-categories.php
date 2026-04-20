<?php
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "agri_app");

$result = $conn->query("SELECT * FROM categories");

$data = [];

while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>