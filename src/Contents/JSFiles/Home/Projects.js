import axios from 'axios';
import Carousel from 'carousel';
import {useState, useEffect} from 'react';
import '../../../Contents/CSSFiles/Projects.css';
import {Project} from './Project.js';


export const Projects = () => {

  const [projects,setProjects] = useState([]);
  const [noProjectFound, setNoProjectFound] =  useState("");

//   const proj = [
//     {
//     "title":"React, Spring Boot, AWS Full-stack Development",
//     "description":"This is a full-stack web application built with ReactJS, spring boot, AWS, docker, etc. It has an admin page for item uploads, a login page, and a registration page.",
//     "website":"",
//     "gitHubName":"https://github.com/GodwinOnah/ObandeCloth"
//   },
//   {
//     "title":"E-commerce Web Application Using ASP.NET Core 7 and Agular",
//     "description":"This is an e-commerce web application coded with ASP.NET Core 7 and Angular. The frontend has a clean and user-friendly UI. It has an admin page where new items can be uploaded, old items deleted, successful orders can be viewed, and advertisements and notifications can be added. The Stripe card payment system is integrated. It uses angular forms for login and registration purposes and uses modal classes to interact with users. It is deployed on the Azure website and stores data in the Azure database and Redis cache.",
//     "website":"https://blessingcollections.azurewebsites.net",
//     "gitHubName":"https://github.com/GodwinOnah/BlessingApp" 
//   },
//   {
//     "title":"Digital Restaurant Android Application",
//     "description":"This is an Android mobile application built with Android Studio (Android version 10+). It has some striking features; orders can be placed from more than one restaurant at a time. It has the ability to hide alcoholic food items from teenagers below the age of 18. It is robust and efficient with data management when it comes to password recovery.This is an Android mobile application built with Android Studio (Android version 10+). It has some striking features; orders can be placed from more than one restaurant at a time. It has the ability to hide alcoholic food items from teenagers below the age of 18. It is robust and efficient with data management when it comes to password recovery.",
//     "website":"",
//     "gitHubName":"https://github.com/GodwinOnah/Digital_Restaurant"
//   } 

// ]

useEffect(()=>{
    fetch(`${process.env.REACT_APP_URL}/projects`).then(res =>{
        return res.json();
     })
     .then((data) =>{
        if(data){setProjects(data)}
        else{setNoProjectFound('No project data found. Check of database exist')}

        return
      })
     .catch(err=>{setNoProjectFound('No project data found. Check of database exist');
                      console.log(err);
    })
   },[]);

   return(
    <div class="projects">
      {noProjectFound ||  projects?.map((project)=>
       (   
            <div>
            <Project project={project}/>
            </div>      
       )
    )
       }
    </div>
   )
  
};