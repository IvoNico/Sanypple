
import './App.css';
import NavBar from './components/NavBar/Navbar'
import ItemsListContainer from './components/ItemsListConteiner/ItemsListConteiner';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar section='Home'/>
      </header>
      <main>
        <ItemsListContainer/>
      </main>
    </div>
  );
}

export default App;
