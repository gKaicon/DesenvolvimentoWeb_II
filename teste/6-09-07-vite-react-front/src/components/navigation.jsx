import { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import UserContext from "../context/user_context";
import { logout } from "../data_access/user_access";

const Navigation = ({ setUser }) => {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    function handleLogoutClick(e) {
        e.preventDefault();
        logout().then((msg) => {
            alert(msg);
            setUser({});
            navigate('/');
        });
    }
    return (
        <>
            {user && user.name ? (
                <nav>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} >Home</NavLink>&nbsp;
                    <NavLink to="/films" className={({ isActive }) => isActive ? 'active' : ''} >Filmes</NavLink>&nbsp;
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} >Sobre</NavLink>&nbsp;
                    <NavLink to="/logout" onClick={handleLogoutClick} >Sair</NavLink>&nbsp;
                </nav>
            ) : (
                <nav>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>&nbsp;
                    <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>&nbsp;
                    <NavLink to="/register" className={({ isActive }) => isActive ? 'active' : ''}>Registrar</NavLink>&nbsp;
                </nav>
            )}
        </>
    );
}

export default Navigation;