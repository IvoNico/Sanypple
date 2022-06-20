import React from 'react'
import './App.css';
import ItemsListContainer from './components/ItemsListConteiner/ItemsListConteiner';
import ItemsDetailsContainer  from './components/ItemsDetailContainer/ItemsDetailContainer';
import NavBar from './components/NavBar/Navbar'




function App() {
  return (
    <div className="App">
      <header>
        <NavBar section={"Home"} />
      </header>
      <main>
        <ItemsListContainer/>
        <ItemsDetailsContainer/>
      </main>
    </div>
  );
}

export default App;
