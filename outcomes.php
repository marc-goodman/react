<?php
define("DB_SERVER", "127.0.0.1");
define("DB_USER", "curr");
define("DB_PASSWORD", "curr");
define("DB_NAME", "curriculum");

header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$query = "SELECT subjectCode, courseNumber, outcome ";
$query .= "FROM ccog ";
// $query .= "WHERE subjectCode = 'CIS' ";
$query .= ";";

$mysqli = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_NAME);
$mysqli->query('SET CHARACTER SET utf8');
$result = $mysqli->query($query);
$images = [];
while($row = $result->fetch_assoc()) {
    $images[] = $row;
}

echo json_encode($images);
