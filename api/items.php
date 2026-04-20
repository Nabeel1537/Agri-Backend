<?php
include '../config/db.php';

$res = $conn->query("
SELECT 
  items.id,
  items.name,
  categories.name AS category
FROM items
LEFT JOIN categories 
ON items.category_id = categories.id
");

$data = [];

while ($row = $res->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>