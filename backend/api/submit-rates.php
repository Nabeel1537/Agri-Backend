<?php
include '../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);

$conn->query("
INSERT INTO market_rates (
    officer_id, item_id, price, quantity, market_id, city_id, lat, lng, date, synced, created_at
) VALUES (
    '{$data['officer_id']}',
    '{$data['item_id']}',
    '{$data['price']}',
    '{$data['quantity']}',
    '{$data['market_id']}',
    '{$data['city_id']}',
    '{$data['lat']}',
    '{$data['lng']}',
    NOW(),
    0,
    NOW()
)
");

echo json_encode(['status'=>'success']);
?>