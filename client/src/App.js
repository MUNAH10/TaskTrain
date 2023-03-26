
import './App.css';



import {React, useState} from 'react';
import Home from './components/home/Home';
import Signing from './components/authentication//Signing';
import LandingPage from './components/home/LandingPage';
import {Route, Routes, Link, Navigate} from 'react-router-dom'

function App() {


  const [user, setUser] = useState('');

  function signup(username) {
		setUser(username);
	}

  return (
    <>
    
    </>
    );

  }

export default App;
