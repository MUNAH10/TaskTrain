
import './App.css';



import {React, useState} from 'react';
import Home from './components/home/Home';
import Signing from './components/authentication//Signing';
import LandingPage from './components/home/LandingPage';
import {AiOutlineLogin} from "react-icons/ai"
import {Route, Routes, Link, Navigate} from 'react-router-dom'

function App() {


  const [user, setUser] = useState('');

  function signup(username) {
		setUser(username);
	}

  return (
    <div className="App">
      <div >
        <h3 >
          <Link to="/" id="logo_title">TASK-TRAIN</Link>  
        </h3>

        <button id="auth_logo" >
        <Link to="/auth"><AiOutlineLogin/></Link>
        </button>

      </div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/auth" element={
       
        !user ? <Signing signup={signup} /> : <Navigate to="/home"></Navigate>
       }/>
      </Routes>

    </div>
     
    );

  }

export default App;
