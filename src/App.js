import React from 'react'
import './App.css';
import ItemsListContainer from './components/ItemsListConteiner/ItemsListConteiner';
import NavBar from './components/NavBar/Navbar'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar section={"Home"} />
      </header>
      <main>
        <ItemsListContainer title='Sanypple'/>
      </main>
    </div>
  );
}

export default App;
