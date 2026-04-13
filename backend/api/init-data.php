<?php
include '../config/db.php';

// Fetch categories
$categoriesRes = $conn->query("SELECT * FROM categories");
$categories = [];
while ($row = $categoriesRes->fetch_assoc()) {
    $categories[] = $row;
}

// Fetch items
$itemsRes = $conn->query("SELECT * FROM items");
$items = [];
while ($row = $itemsRes->fetch_assoc()) {
    $items[] = $row;
}

// Return JSON
echo json_encode([
    "categories" => $categories,
    "items" => $items
]);
?>