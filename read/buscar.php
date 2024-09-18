<?php
include_once('conexion.php');
header('Access-Control-Allow-Origin: *');
$nombre=$_GET['nombre'];

$result=mysqli_query($mysqli, "select * from registro where nombre='$nombre' ")
or die ('Error en el select');

$rows=array();
while($r=mysqli_fetch_assoc($result)){
$rows[]=$r;
}

$res=json_encode($rows);
echo $res;
return $res;
?>