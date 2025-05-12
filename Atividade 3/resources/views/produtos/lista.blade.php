<style>
	table {
		border-collapse: collapse;
		border: 1px solid #ddd;
		margin: 20px 10px;
		width: 90%;
	}

	th,	td {
		padding: 8px;
		text-align: left;
		border-bottom: 1px solid #ddd;
	}

	th {
		background-color: #4CAF50;
		color: white;
	}

	tr:nth-child(even) {
		background-color: #f2f2f2;
	}

	.table {
		display: flex;
		justify-content: center;
	}
</style>
<x-layout>
    <x-slot:tituloPagina>{{ $tituloPagina }}</x-slot:tituloPagina>
	@session('success')
        {{ session('success') }}
    @endsession
	<div class="table">
		@if ($produtos != null )
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descricao</th>
                        <th>Preço de Custo</th>
                        <th>Preço de Venda</th>
                        <th>Quantidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($produtos as $produto)
                        <tr>
                            <td>{{ $produto->id }}</td>
                            <td>{{ $produto->nome }}</td>
                            <td>{{ $produto->descricao }}</td>
                            <td>{{ $produto->preco_custo }}</td>
                            <td>{{ $produto->preco_venda }}</td>
                            <td>{{ $produto->quantidade }}</td>
                            <td>
                                <style>
                                    button {
                                        border: none;
                                        color: white;
                                        padding: 4px 8px;
                                        text-align: center;
                                        text-decoration: none;
                                        display: inline-block;
                                        font-size: 14px !important;                                       
                                        cursor: pointer;
                                    }
                                </style>
                                <form action="/produtos/editar" method="post">
                                    @csrf
                                    <input type="hidden" name="id" value="{{ $produto->id }}">
                                    <button type="submit" style="background-color: #4CAF50">Editar</button>
                                </form>
                                <form action="/produtos/deletar" method="post">
                                    @csrf
                                    <input type="hidden" name="id" value="{{ $produto->id }}">
                                    <button type="submit" style="background-color: red">Deletar</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        @else
            <p>Nenhum produto encontrado.</p>
        @endif
	</div>
</x-layout>
