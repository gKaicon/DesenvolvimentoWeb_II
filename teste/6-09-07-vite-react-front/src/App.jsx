import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Home from './pages/home';
import About from './pages/about';
import Films from './pages/films';
import Login from './pages/login';
import Navigation from "./components/navigation";
import UserContext from "./context/user_context";
import { useEffect, useState } from "react";
import Register from "./pages/register";
import { checkUser } from "./data_access/user_access";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser()
      .then((user) => {
        setUser(user);
      });
  }, []);
  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Navigation setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;
