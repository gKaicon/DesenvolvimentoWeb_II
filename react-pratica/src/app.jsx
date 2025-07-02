import List from './components/List.jsx';
import Table from './components/Table.jsx';
import './app.css';

const frutas = ['Laranja', 'Maçã', 'Banana'];
const titles = ['ID', 'NOME', 'IDADE'];
const clients = [
  { id: 1, nome: "Lucas", idade: 45 },
  { id: 2, nome: "Ana", idade: 78 },
  { id: 3, nome: "Bia", idade: 14 },
  { id: 4, nome: "Faulo", idade: 69 }
];

const App = () => {
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


      <List items={frutas} />
      <List items={['Pera', 'Maracujá', 'Uva', 'Morango']} />
      <Table titles={titles} data={clients} />
    </>
  );
};

export default App;
