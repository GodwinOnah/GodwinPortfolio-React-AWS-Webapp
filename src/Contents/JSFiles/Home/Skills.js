import React from 'react';
import '../../../Contents/CSSFiles/Skills.css';

export const Skills = () => {

      let url ="https://www.google.com/search?q="
   
        // const [skills,SetSkills] = useState([]);
        const skillset = [
        "ReactJs",
        "NodeJs",
        "Systems thinker",
        "Java",
       "JavaScript",
       "NodeJs",
       "ASP.NET CORE",
       "Angular",
       "ReactJS",
       "GitHub",
       "Android",
       "SQL",
       "Azure",
       "AWS",
       "Heroku",
       "Spring Boot",
       "Critical Thinking",
       "Team Spirit",
       "Good communication and social quality",
       "Debugging and Software testing",
       "Python",
       "Linux",
       "Jenkins"
        ]

        // useEffect(()=>{
        //     fetch('https://obandeclothapp-60d299435905.herokuapp.com/skills').then(res =>{
        //       if(res)SetSkills(res.data);
        //       return
        //      })
        //    },[]);
        
           return(
            <div class="skills">         
              { skillset?.map((skill,index)=>
               (
                <div key={index} style={{margin:"10px",cursor:"pointer"}}>
                    {index+1+". "}<strong ><a class="skills-a" href={url+skill} style={{fontSize:'15px'}} target="blank">{skill}</a> </strong>           
               </div>
               )
            )
               }          
            </div>
           )
    

}