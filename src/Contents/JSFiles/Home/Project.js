import React, { useContext } from 'react';
import '../../../Contents/CSSFiles/project.css';


export const Project = ({project}) =>{
   const projectWebsite = project["projectlink"]
   const gitHubName = project["githubname"]
   const stringx = "Visit website"
   const stringy = "GitHub"
   let websiteAvailable = true
   let gitHubAvailable = true

   if(projectWebsite==""){
    websiteAvailable=false
   }

   if(gitHubName==""){
    gitHubAvailable=false
   }


    return(     
        <div class="d-flex containerL">  
        <div class="card cardL">
          <div class="title">
          <h5><strong>{project["projecttitle"]}</strong></h5> 
          </div>      
        <div class="card-body">        
        <strong>{project["projectdescription"]}</strong>
        </div>
        <div class="d-flex justify-content-center">
        <div class="website">
        <a target="blank" href={gitHubName} class="link">
          <strong>{gitHubAvailable && stringy}</strong>
          </a>
        </div>
        <div class="website">
        <a target="blank" href={projectWebsite} class="link">
          <strong>{websiteAvailable && stringx}</strong>
          </a>
        </div>
        </div>
       </div> 

           </div>
       
    )
}