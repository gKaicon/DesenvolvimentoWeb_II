<?php
namespace App\Controle;

use App\Modelo\Cliente;
use App\Visao\VisaoCliente;

class ControleCliente
{

    public function digitar()
    {
        $vC = new VisaoCliente();
        $vC->mostrarForm('cadastrar');
    }

    public function editar($id)
    {
        $vC = new VisaoCliente();
        $id = filter_input(INPUT_POST, 'id');
        $cliente = Cliente::getById($id);
        if ($cliente) {
            $vC->mostrarForm('atualizar', $cliente);
        } else {
            $vC->exibirMensagem('Cliente não encontrado!');
        }
    }

    public function cadastrar()
    {
        $nome = filter_input(INPUT_POST, 'nome');
        $cpf = filter_input(INPUT_POST, 'cpf');
        $dt_nascimento = filter_input(INPUT_POST, 'dt_nascimento');

        $cliente = new Cliente($nome, $dt_nascimento, $cpf);
        $vC = new VisaoCliente();
        $msg = '';
        if($cliente->create($cliente)) {
            $msg = 'Cliente cadastrado com sucesso!';
        } else {
            $msg = 'Erro ao cadastrar cliente!';
        }
        $vC->exibirMensagem($msg);
    }

    public function atualizar()
    {
        $codigo = filter_input(INPUT_POST, 'id');
        $nome = filter_input(INPUT_POST, 'nome');
        $cpf = filter_input(INPUT_POST, 'cpf');
        $dt_nascimento = filter_input(INPUT_POST, 'dt_nascimento');

        $cliente = new Cliente($nome, $dt_nascimento, $cpf, $codigo);
        $vC = new VisaoCliente();
        $msg = '';
        if($cliente->update($cliente)) {
            $msg = 'Cliente atualizado com sucesso!';
        } else {
            $msg = 'Erro ao cadastrar cliente!';
        }
        $vC->exibirMensagem($msg);
    }

    public function listar()
    {
        $vC = new VisaoCliente();
        $vC->exibir(Cliente::getAll());
    }

    public function excluir(){
        $codigo = filter_input(INPUT_POST, 'id');
        $cliente = new Cliente();
        $vC = new VisaoCliente();
        $msg = '';
        if($cliente->delete($codigo)) {
            $msg = 'Cliente deletado com sucesso!';
        } else {
            $msg = 'Erro ao deletar cliente!';
        }
        $vC->exibirMensagem($msg);
    }
}


