<?php
include '../config/db.php';

$res = $conn->query("SELECT id, name FROM cities");

$data = [];
while ($row = $res->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>