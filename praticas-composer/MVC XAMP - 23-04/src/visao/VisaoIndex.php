<?php
namespace App\Visao;

use Twig\Loader\FilesystemLoader;
use Twig\Environment;

class VisaoIndex
{
    public function exibirIndex()
    {
        $loader = new FilesystemLoader(__DIR__ . '/templates');
        $twig = new Environment($loader);
        echo $twig->render('base.html.twig');
    }
}