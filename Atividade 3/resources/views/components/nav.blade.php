<nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark" ">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Home</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="/produtos/criar">Adicionar</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/produtos">Listagem</a>
				</li>
				<li class="teste-vite d-none">
					teste-vite
				</li>
			</ul>
			<ul class="navbar-nav ms-auto">
				<div>
					@auth
						<li class="nav-item d-flex align-items-center">
							<h5 class="text-white mb-0">Olá,
								{{ Auth::user()->name }}
							</h5>
							<a class="nav-link" href="/logout">Logout </a>
						</li>
					@else
					<li class="nav-item">
						<a class="nav-link" href="/login">Login</a>
					</li>
				@endauth
			</div>
		</ul>
	</div>
</div></nav>

