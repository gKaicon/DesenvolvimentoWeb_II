import { useState, useRef, useContext } from 'react';

import List from './components/List.jsx';
import Select from './components/Select.jsx';
import Table from './components/Table.jsx';

import ThemeContext from './context/theme.js';
import ChangeTheme from './components/ChangeTheme.jsx';

const titles = ['ID', 'NOME', 'IDADE'];
const clients = [
  { id: 1, nome: "Lucas", idade: 45 },
  { id: 2, nome: "Ana", idade: 78 },
  { id: 3, nome: "Bia", idade: 14 },
  { id: 4, nome: "Faulo", idade: 69 }
];

const App = () => {

  const baseTheme = useContext(ThemeContext);
  const [theme, setTheme] = useState(baseTheme);

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
      <ChangeTheme theme={theme} setTheme={setTheme} />
      <div className='container m-3 p-2 border rounded m-3 p-2' style={{ width: '90%' }}>
        <div className='text-center mb-3'>
          <h3>Felinos</h3>
        </div>
        <div className=' text-center mb-3'>
          <form onSubmit={manipulaFormFelinos} className='w-100'>
            <div className='mb-3 row'>
              <label htmlFor='felino' className='col-auto'>Novo </label>
              <input name='felino' ref={iptFelino} className='col-auto' />
              <button className='ms-2 col-auto'>+</button>
            </div>
          </form>
        </div>
        <div className="">
          <List items={felinos} />
        </div>
      </div>

      <div className='container m-3 p-2 border rounded m-3 p-2' style={{ width: '90%' }}>
        <h3>Estados</h3>
        <Select />
      </div>
      <div className='container m-3 p-2 border rounded m-3 p-2' style={{ width: '90%' }}>
        <ThemeContext.Provider value={theme}>
          <Table titles={titles} data={clients} />
        </ThemeContext.Provider>
      </div>

    </>
  );
};

export default App;