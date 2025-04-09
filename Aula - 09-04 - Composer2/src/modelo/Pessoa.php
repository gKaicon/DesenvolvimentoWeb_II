<?php

namespace App\Modelo;
use PDOException;
use PDO;
use App\Controle\Conexao;

class Pessoa{

    private int $codigo;
    private $nome;
    private $idade;

    public function getNome()
    {
        return $this->nome;
    }
    public function setNome($nome)
    {
        $this->nome = $nome;

        return $this;
    }

    public function getIdade()
    {
        return $this->idade;
    }

    public function setIdade($idade)
    {
        $this->idade = $idade;

        return $this;
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

    public function create(Pessoa $pessoa): bool
    {
        $sql = "INSERT INTO pessoas (nome, idade) VALUES (:nome, :idade)";
        try {
            $stmt = Conexao::getPreparedStatement($sql);
            $stmt->bindValue(':nome', $pessoa->getNome(), PDO::PARAM_STR);
            $stmt->bindValue(':idade', $pessoa->getIdade(), PDO::PARAM_INT);
            $resposta = $stmt->execute();
            echo $resposta;
            return $resposta;
        } catch (PDOException $e) {
            print_r("Erro ao criar pessoa: " . $e->getMessage());
            return false;
        }
    }

    public function read(Pessoa $pessoa): ?array
    {
        $sql = "SELECT codigo, nome, idade FROM pessoas WHERE codigo = :codigo";
        try {
            $stmt = Conexao::getPreparedStatement($sql);
            $stmt->bindValue(':codigo', $pessoa->getCodigo(), PDO::PARAM_INT);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            print_r("Erro ao ler pessoa: " . $e->getMessage());
            return null;
        }
    }

    public function getAll()
    {
        $sql = "SELECT codigo, nome, idade FROM pessoas";
        try {
            $stmt = Conexao::getPreparedStatement($sql);           
            $stmt->execute();
            print_r($stmt->fetchAll(PDO::FETCH_ASSOC));
        } catch (PDOException $e) {
            print_r("Erro ao ler pessoa: " . $e->getMessage());
            return null;
        }
    }

    public function update(Pessoa $pessoa): bool
    {
        $sql = "UPDATE pessoas SET nome = :nome, idade = :idade WHERE codigo = :codigo";
        try {
            $stmt = Conexao::getPreparedStatement($sql);
            $stmt->bindValue(':codigo', $pessoa->getCodigo(), PDO::PARAM_INT);
            $stmt->bindValue(':nome', $pessoa->getNome(), PDO::PARAM_STR);
            $stmt->bindValue(':idade', $pessoa->getIdade(), PDO::PARAM_INT);
            $resposta = $stmt->execute();
            echo $resposta;
            return $resposta;
        } catch (PDOException $e) {
            print_r("Erro ao atualizar pessoa: " . $e->getMessage());
            return false;
        }
    }

    public function delete(Pessoa $pessoa): bool
    {
        $sql = "DELETE FROM pessoas WHERE codigo = :codigo";
        try {
            $stmt = Conexao::getPreparedStatement($sql);
            $stmt->bindValue(':codigo', $pessoa->getCodigo(), PDO::PARAM_INT);
            $resposta = $stmt->execute();
            echo $resposta;
            return $resposta;
        } catch (PDOException $e) {
            print_r("Erro ao deletar pessoa: " . $e->getMessage());
            echo "false";
            return false;
        }
    }
}