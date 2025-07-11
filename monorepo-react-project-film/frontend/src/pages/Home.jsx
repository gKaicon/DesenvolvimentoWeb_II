import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = "Filme Mania";
    }, []);
    return (
        <div className="container mt-5 text-white">
            <h1 className="display-1">Sistema de gerenciamento de filmes</h1>
            <p className="lead">Conteúdo da página inicial.</p>
        </div>
    );
}

export default Home;
