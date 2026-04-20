<?php
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "agri_app");

if ($conn->connect_error) {
    echo json_encode(["status" => "error"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$date = $data['date'];
$category = $data['category'];
$district = $data['district'];
$market = $data['market'];
$formData = json_encode($data['data']);

$sql = "INSERT INTO market_forms (date, category, district, market, data)
VALUES ('$date', '$category', '$district', '$market', '$formData')";

if ($conn->query($sql)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error"]);
}

$conn->close();
?>