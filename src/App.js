import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
    </div>
    <Router>
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
      </>
  );
}

export default App;
