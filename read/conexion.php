<?php
$host='127.0.0.1';
$name='readbooks';
$user='root';
$pass='';

$mysqli=mysqli_connect($host,$user,$pass,$name);

if(! $mysqli){
die('error en la conexion!!');
}
?>