<?php
namespace App\Visao;

use Twig\Loader\FilesystemLoader;
use Twig\Environment;

class VisaoCliente
{
    public function exibir($clientes)
    {
        $loader = new FilesystemLoader(__DIR__ . '/templates');
        $twig = new Environment($loader);
        echo $twig->render(
            'clientes/clientes.html.twig',
            [
                'modulo' => 'Clientes',
                'dados' => $clientes,
            ]
        );
    }
    public function mostrarForm($acao, $cliente = null)
    {
        $loader = new FilesystemLoader(__DIR__ . '/templates');
        $twig = new Environment($loader);
        echo $twig->render('clientes/form.html.twig',['modulo' => 'Clientes', 'acao' => $acao, 'cliente' => $cliente]);
    }

    public function exibirMensagem($mensagem)
    {
        $loader = new FilesystemLoader(__DIR__ . '/templates');
        $twig = new Environment($loader);
        echo $twig->render('clientes/alert.html.twig', ['modulo' => 'Clientes', 'mensagem' => $mensagem]);
    }
}