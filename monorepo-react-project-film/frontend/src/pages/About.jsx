import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        document.title = "Sobre Nosso Sistema - Filme Mania";
    }, []); // O array vazio [] garante que isso só será executado uma vez, quando o componente for montado.

    return (
        <div className="container-fluid my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow-sm p-4">
                        <div className="card-body">
                            {/* Título com borda inferior para destaque */}
                            <h1 className="display-5 border-bottom pb-3 mb-4">Sobre Nosso Sistema</h1>

                            {/* Parágrafo de introdução com a classe .lead para maior destaque */}
                            <p className="lead text-muted">
                                Bem-vindo ao seu novo centro de comando para o universo do cinema! Este sistema foi criado para ajudar cinéfilos e amantes de filmes a organizar, explorar e expandir suas paixões pela sétima arte.
                            </p>

                            <h3 className="mt-5">O que você pode fazer aqui?</h3>

                            {/* A lista de funcionalidades foi transformada em um "List Group" do Bootstrap */}
                            <ul className="list-group list-group-flush mt-3">
                                <li className="list-group-item">
                                    <i className="bi bi-film me-2 text-primary"></i>
                                    <strong>Catalogue sua Coleção:</strong> Adicione facilmente os filmes que você já assistiu e mantenha um registro completo da sua jornada cinematográfica.
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-star me-2 text-primary"></i>
                                    <strong>Crie Listas de Desejos:</strong> Monte uma lista com todos os filmes que você ainda quer assistir. Nunca mais perca uma recomendação!
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-info-circle me-2 text-primary"></i>
                                    <strong>Informações Detalhadas:</strong> Tenha acesso a sinopses, elenco, diretores, gêneros e muito mais. Tudo em um só lugar.
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-chat-square-quote me-2 text-primary"></i>
                                    <strong>Avalie e Comente:</strong> Dê sua nota para os filmes e escreva suas próprias críticas. Guarde suas opiniões ou compartilhe com amigos.
                                </li>
                                <li className="list-group-item">
                                    <i className="bi bi-search me-2 text-primary"></i>
                                    <strong>Descubra Novos Títulos:</strong> Explore e encontre novos filmes com base em seus gostos e no que outras pessoas estão assistindo.
                                </li>
                            </ul>

                            <p className="mt-5">
                                Nosso objetivo é fornecer uma ferramenta simples e poderosa para que você possa mergulhar ainda mais fundo no mundo dos filmes. Esperamos que aproveite!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;