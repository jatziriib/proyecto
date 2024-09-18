<?php
include_once('conexion.php');
header('Access-Control-Allow-Origin: *');
$nombre=$_GET['nombre'];
$contrasena=$_GET['contrasena'];

mysqli_query($mysqli,"update registro set contrasena='$contrasena' where nombre='$nombre' ")
or die ('Error al actualizar');
$res=json_encode('Exito update!!');
echo $res;
return $res;
?>
