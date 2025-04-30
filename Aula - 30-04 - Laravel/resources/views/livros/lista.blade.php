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
    <div class="table">
        @if (count($livros) > 0)
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Autor</th>
                        <th>Ano</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($livros as $livro)
                        <tr>
                            <td>{{ $livro->id }}</td>
                            <td>{{ $livro->autor }}</td>
                            <td>{{ $livro->ano_publicacao }}</td>
                            <td>{{ $livro->descricao }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        @else
            <p>Nenhum livro encontrado.</p>
        @endif
    </div>

</x-layout>