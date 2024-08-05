<?php

require __DIR__ . "/src/model/UserEntity.php";

$userPost = [
    'nome' => $_POST['nome'],
    'email' => $_POST['email'],
    'tel' => $_POST['tel'],
    'data_nasc' => $_POST['data_nasc'],
    'senha' => $_POST['senha'],
    'confirm' => $_POST['confirm'],
    'news' => $_POST['news'] != null || 0,
    'termos' => $_POST['termos']!= null || 0,
];

$userEntity = new UserEntity(
    $_POST['nome'],
    $_POST['email'],
    $_POST['tel'],
    $_POST['data_nasc'],
    $_POST['senha'],
    $_POST['confirm'],
    $_POST['news'] != null || 0,
    $_POST['termos']!= null || 0
);

file_put_contents('userEntity.json', json_encode($userEntity));

file_put_contents('userPost.json', json_encode($userPost));

echo "<script>window.location.href = 'index.html';</script>";
exit;
