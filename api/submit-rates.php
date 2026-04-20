<?php
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "agri_app");

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "DB connection failed"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['crop']) || !isset($data['price'])) {
    echo json_encode(["status" => "error", "message" => "Invalid input"]);
    exit;
}

$crop = $conn->real_escape_string($data['crop']);
$price = $conn->real_escape_string($data['price']);

$sql = "INSERT INTO market_rates (crop, price) VALUES ('$crop', '$price')";

if ($conn->query($sql)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}

$conn->close();
?>