import './App.css';
import {Routes,Route}from 'react-router-dom';
import {Nav} from './Contents/JSFiles/Home/Navigation/Nav.js';
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter}from 'react-router-dom';

import {HeroSection} from './Contents/JSFiles/Home/HeroSection.js'
import { Messages } from './Contents/JSFiles/Messages/Messages';


function App() {
  return (
   
    <div className="App">
      
       < BrowserRouter> 
      <Nav /> 
      <Routes>
        <Route path='/' exact element={<HeroSection/>}/>
        <Route path='/Messages' exact element={<Messages/>}/>
      </Routes> 
      </ BrowserRouter >    
    </div> 
  );
}
export default App;
