<?php
namespace App\Controle;

use App\Visao\VisaoIndex;

class ControleIndex
{

    public function index()
    {
        $vI = new VisaoIndex();
        $vI->exibirIndex();
    }
}