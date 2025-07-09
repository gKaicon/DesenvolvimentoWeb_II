import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Home from './pages/home';
import About from './pages/about';
import Navigation from "./components/navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;