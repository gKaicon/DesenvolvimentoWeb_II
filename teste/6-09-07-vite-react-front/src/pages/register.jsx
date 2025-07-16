import { useState } from "react";
import { createUser } from "../data_access/user_access";
import { useNavigate } from "react-router";

const Register = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleRegisterSubmit(e) {
        e.preventDefault();

        const data = {
            user_name: userName,
            email: email,
            password: password
        };

        createUser(data)
            .then((res) => {
                console.log(res);
                alert(res.message);
                if (res.user) {
                    navigate('/');
                }
            });

        setUserName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <h1>Registre-se</h1>
            <form onSubmit={handleRegisterSubmit}>
                <label>User name</label><br />
                <input type="text" value={userName} onInput={e => setUserName(e.target.value)} /><br />
                <label>E-mail</label><br />
                <input type="text" value={email} onInput={e => setEmail(e.target.value)} /><br />
                <label>Password</label><br />
                <input type="password" value={password} onInput={e => setPassword(e.target.value)} /><br />
                <button>Registrar</button>
            </form>
        </div>
    );
};

export default Register;