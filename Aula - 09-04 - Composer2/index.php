<?php

require_once './vendor/autoload.php';
use App\Modelo\Pessoa;

$router = new \Bramus\Router\Router();

$router->post("/cadastro", function () {
    $p = new Pessoa();
    $p->setNome(filter_input(INPUT_POST,"nome"));
    $p->setIdade(filter_input(INPUT_POST,"idade"));    
    $p->create($p);
});

$router->post('/atualizacao', function () {
    $p = new Pessoa();
    $p->setCodigo(filter_input(INPUT_POST,"id"));
    $p->setNome(filter_input(INPUT_POST,"nome"));
    $p->setIdade(filter_input(INPUT_POST,"idade"));    
    $p->update($p);
});

$router->get("/listar", function () {
    $p = new Pessoa();
    return $p->getAll();
});

$router->post("/delete", function () {
    $p = new Pessoa();
    $p->setCodigo(filter_input(INPUT_POST,"id"));
    $p->delete($p);
});

$router->run();