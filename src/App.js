import './App.css';
import {Route, Routes } from "react-router-dom";

import Navbar from './components/nav/Navbar';
import Home from './pages/home/Home';
import SignIn from './pages/signin/SignIn';
import Contributor from './pages/contributors/Contributor';
import Dash from './pages/dashboard/Dash';
import Protected from './components/protectRoute/Protected';

import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contributors" element={<Contributor/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/dashboard" element={<Protected><Dash/></Protected>}></Route>
          
        </Routes>
      </AuthContextProvider>
      
    </>
  );
}

export default App;
