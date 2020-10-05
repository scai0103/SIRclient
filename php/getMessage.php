<?php
include 'sql.php';

$query = mysqli_query($connection, "select * from messages");
$data = array();
$filename = "F:\Repo\SIRclient\php\output.php";

while ($row = mysqli_fetch_array($query))
{
    $data[] = array("name"=>$row['name'],"type"=>$row['type'],"body"=>$row['body']);
}

//echo json_encode($data);
$data_Json = json_encode(['Json_Data' => $data]);
file_put_contents($filename, $data_Json);
?>