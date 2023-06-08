import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/header'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/home'
import Profile from './components/Profile/profile'

function App() {
  return (
    <>
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={
          <Home/>
          }/>
        </Routes>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
      </Router>
      </>
  );
}

export default App;
