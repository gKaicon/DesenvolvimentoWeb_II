import { useState, useRef } from 'react';
import List from './components/List.jsx';

const App = () => {

  const [felinos, setFelinos] = useState(['Gato', 'Leopardo']);
  const iptFelino = useRef(null);

  function manipulaFormFelinos(e) {
    e.preventDefault();
    setFelinos([...felinos, iptFelino.current.value]);
    iptFelino.current.value = '';
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Prática React</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">Features</a>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <h3>Felinos</h3>
        <form onSubmit={manipulaFormFelinos}>
          <label>Novo </label>
          <input ref={iptFelino} />
          <button>+</button>
        </form>
        <List items={felinos} />
      </div>
    </>
  );
};

export default App;