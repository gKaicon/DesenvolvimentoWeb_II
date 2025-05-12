<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produto;

class ProdutoController extends Controller
{
    public function exibirProdutos()
    {
        $produto = Produto::all() ?? [];
        return view('produtos.lista', ['produtos' => $produto, 'tituloPagina' => 'Listagem de Produtos']);
    }

    public function criarProduto()
    {
        return view('produtos.form', ['tituloPagina' => 'Novo Produto']);
    }

    public function armazenarProduto(Request $request)
    {
        Produto::create(
            [
                'nome' => $request->input('nome'),
                'descricao' => $request->input('descricao'),
                'preco_custo' => $request->input('preco_custo'),
                'preco_venda' => (($request->input('preco_custo') * 0.3) + $request->input('preco_custo')),
                'quantidade' => $request->input('quantidade')
            ]
        );
        return redirect('/produtos')->with('success', 'Produto inserido com sucesso!');
    }

    public function editarProduto(Request $request)
    {
        $id = $request->input('id');
        $produtos = Produto::findOrFail($id);
        return view('produtos.form', ['produto' => $produtos, 'tituloPagina' => 'Editar Produto']);
    }

    public function atualizarProduto(Request $request)
    {
        $id = $request->input('id');
        $Produto = Produto::findOrFail($id);
        $Produto->update([
            'nome' => $request->input('nome'),
            'descricao' => $request->input('descricao'),
            'preco_custo' => $request->input('preco_custo'),
            'preco_venda' => (($request->input('preco_custo') * 0.3) + $request->input('preco_custo')),
            'quantidade' => $request->input('quantidade')
        ]);
        return redirect('/produtos')->with('success', 'Produto atualizado com sucesso!');
    }

    public function deletarProduto(Request $request)
    {
        $id = $request->input('id');
        $Produto = Produto::findOrFail($id);
        $Produto->delete();
        return redirect('/produtos')->with('success', 'Produto deletado com sucesso!');
    }
}
