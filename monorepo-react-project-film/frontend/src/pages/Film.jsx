import { useEffect, useState } from "react";
import { createOrEditFilm, deleteFilm, listFilms } from "../data_access/film_access";
import { listGenders } from "../data_access/gender_access";
import { listActors } from "../data_access/actor_access";

const Film = () => {
    useEffect(() => {
        document.title = "Filme Mania - Filmes";
    }, []);
    const [films, setFilms] = useState([]);
    const [allActors, setAllActors] = useState([]);
    const [genders, setGenders] = useState([]);
    const [action, setAction] = useState('Criar');
    const [id, setId] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [release_year, setYear] = useState('');
    const [genderId, setGenderId] = useState('');

    useEffect(() => {
        listFilms().then(data => setFilms(data));
        listGenders().then(data => setGenders(data));
        listActors().then(data => {
            const actorsWithChecked = data.map(actor => ({ ...actor, checked: false }));
            setAllActors(actorsWithChecked);
        });
    }, []);

    const resetForm = () => {
        setId(null);
        setTitle('');
        setDescription('');
        setYear('');
        setGenderId('');
        setAllActors(prevActors => prevActors.map(actor => ({ ...actor, checked: false })));
        setAction('Criar');
    };

    const handleSubmitFilm = (e) => {
        e.preventDefault();
        const filmData = {
            id,
            title,
            description,
            release_year,
            genderId: genderId,
            actors: allActors.filter(actor => actor.checked).map(actor => actor.id)
        };

        createOrEditFilm(filmData).then((res) => {
            alert(res.message);
            listFilms().then(data => setFilms(data)); 
            resetForm();
        });
    };

    const handleEditButton = (filmId) => {
        const filmToEdit = films.find(f => f.id == filmId);
        if (filmToEdit) {
            setId(filmToEdit.id);
            setTitle(filmToEdit.title);
            setDescription(filmToEdit.description);
            setYear(filmToEdit.release_year);
            setGenderId(filmToEdit.GenderId);
            // Marca os atores que participam do filme
            setAllActors(prevActors => prevActors.map(actor => ({
                ...actor,
                checked: filmToEdit.Actors.some(a => a.id == actor.id)
            })));
            setAction('Editar');
        }
    };
    
    const handleDelButton = (filmId) => {
        if (window.confirm("Tem certeza que deseja excluir este filme?")) {
            deleteFilm(filmId).then((res) => {
                alert(res.message);
                listFilms().then(data => setFilms(data));
            });
        }
    };

    const toggleSelectActors = (actorId) => {
        setAllActors(prevActors => prevActors.map(actor =>
            actor.id == actorId ? { ...actor, checked: !actor.checked } : actor
        ));
    };

    return (
        <div className="container mt-5 bg-secondary p-4 shadow-sm rounded">
            <div className="row">
                <div className="col-lg-5 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-header bg-dark text-white p-3">
                            <h3 className="card-title mb-0 text-center">{action} Filme</h3>
                        </div>
                        <div className="card-body p-4">
                            <form onSubmit={handleSubmitFilm}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Título</label>
                                    <input id="title" type="text" className="form-control" value={title} required onChange={e => setTitle(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Descrição</label>
                                    <input id="description" type="text" className="form-control" value={description} required onChange={e => setDescription(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="release_year" className="form-label">Ano</label>
                                    <input id="release_year" type="number" className="form-control" value={release_year} required onChange={e => setYear(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="genderId" className="form-label">Gênero</label>
                                    <select id="genderId" className="form-select" value={genderId} required onChange={e => setGenderId(e.target.value)}>
                                        <option value="" disabled>Selecione o gênero...</option>
                                        {genders.map((g) => (
                                            <option key={g.id} value={g.id}>{g.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Elenco</label>
                                    <div className="border rounded p-2" style={{ maxHeight: '150px', overflowY: 'auto' }}>
                                        {allActors.map((actor) => (
                                            <div key={actor.id} className="form-check">
                                                <input className="form-check-input" type="checkbox" id={`actor-${actor.id}`} value={actor.id} checked={actor.checked} onChange={() => toggleSelectActors(actor.id)} />
                                                <label className="form-check-label" htmlFor={`actor-${actor.id}`}>{`${actor.first_name} ${actor.last_name}`}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className={`btn ${action === 'Criar' ? 'btn-primary' : 'btn-success'}`}>
                                        <i className={`bi ${action === 'Criar' ? 'bi-plus-circle' : 'bi-check-circle'}`}></i> {action}
                                    </button>
                                    {action === 'Editar' && (
                                        <button type="button" className="btn btn-secondary" onClick={resetForm}>
                                            <i className="bi bi-x-circle"></i> Cancelar
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <h1 className="text-center bg-dark text-white m-0 rounded-top">Lista de Filmes 🎬</h1>
                    <div className="table-responsive rounded-bottom">
                        <table className="table table-striped table-hover table-bordered shadow-sm">
                            <thead className="table-dark">
                                <tr>
                                    <th>Título</th>
                                    <th>Ano</th>
                                    <th>Gênero</th>
                                    <th>Elenco</th>
                                    <th style={{ width: '130px' }}>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {films.map((film) => (
                                    <tr key={film.id}>
                                        <td className="align-middle">{film.title}</td>
                                        <td className="align-middle">{film.release_year}</td>
                                        <td className="align-middle">{film.gender.name}</td>
                                        <td className="align-middle">
                                            {film.Actors.map((actor) => (
                                                <span key={actor.id} className="text-dark me-1">{actor.first_name};</span>
                                            ))}
                                        </td>
                                        <td className="align-middle">
                                            <button onClick={() => handleEditButton(film.id)} className="btn btn-sm btn-warning m-1" title="Editar">
                                                Editar
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                            <button onClick={() => handleDelButton(film.id)} className="btn btn-sm btn-danger m-1" title="Excluir">
                                                Excluir
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Film;