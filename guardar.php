<?php
include_once('conexion.php');
header('Access-Control-Allow-origin: *');
$nombre=$_GET['nombre'];
$correo=$_GET['correo'];
$edad=$_GET['edad'];
$contrasena=$_GET['contrasena'];

mysqli_query($mysqli,"insert into registro (nombre, correo, edad, contrasena) values('$nombre','$correo','$edad','$contrasena')") or die ('error al registrar');

$res=json_encode('Registro guardado!!');
echo $res;
return $res;
?>   