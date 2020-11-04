<?php
include 'sql.php';


//get messages information
$query_messages = mysqli_query($connection, "select * from messages");
$data_messages = array();
$filename_messages = "F:\Repo\SIRclient\php\messages_output.php";

while ($row = mysqli_fetch_array($query_messages))
{
    $data_messages[] = array("name"=>$row['name'],"type"=>$row['type'],"body"=>$row['body']);
}

//echo json_encode($data);
$json_messages = json_encode(['Json_Data' => $data_messages]);
echo $json_messages;
file_put_contents($filename_messages, $json_messages);

//get controler information

$query_controllers = mysqli_query($connection, "select CTRNAM, CTRDESCR from controllers");
$data_controllers = array();
$filename_controllers = "F:\Repo\SIRclient\php\controllers_output.php";

while($row = mysqli_fetch_array($query_controllers))
{
    $data_controllers[] = array("ctrname" => $row['CTRNAM'],"describ" => $row['CTRDESCR']);
}

$json_controllers = json_encode(['Json_Data' => $data_controllers]);
file_put_contents($filename_controllers,$json_controllers);

?>