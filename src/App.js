
import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/layouts/Navbar'
import HomePage from './components/pages/HomePage/HomePage';
import Footer from './components/layouts/Footer';
const App = () => {
  return (
    <Router>
      <Navbar />
      <HomePage/>
      <Footer/>
    </Router>
  )
}

export default App

