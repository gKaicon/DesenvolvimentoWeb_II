<x-layout>

	<x-slot:titulo>Novo livro</x-slot:titulo>

	<style>
		form {
			padding-left: 10px;
			width: 60%;
		}

		form,
		button {
			font-weight: 700;
			font-size: 26px;
		}

		form div {
			display: flex;
			margin: 8px 0;
		}

        input[type="text"] , textarea{
            width: 100%;
        }
		button[type="submit"] {
			background-color: #ff3737;
			color: #fff;
			padding: 10px 20px;
			border: none;
			border-radius: 5px;
			cursor: pointer;
		}
	</style>
	<form method="POST" action="/livros/{{ isset($livro) ? 'atualizar' : 'armazenar' }}">
		@csrf
		<input type="hidden" name="id" value="{{ $livro->id ?? ''}}">
		<div>
			<label for="titulo">Título:</label><br>
			<input type="text" id="titulo" name="titulo" value="{{ $livro->titulo ?? '' }}" required>
		</div>
		<div>
			<label for="autor">Autor:</label><br>
			<input type="text" id="autor" name="autor" value="{{ $livro->autor ?? '' }}" required>
		</div>
		<div>
			<label for="ano_publicacao">Ano de publicação:</label><br>
			<input type="number" id="ano_publicacao" name="ano_publicacao" value="{{ $livro->ano_publicacao ?? '' }}" required>
		</div>
		<div>
			<label for="descricao">Descrição:</label><br>
			<textarea rows="8" id="descricao" name="descricao" required>{{ $livro->descricao ?? '' }}</textarea>
		</div>
		<button type="submit">{{ isset($livro) ? 'Salvar' : 'Criar' }}</button>
	</form>

</x-layout>

