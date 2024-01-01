import React, { useContext } from 'react';
import '../../../Contents/CSSFiles/project.css';



export const Project = ({project,index}) =>{

    return(
        <div class="container" key={index}>
        <div class="d-flex containerL">  
        <div class="card cardL">
        <h2>{project.projectTittle}</h2> 
        <div class="card-body">        
        <strong class="pricing">{project.projectDescription}</strong>
        </div>
        <div>
        <a target="blank" href={project.projectLink} class="link">Website</a>
         </div>
       </div> 

           </div>
         </div>
    )
}