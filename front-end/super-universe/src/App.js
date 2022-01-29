import './App.css';
import { Routes, Route } from 'react-router-dom'
import Create from './screens/Create/Create';
import Heroes from './screens/Heroes/Heroes';
import Villains from './screens/Villains/Villains';
import Home from './screens/Home/Home';
import SignIn from './screens/SignIn/SignIn';
import Edit from './components/Edit/Edit';
import { useEffect, useState } from 'react'
import {verifyUser} from './services/services'

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await verifyUser();
      res ? setLoggedIn(true) : setLoggedIn(false);
    };
    fetchUser();
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/heroes" element={<Heroes/>} />
        <Route path="/villains" element={<Villains/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/signin" element={<SignIn setLoggedIn={setLoggedIn} />} />
        <Route path="/character/edit/:id" element={<Edit />} />
      </Routes>
      
      </div>
  );
}

export default App;
