import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';

import Signup from './components/Signup';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import Privacy from './components/Privacy';
import Aboutus from './components/Aboutus';
import Contact from './components/Conduct';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/LandingPage' element={<LandingPage/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Privacy' element={<Privacy/>}/>
      <Route path='/Aboutus' element={<Aboutus/>}/>
      <Route path='/Contact' element={<Contact/>}/>

      </Routes>
      </BrowserRouter>
          
        
    </div>
  );
}

export default App;
