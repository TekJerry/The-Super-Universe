import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { grabCharacters } from './services'
import Navbar from './components/Navbar/Navbar.js'

function App() {

  const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    const getApi = async () => {
      const res = await grabCharacters()
      console.log(res)
    setCharacters(res)
    }
    getApi()
  }, [])


  return (
    <div className="App">
    <Navbar/>
      Hello World!
    </div>
  );
}

export default App;
