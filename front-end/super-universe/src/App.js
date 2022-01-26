import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { grabCharacters } from './services'
import Create from './screens/Create/Create';
import Heroes from './screens/Heroes/Heroes';
import Villains from './screens/Villains/Villains';
import Home from './screens/Home/Home';
import SignIn from './screens/SignIn/SignIn';
import Layout from './components/Layout/Layout';

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
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/heroes" element={<Heroes/>} />
        <Route path="/villains" element={<Villains/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
      
      </div>
  );
}

export default App;
