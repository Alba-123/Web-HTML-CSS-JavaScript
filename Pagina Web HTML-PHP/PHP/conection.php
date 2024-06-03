
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intro-PHP</title>
    <link rel="stylesheet" type="text/css" href="../CSS/style.css">
    <script src="../JavaScript/motor.js"></script>
</head>
<body>
    
    <div>
    <?php
        include "../PHP/info.php";

        $nombre=$_POST["name"];
        $telefono=$_POST["phone"];
        $username="root";
        $server="localhost";
        $password="";
        $name_bd="cuentas";
        $sql="INSERT INTO cuenta (nombre,telefono) VALUES ('$nombre', $telefono)";
        
        $conexion = mysqli_connect ($server, $username, $password, $name_bd);
        if (!$conexion){
            echo "Error: No se pudo conectar a la bbdd".PHP_EOL." ".mysqli_connect_error().PHP_EOL;
        }
        else{
            if ($conexion->query($sql)){
                echo "<h2 id='texto'><strong>Registro insertado con exito</h2>";
            }
            else{
                die("Connection failed: ".mysqli_connect_error());
            }
        }

        include "../PHP/footer.php";
    ?>
    </div>
</body>
</html>
    
?>
