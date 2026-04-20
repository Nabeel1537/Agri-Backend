<?php
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "agri_app");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "No input"]);
    exit;
}

$email = $conn->real_escape_string($data['email']);
$password = $data['password'];

$result = $conn->query("SELECT * FROM users WHERE email='$email'");

if ($result && $result->num_rows > 0) {
    $user = $result->fetch_assoc();

    if ($password === $user['password']){
        unset($user['password']); // security fix

        echo json_encode([
            "status" => "success",
            "user" => $user
        ]);
    } else {
        echo json_encode(["status" => "error", "message" => "Wrong password"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "User not found"]);
}
?>