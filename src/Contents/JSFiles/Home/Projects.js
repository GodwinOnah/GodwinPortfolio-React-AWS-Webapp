import axios from 'axios';
import {useState, useEffect} from 'react';
import '../../../Contents/CSSFiles/Projects.css';
import {Project} from './Project.js';


export const Projects = () => {

  const [projects,SetProjects] = useState([]);

useEffect(()=>{
    fetch('https://obandeclothapp-60d299435905.herokuapp.com/projects').then(res =>{
      if(res)SetProjects(res.data);
      return
     })
   },[]);

   return(
    <div class="projects">
      { projects?.map((project,index)=>
       (
        <div >
       <Project project={project} index={index}/>
       </div>
       )
    )
       }
    </div>
   )
  
};