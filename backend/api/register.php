<?php
header("Content-Type: application/json");
error_reporting(0);

$conn = new mysqli("localhost", "root", "", "agri_app");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode([
        "status" => "error",
        "message" => "No input"
    ]);
    exit;
}

$name = $data['name'];
$email = $data['email'];
$password = $data['password'];
$phone = $data['phone'];

// check duplicate
$check = $conn->query("SELECT * FROM users WHERE email='$email'");

if ($check && $check->num_rows > 0) {
    echo json_encode([
        "status" => "exists"
    ]);
    exit;
}

// insert
$result = $conn->query("
    INSERT INTO users (name, email, password, phone)
    VALUES ('$name', '$email', '$password', '$phone')
");

if ($result) {
    echo json_encode([
        "status" => "success"
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "DB insert failed"
    ]);
}
?>