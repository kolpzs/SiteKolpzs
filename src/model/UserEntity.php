<?php

class UserEntity
{
    private string $nome;
    private string $email;
    private int $tel;
    private string $data_nasc;
    private string $senha;
    private string $confirm;
    private int $news;
    private int $termos;

    public function __construct(
        string $nome,
        string $email,
        int $tel,
        string $data_nasc,
        string $senha,
        string $confirm,
        int $news,
        int $termos
    ) {
        $this->nome = $nome;
        $this->email = $email;
        $this->tel = $tel;
        $this->data_nasc = $data_nasc;
        $this->senha = $senha;
        $this->confirm = $confirm;
        $this->news = $news;
        $this->termos = $termos;
    }

    // Getters e Setters

    public function getNome(): string
    {
        return $this->nome;
    }

    // Setter para 'nome'
    public function setNome(string $nome): void
    {
        $this->nome = $nome;
    }

    // Getter para 'email'
    public function getEmail(): string
    {
        return $this->email;
    }

    // Setter para 'email'
    public function setEmail(string $email): void
    {
        $this->email = $email;
    }
    public function getTel(): int
    {
        return $this->tel;
    }

    // Setter para 'tel'
    public function setTel(int $tel): void
    {
        $this->tel = $tel;
    }

    // Getter para 'data_nasc'
    public function getDataNasc(): string
    {
        return $this->data_nasc;
    }

    // Setter para 'data_nasc'
    public function setDataNasc(string $data_nasc): void
    {
        $this->data_nasc = $data_nasc;
    }

    // Getter para 'senha'
    public function getSenha(): string
    {
        return $this->senha;
    }

    // Setter para 'senha'
    public function setSenha(string $senha): void
    {
        $this->senha = $senha;
    }

    // Getter para 'confirm'
    public function getConfirm(): string
    {
        return $this->confirm;
    }

    // Setter para 'confirm'
    public function setConfirm(string $confirm): void
    {
        $this->confirm = $confirm;
    }

    // Getter para 'news'
    public function getNews(): int
    {
        return $this->news;
    }

    // Setter para 'news'
    public function setNews(int $news): void
    {
        $this->news = $news;
    }

    // Getter para 'termos'
    public function getTermos(): int
    {
        return $this->termos;
    }

    // Setter para 'termos'
    public function setTermos(int $termos): void
    {
        $this->termos = $termos;
    }
}
