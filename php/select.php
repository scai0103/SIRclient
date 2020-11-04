<?php
include 'sql.php';

$output = array();

$query ="SELECT * FROM messages";

$result = mysqli_query($connection, $query);

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_array($result))
    {
        $output[] = array("name"=>$row['name'],"type"=>$row['type'],"body"=>$row['body']);;
    }

    echo json_encode($output);
}
?>