import { NavLink } from "react-router";

const Navigation = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-white text-decoration-none" to="/">Filme Mania</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className={({ isActive }) => `text-white nav-link ${isActive ? ' active' : ''}`}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/film" className={({ isActive }) => `text-white nav-link ${isActive ? ' active' : ''}`}>
                                    Filmes
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className={({ isActive }) => `text-white nav-link ${isActive ? ' active' : ''}`} >
                                    Sobre
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>

    );
}

export default Navigation;