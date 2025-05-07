<style>
	table {
		border-collapse: collapse;
		border: 1px solid #ddd;
		margin: 20px 10px;
		width: 90%;
	}

	th,
	td {
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
	<x-slot:titulo>Livros</x-slot:titulo>
	@session('success')
        {{ session('success') }}
    @endsession
	<div
		class="table">
		@if (count($livros) > 0)
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Ano</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($livros as $livro)
                        <tr>
                            <td>{{ $livro->id }}</td>
                            <td>{{ $livro->titulo }}</td>
                            <td>{{ $livro->autor }}</td>
                            <td>{{ $livro->ano_publicacao }}</td>
                            <td>{{ $livro->descricao }}</td>
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
                                <form action="/livros/editar" method="post">
                                    @csrf
                                    <input type="hidden" name="id" value="{{ $livro->id }}">
                                    <button type="submit" style="background-color: #4CAF50">Editar</button>
                                </form>
                                <form action="/livros/deletar" method="post">
                                    @csrf
                                    <input type="hidden" name="id" value="{{ $livro->id }}">
                                    <button type="submit" style="background-color: red">Deletar</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        @else
            <p>Nenhum livro encontrado.</p>
        @endif
	</div>

</x-layout>
