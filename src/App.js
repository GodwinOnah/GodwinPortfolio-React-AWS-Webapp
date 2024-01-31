import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Nav} from './Contents/JSFiles/Home/Navigation/Nav.js';
import {Footer} from './Contents/JSFiles/Home/Navigation/Footer.js';
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter} from 'react-router-dom';
import {Admin} from './Contents/JSFiles/Home/Admin.js'
import {HeroSection} from './Contents/JSFiles/Home/HeroSection.js'
import {AboutMe} from './Contents/JSFiles/Home/AboutMe.js'
import {Register} from './Contents/JSFiles/Home/Register.js'
import {SiteUnderConstruction} from './Contents/JSFiles/Home/SiteUnderConstruction';
import {useState, useEffect} from 'react';

function App() {
    const [isUnderConstruction,
        setIsUnderConstruction] = useState([]);
    const [loginStatus,
        setLoginStatus] = useState([]);

    useEffect(() => {

        const logindata = window
            .localStorage
            .getItem('login')
        if (logindata != null) 
            setLoginStatus(JSON.parse(logindata));
        }
    , [loginStatus]);

    useEffect(() => {

        fetch(`${process.env.REACT_APP_URL}/underconstruction`).then(res => {
            return res.json();
        }).then((data) => {
            setIsUnderConstruction(data);

        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (

        <div className="App">

            {isUnderConstruction.map((isUnderConstruction) => {
                return isUnderConstruction.underconstruction || loginStatus
                    ? < BrowserRouter > <Nav/> < Routes > <Route path='/' exact element={< HeroSection />}/>
                    : <Route path='/AboutMe' exact element={< AboutMe />}/> < Route path = '/Admin' exact element = { < Admin />
                    } /> <Route path='/Register' exact element={< Register />}/> </Routes> 
      <Footer / > </ BrowserRouter >: <SiteUnderConstruction/>

            })
}
        </div>
    );
}
export default App;
