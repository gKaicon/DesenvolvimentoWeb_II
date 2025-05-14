<x-layout>
	<x-slot:tituloPagina>{{ $tituloPagina }}</x-slot:tituloPagina>
	<div class="container">
		<h1>{{ $tituloPagina }}</h1>
		<form method="POST" action="/produtos/{{ isset($produto) ? 'atualizar' : 'armazenar' }}">
			@csrf
			<input type="hidden" name="id" value="{{ $produto->id ?? ''}}">
			<div class="input-group mb-3">
				<span class="input-group-text" id="basic-addon1">Nome</span>
				<input type="text" class="form-control" placeholder="Nome do produto" aria-label="Nome do produto"
					id="nome" name="nome" aria-describedby="basic-addon1" value="{{ $produto->nome ?? '' }}">
			</div>
			<div class="input-group mb-3 text-left">
				<span class="input-group-text">Descrição</span>
				<textarea class="form-control" aria-label="Descricao" id="descricao" name="descricao">{{ $produto->descricao ?? '' }} </textarea>
			</div>
			<div class="input-group mb-3">
				<span class="input-group-text">Preço de Custo</span>
				<span class="input-group-text border-none">R$</span>
				<input type="text" class="form-control" aria-label="Preço Custo" placeholder="00.00" value="{{ $produto->preco_custo ?? '' }}" id="preco_custo" name="preco_custo">
			</div>
			<div class="input-group mb-3">
				<span class="input-group-text">Quantidade</span>
				<input type="number" class="form-control" aria-label="qtd" placeholder="00" value="{{ $produto->quantidade ?? '' }}" id="quantidade" name="quantidade">
			</div>
			<button type="submit" class="btn btn-success">{{ isset($produto) ? 'Salvar' : 'Criar' }}</button>
		</form>
	</div>
</x-layout>
