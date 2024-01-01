import React from 'react';

export const Skills = () => {
   
        const [skills,SetSkills] = useState([]);

        useEffect(()=>{
            fetch('https://obandeclothapp-60d299435905.herokuapp.com/skills').then(res =>{
              if(res)SetSkills(res.data);
              return
             })
           },[]);
        
           return(
            <div class="projects">
              { skills?.map((skill,index)=>
               (
                <div class="container" key={index}>
                    {index+". "+ skill}             
               </div>
               )
            )
               }
            </div>
           )
    

}