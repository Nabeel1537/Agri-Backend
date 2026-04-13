<?php
include '../config/db.php';

$market_id = $_GET['market_id'];

$res = $conn->query("
SELECT mr.*, items.name AS item_name, officers.name AS officer_name
FROM market_rates mr
JOIN items ON mr.item_id = items.id
JOIN officers ON mr.officer_id = officers.id
WHERE mr.market_id=$market_id
ORDER BY mr.created_at DESC
");

$data = [];
while ($row = $res->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>