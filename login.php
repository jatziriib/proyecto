<?php
include_once('conexion.php');

header('Access-Control-Allow-Origin: *');

$user=$_GET['user'];

$pass=$_GET['pass'];

$e='';


$result=mysqli_query($mysqli,"select * from registro where nombre='$user' and contrasena='$pass'") or die ('Error en el select');

$rows=array();

if($r=mysqli_fetch_assoc($result))
{
$rows[]=$r;

$e='si';

}else{

$e='no';
}

$existe=json_encode($e);

echo $existe;

return $existe;

?>