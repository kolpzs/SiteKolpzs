<?php
// Informações do banco de dados
$hostname = "localhost";
$username = "root";
$password = "root"; // Altere para a sua senha
$dbname = "loginDB"; // Nome do banco de dados

// Conectar ao banco de dados
$connection = mysqli_connect($hostname, $username, $password, $dbname);

// Verificar a conexão
if (!$connection) {
    echo "Erro na conexão: " . mysqli_connect_error();
    exit(); // Encerra o script
}

// Conexão bem-sucedida!
echo "Conexão realizada com sucesso!";
// ... continue com suas operações no banco de dados

// Fechar a conexão
mysqli_close($connection);
?>
