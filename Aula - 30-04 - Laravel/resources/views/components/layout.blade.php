<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Prática Laravel</title>
</head>
<body>

    <header>
        <h1>Prática Laravel</h1>
        @include ('components.menu')
        <h3 style="padding-top: 10px;">{{ $titulo }}</h3>
    </header>

    <main>
        {{ $slot }}
    </main>

    <footer>
        <p>&copy; DEW II 2025.</p>
    </footer>

</body>
</html>