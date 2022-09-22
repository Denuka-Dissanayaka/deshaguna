import './App.css';
import {BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import Navbar from './components/nav/Navbar';
import Home from './pages/home/Home';
import Contributor from './pages/contributors/Contributor';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contributors" element={<Contributor/>}></Route>
          
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
