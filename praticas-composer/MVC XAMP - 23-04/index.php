<?php
require_once __DIR__ . '/vendor/autoload.php';

use Bramus\Router\Router;

$router = new Router();

$router->setNamespace('App\Controle');
$router->get('/', 'ControleIndex@index');
$router->get('/clientes/listar', 'ControleCliente@listar');
$router->get('/clientes/digitar', 'ControleCliente@digitar');
$router->post('/clientes/digitar/{id}', 'ControleCliente@editar');
$router->post('/clientes/excluir/{id}', 'ControleCliente@excluir');
$router->post('/clientes/cadastrar', 'ControleCliente@cadastrar');
$router->post('/clientes/atualizar', 'ControleCliente@atualizar');

$router->set404('ControleErros@e404');

$router->run();