<?php
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\UserController;
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

Route::get('/login', [UserController::class, 'digitarLogin'])->name('login');
Route::post('/login', [UserController::class, 'login']);
Route::get('/logout', [UserController::class, 'logout']);

Route::get('/produtos', [ProdutoController::class, 'exibirProdutos']);
Route::get('/produtos/criar', [ProdutoController::class, 'criarProduto'])->middleware('auth');
Route::post('/produtos/armazenar', [ProdutoController::class, 'armazenarProduto'])->middleware('auth');
Route::post('/produtos/editar', [ProdutoController::class, 'editarProduto'])->middleware('auth');
Route::post('/produtos/atualizar', [ProdutoController::class, 'atualizarProduto'])->middleware('auth');
Route::post('/produtos/deletar', [ProdutoController::class, 'deletarProduto'])->middleware('auth');



