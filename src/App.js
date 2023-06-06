import './App.css';
import Title from './components/Title';
import Menu from './components/Menu';
import Info from './components/Info';
import Description from './components/Description';
import { useState } from 'react';

function App() {
const [character,setCharacter] = useState({
  name:'Osito', species:'teedie', stats:{power:1, skill:3, defense:3, 4:3, 5:4, 6:4, 7:3, 8:3, 9:5}, synchro:'Effect Plus – Paralysis', description:'Your attacks gain a paralyzing effect.'})
  
  console.log(character)

  return (
    <div className='app'>
      <Title 
      type='pet'
      ></Title>
      <Menu></Menu>
      <Info
      character = {character}
      ></Info>
      <Description
      description = 'Your attacks gain a paralyzing effect.'
      ></Description>
    </div>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
