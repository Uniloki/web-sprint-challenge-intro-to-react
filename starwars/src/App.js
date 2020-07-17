import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Info from "./components/Character";
import CharList from "./components/CharList";

const App = () => {
  const [charData, setCharData] = useState('')
  const [charNames, setCharNames] = useState('')
  const [currentChar, setCurrentChar] = useState('')
  const [currentImg, setCurrentImg] = useState('')
  const [isShowing, setIsShowing] = useState(false);
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(res =>{
      console.log(res.data)
      setCharData(res.data)
      setCurrentChar(res.data.results[0].name)
      setCurrentImg(`https://pokeres.bastionbot.org/images/pokemon/1.png`)
      setCharNames(res.data.results)
      console.log(res.data.results[0].name)
      
    })
  }, [])
  const charNamesArr = Array.from( charNames ) 
  const filteredChar = charNamesArr.filter(char => {
    return char.name.toLowerCase().includes( search.toLowerCase() )
  })

  function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}
  function incrementArray(character)  {
    findWithAttr(charData.results, 'name', character)
    console.log(findWithAttr(charData.results, 'name', character))
    let newIndex = findWithAttr(charData.results, 'name', character) + 1
    if(newIndex <= 150 ){
      return setCurrentChar(charData.results[newIndex].name),
      setCurrentImg(`https://pokeres.bastionbot.org/images/pokemon/${newIndex + 1}.png`)
      } else {
      return  setCurrentChar(charData.results[0].name),
      setCurrentImg(`https://pokeres.bastionbot.org/images/pokemon/1.png`)
      }
  }

  function decreaseArray(character)  {
    findWithAttr(charData.results, 'name', character)
    console.log(findWithAttr(charData.results, 'name', character))
    let newIndex = findWithAttr(charData.results, 'name', character) - 1
    if(newIndex > -1 ){
    return setCurrentChar(charData.results[newIndex].name),
            setCurrentImg(`https://pokeres.bastionbot.org/images/pokemon/${newIndex + 1}.png`)
    } else {
    return  setCurrentChar(charData.results[150].name),
            setCurrentImg(`https://pokeres.bastionbot.org/images/pokemon/151.png`)
    }
  }

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Info charName={currentChar} image ={currentImg}/>
      <button onClick={() => decreaseArray(currentChar)}>
      Back
    </button>
      <button onClick={() => incrementArray(currentChar)}>
      Next
    </button>
    <button onClick={() => setIsShowing(!isShowing)}> show all </button>
    { isShowing
     ? <CharList charNames={filteredChar} search = {(e) => setSearch(e.target.value)}/>
     : null
  } 
    </div>
   
  );
}

export default App;
