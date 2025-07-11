<?php
use App\Http\Controllers\LivroController;

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('index');
});

Route::get('/livros', [LivroController::class, 'exibirLivros']);
Route::get('/livros/criar', [LivroController::class, 'criarLivro']);
Route::post('/livros/armazenar', [LivroController::class, 'armazenarLivro']);
Route::post('/livros/editar', [LivroController::class, 'editarLivro']);
Route::post('/livros/atualizar', [LivroController::class, 'atualizarLivro']);
Route::post('/livros/deletar', [LivroController::class, 'deletarLivro']);
