import './App.css';
import StartSection from './components/StartSection';
import GameWindow from "./components/GameWindow";
import TextWindow from './components/TextWindow';
import Pokedex from './components/Pokedex';
import Pokemon from "./components/Pokemon";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState(null);
  const [firstAbility, setFirstAbility] = useState(null);
  const [updatePokedex, setUpdatePokedex] = useState([]);

  return (
    <div className="App">
      <StartSection />
      <GameWindow />
      <Pokedex 
        pokemon={image}
        name={name}
        firstAbility={firstAbility}
        updatePokedex={updatePokedex}
      />
      <TextWindow 
        text={info ? info : name && name + " appeared! Click on " + name + " to throw a pokéball."}
      />
      <Pokemon 
        setName={setName}
        setInfo={setInfo}
        setImage={setImage}
        setFirstAbility={setFirstAbility}
        setUpdatePokedex={setUpdatePokedex}
      />
    </div>
  );
}

export default App;
