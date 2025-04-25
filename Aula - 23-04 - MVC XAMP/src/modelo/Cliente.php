<?php

namespace App\Modelo;

use PDOException;
use PDO;
use App\Controle\Conexao;

class Cliente
{

    private $codigo;
    private $nome;
    private $cpf;
    private $dt_nascimento;

    public function __construct($nome = null, $dt_nascimento = null, $cpf = null, $codigo = null) {
        $this->nome = $nome;
        $this->cpf = $cpf;
        $this->dt_nascimento = $dt_nascimento;        
        $this->codigo = $codigo;
    }

    public function getCodigo()
    {
        return $this->codigo;
    }

    public function setCodigo($codigo)
    {
        $this->codigo = $codigo;

        return $this;
    }

    public function getNome()
    {
        return $this->nome;
    }
    public function setNome($nome)
    {
        $this->nome = $nome;

        return $this;
    }
    public function getCpf()
    {
        return $this->cpf;
    }

    public function setCpf($cpf)
    {
        $this->cpf = $cpf;

        return $this;
    }

    public function getDt_nascimento()
    {
        return $this->dt_nascimento;
    }

    public function setDt_nascimento($dt_nascimento)
    {
        $this->dt_nascimento = $dt_nascimento;

        return $this;
    }

    public function create(Cliente $cliente): bool
    {
        $sql = "INSERT INTO cliente (nome, dt_nascimento, cpf) VALUES (:nome, :dt_nascimento, :cpf)";
        try {
            $stmt = Conexao::getPreparedStatement($sql);
            $stmt->bindValue(':nome', $cliente->getNome(), PDO::PARAM_STR);
            $stmt->bindValue(':dt_nascimento', $cliente->getdt_nascimento(), PDO::PARAM_STR);
            $stmt->bindValue(':cpf', $cliente->getCpf(), PDO::PARAM_STR);
            return $stmt->execute();
        } catch (PDOException $e) {
            print_r("Erro ao criar Cliente: " . $e->getMessage());
            return false;
        }
    }


    public static function getById($idCliente)
    {
        $sql = "SELECT codigo, nome, dt_nascimento, cpf FROM cliente WHERE codigo = :codigo";
        try {
            $stmt = Conexao::getPreparedStatement($sql);
            $stmt->bindValue(':codigo', $idCliente, PDO::PARAM_INT);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            print_r("Erro ao ler Cliente: " . $e->getMessage());
            return null;
        }
    }

    public static function getAll()
    {
        $sql = "SELECT codigo, nome, dt_nascimento, cpf FROM cliente";
        try {
            $stmt = Conexao::getPreparedStatement($sql);
            $stmt->execute();
            return ($stmt->fetchAll(PDO::FETCH_ASSOC));
        } catch (PDOException $e) {
            print_r("Erro ao ler Cliente: " . $e->getMessage());
            return null;
        }
    }

    public function update(Cliente $cliente): bool
    {
        $sql = "UPDATE cliente SET nome = :nome, dt_nascimento = :dt_nascimento, cpf = :cpf WHERE codigo = :codigo";
        try {
            $stmt = Conexao::getPreparedStatement($sql);
            $stmt->bindValue(':codigo', $cliente->getCodigo(), PDO::PARAM_INT);
            $stmt->bindValue(':nome', $cliente->getNome(), PDO::PARAM_STR);
            $stmt->bindValue(':dt_nascimento', $cliente->getdt_nascimento(), PDO::PARAM_STR);
            $stmt->bindValue(':cpf', $cliente->getCpf(), PDO::PARAM_STR);
            return $stmt->execute();
        } catch (PDOException $e) {
            print_r("Erro ao atualizar Cliente: " . $e->getMessage());
            return false;
        }
    }

    public function delete($idCliente): bool
    {
        $sql = "DELETE FROM cliente WHERE codigo = :codigo";
        try {
            $stmt = Conexao::getPreparedStatement($sql);
            $stmt->bindValue(':codigo', $idCliente, PDO::PARAM_INT);
            return $stmt->execute();
        } catch (PDOException $e) {
            print_r("Erro ao deletar Cliente: " . $e->getMessage());
            return false;
        }
    }


}