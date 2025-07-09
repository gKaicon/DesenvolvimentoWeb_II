import { NavLink } from "react-router";

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/" className={ ({isActive}) => isActive ? 'active' : ''} >Home</NavLink>&nbsp;
            <NavLink to="/about" className={ ({isActive}) => isActive ? 'active' : ''} >Sobre</NavLink>&nbsp;
        </nav>
    );
}

export default Navigation;