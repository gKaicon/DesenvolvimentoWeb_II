<?php
namespace App\Controle;

use App\Visao\VisaoErros;

class ControleErros
{

    public function e404()
    {
        $vI = new VisaoErros();
        $vI->exibirErro404();
    }
}