<x-layout>

	<x-slot:tituloPagina>
		Login
	</x-slot:tituloPagina>

	<div>
		<p>
			@error('email')
                {{ $message }}
            @enderror
		</p>
	</div>

    <h2 class="text-center m-3">Login</h2>
	<section class="container d-flex justify-content-center">
        
		<form action="/login" method="POST" class="w-50">
			@csrf
			<div class="input-group flex-nowrap mb-3">
				<span class="input-group-text" id="addon-wrapping">@</span>
				<input class="form-control" type="email" name="email" id="email" placeholder="nome@example.com" aria-label="email" aria-describedby="addon-wrapping" required value="{{ old('email') }}">
			</div>
			<div>
				<div class="input-group flex-nowrap mb-3">
					<span class="input-group-text" id="addon-wrapping">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewbox="0 0 16 16">
							<path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
						</svg>
					</span>
					<label for="password"></label>
					<input class="form-control" type="password" name="password" id="password" required placeholder="Digite sua senha">
				</div>
				<button type="submit" class="btn btn-success mt-2">Entrar</button>
			</form>
		</section>

	</x-layout>

