import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Home from './pages/Home';
import Film from "./pages/film";
import About from './pages/About';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <main style={{ minHeight: 'calc(100vh - 56px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/film" element={<Film />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
