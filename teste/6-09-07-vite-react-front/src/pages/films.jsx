import { useContext, useEffect, useState } from "react";
import { createOrEditFilm, deleteFilm, listFilms } from "../data_access/film_access";
import { listActors } from "../data_access/actor_access";
import { listDirectors } from "../data_access/director_access";
import UserContext from "../context/user_context";
import { useNavigate } from "react-router";

const Films = () => {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    const [films, setFilms] = useState([]);
    const [allActors, setAllActors] = useState([]);
    const [directors, setDirectors] = useState([]);
    const [action, setAction] = useState('Criar');
    const [id, setId] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [director, setDirector] = useState('');

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            listFilms()
                .then(films => setFilms(films));
            listActors()
                .then(actors => {
                    actors = actors.map(actor => {
                        actor.checked = false;
                        return actor;
                    });
                    setAllActors(actors)
                });
            listDirectors()
                .then(directors => setDirectors(directors));
        }
    }, []);

    function handleSubmitFilm(e) {
        e.preventDefault();
        const data = {
            id: id,
            title: title,
            description: description,
            year: year,
            DirectorId: director,
            actors: allActors.filter(actor => actor.checked).map(actor => actor.id)
        };

        createOrEditFilm(data)
            .then((res) => {
                alert(res.message);
                listFilms()
                    .then(films => setFilms(films));
            });

        setId(null);
        setTitle('');
        setDescription('');
        setYear('');
        setDirector('');
        setAllActors(allActors.map((actor, index) => { actor.checked = false; return actor; }));
        setAction('Criar');
    }

    function handleEditButton(e) {
        const filmId = e.target.dataset.id;
        const film = films.find(f => f.id == filmId);
        if (film) {
            setId(film.id);
            setTitle(film.title);
            setDescription(film.description);
            setYear(film.year);
            setDirector(film.DirectorId);
            allActors.forEach(actor => {
                actor.checked = film.Actors.some(a => a.id == actor.id);
            });
            setAllActors(allActors.map(v => v));
            setAction('Editar');
        }
    }

    function handleDelButton(e) {
        deleteFilm(e.target.dataset.id)
            .then((res) => {
                alert(res.message);
                listFilms()
                    .then(films => setFilms(films));
            });
    }

    function toggleSelectActors(id) {
        const index = allActors.findIndex((actor) => actor.id == id);
        allActors[index].checked = !allActors[index].checked;
        setAllActors(allActors.map(v => v));
    }

    return (
        <div>
            <h1>Filmes</h1>
            <form onSubmit={handleSubmitFilm}>
                <label>Title</label><br />
                <input type="text" value={title} required
                    onInput={e => setTitle(e.target.value)} /><br />
                <label >Description</label><br />
                <input type="text" value={description} required
                    onInput={e => setDescription(e.target.value)} /><br />
                <label>Year</label><br />
                <input type="number" value={year} required
                    onInput={e => setYear(e.target.value)} /><br />
                <label>Director</label><br />
                <select value={director} required
                    onChange={e => setDirector(e.target.value)}
                >
                    <option value=''></option>
                    {
                        directors.map((director, index) => {
                            return (
                                <option key={index} value={director.id}>
                                    {director.name}
                                </option>
                            );
                        })
                    }
                </select>
                <br />
                <label>Actors</label><br />
                {
                    allActors.map((actor, index) => {
                        return (
                            <div key={actor.id}>
                                <label>
                                    <input type="checkbox" value={actor.id}
                                        checked={actor.checked}
                                        onChange={e => toggleSelectActors(actor.id)} />
                                    {actor.name}
                                </label>
                            </div>
                        );
                    })
                }
                <button>{action}</button >
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Year</th>
                        <th>Director</th>
                        <th>Actors</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        films.map((v, i) => {
                            return (
                                <tr key={i}>
                                    <td>{v.title}</td>
                                    <td>{v.description}</td>
                                    <td>{v.year}</td>
                                    <td>{v.Director.name}</td>
                                    <td>
                                        {
                                            v.Actors.map((v, i) => {
                                                return (
                                                    <p key={i}>{v.name}</p>
                                                );
                                            })
                                        }
                                    </td>
                                    <td>
                                        <button data-id={v.id} onClick={handleEditButton}>Edit</button>
                                        <button data-id={v.id} onClick={handleDelButton}>Del</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Films;