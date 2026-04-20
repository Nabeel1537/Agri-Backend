<?php
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "agri_app");

$districts = [];
$markets = [];
$categories = [];
$items = [];

$res = $conn->query("SELECT * FROM districts");
while ($row = $res->fetch_assoc()) $districts[] = $row;

$res = $conn->query("SELECT * FROM markets");
while ($row = $res->fetch_assoc()) $markets[] = $row;

$res = $conn->query("SELECT * FROM categories");
while ($row = $res->fetch_assoc()) $categories[] = $row;

$res = $conn->query("SELECT * FROM items");
while ($row = $res->fetch_assoc()) $items[] = $row;

echo json_encode([
    "districts" => $districts,
    "markets" => $markets,
    "categories" => $categories,
    "items" => $items
]);
?>