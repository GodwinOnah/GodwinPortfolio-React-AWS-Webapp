import React, { useContext } from 'react';
import '../../../Contents/CSSFiles/project.css';

export const Project = ({project}) =>{
   const projectWebsite = project["projectlink"]
   const gitHubName = project["githubname"]
   const videoLink = project["videolink"]
   const stringx = "Visit website"
   const stringy = "GitHub"
   const stringz = "Video"
   let websiteAvailable = true
   let gitHubAvailable = true
   let vdeoAvailable = true

   if(projectWebsite==""||projectWebsite==null){
    websiteAvailable=false
   }

   if(gitHubName==""||gitHubName==null){
    gitHubAvailable=false
   }

   if(videoLink==""||videoLink==null){
    vdeoAvailable=false
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
        <a target="blank" href={videoLink} class="link">
          <strong>{vdeoAvailable && stringz}</strong>
          </a>
        </div>
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