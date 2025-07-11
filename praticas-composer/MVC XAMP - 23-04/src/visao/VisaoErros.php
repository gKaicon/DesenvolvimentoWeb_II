<?php
namespace App\Visao;

use Twig\Loader\FilesystemLoader;
use Twig\Environment;

class VisaoErros
{
    public function exibirErro404()
    {
        $loader = new FilesystemLoader(__DIR__ . '/templates');
        $twig = new Environment($loader);
        echo $twig->render('404.html.twig');
    }
}