import './App.css';
import {Routes,Route}from 'react-router-dom';
import {Nav} from './Contents/JSFiles/Home/Navigation/Nav.js';
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter}from 'react-router-dom';
import {Admin} from './Contents/JSFiles/Home/Admin.js'
import {HeroSection} from './Contents/JSFiles/Home/HeroSection.js'
import {AboutMe} from './Contents/JSFiles/AboutMe/AboutMe.js'



function App() {
  return (
   
    <div className="App">
      
       < BrowserRouter> 
      <Nav /> 
      <Routes>
        <Route path='/' exact element={<HeroSection/>}/>
        <Route path='/AboutMe' exact element={<AboutMe/>}/>
      </Routes> 
      </ BrowserRouter >    
    </div> 
  );
}
export default App;
