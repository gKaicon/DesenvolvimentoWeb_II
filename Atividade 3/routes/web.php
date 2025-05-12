<?php
use App\Http\Controllers\ProdutoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/produtos', [ProdutoController::class, 'exibirProdutos']);
Route::get('/produtos/criar', [ProdutoController::class, 'criarProduto']);
Route::post('/produtos/armazenar', [ProdutoController::class, 'armazenarProduto']);
Route::post('/produtos/editar', [ProdutoController::class, 'editarProduto']);
Route::post('/produtos/atualizar', [ProdutoController::class, 'atualizarProduto']);
Route::post('/produtos/deletar', [ProdutoController::class, 'deletarProduto']);
