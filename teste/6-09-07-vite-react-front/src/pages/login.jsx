import { useState } from "react";
import { login } from "../data_access/user_access";
import { Link, useNavigate } from "react-router";

const Login = ({ setUser }) => {
    const [userOrEmail, setUserOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    function handleLoginSubmit(e) {
        e.preventDefault();
        const data = {
            user_name_or_email: userOrEmail,
            password: password
        };
        login(data)
            .then((user) => {
                //console.log(user);
                if(user){
                    alert('Login realizado com sucesso!');
                    setUser(user);
                    navigate('/');
                }
            });
        setUserOrEmail('');
        setPassword('');
    }

    return (
        <div>
            <h1>Realize o login</h1>
            <form onSubmit={handleLoginSubmit}>
                <label>User or e-mail</label><br />
                <input type="text" value={userOrEmail} onInput={e => setUserOrEmail(e.target.value)} /><br />
                <label>Password</label><br />
                <input type="password" value={password} onInput={e => setPassword(e.target.value)} /><br />
                <button>Login</button>
            </form>
            <Link to={'/register'}>Registre-se</Link>
        </div>
    );
};

export default Login;