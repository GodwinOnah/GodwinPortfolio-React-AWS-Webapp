import React from 'react';
import '../../../Contents/CSSFiles/Skills.css';
import {useState, useEffect} from 'react';

export const Skills = () => {

      let url ="https://www.google.com/search?q="
   
        const [skills,setSkills] = useState(null);
        const [noSkillFound, setNoSkillFound] =  useState("");

        useEffect(()=>{
            fetch('http://localhost:3002/skills')
            .then((res)=>{
               return res.json();
            })
            .then((data) =>{
               if(data)setSkills(data);
               return
             })
             .catch(err=>{setNoSkillFound("No Skill found. Admin check if database exist");
                           console.log(err);
            })
           },[]);
        
           return(
            <div class="skills">         
              { noSkillFound || skills?.map((skill,index)=>
               (
                <div key={index} style={{margin:"10px",cursor:"pointer"}}>
                    {index+1+". "}
                    <strong>
                     <a class="skills-a" href={url+skill} style={{fontSize:'15px'}} target="blank">
                        {skill.skill}
                    </a> 
                    </strong>           
                </div>
               ))}          
            </div>
           )
    

}