import '../../../Contents/CSSFiles/AboutMe.css';
import React from 'react';
import {View} from './View.js'
import { Pictures } from './Pictures';

export const AboutMe = ()=>{
  let udemyUrl ="https://www.udemy.com/course/"
  let amigoscodeUrl="https://app.amigoscode.com/courses/686693/lectures/"
  let webDevelopment= ["The Complete Web Developer in 2022; zero to Master","UC-945cc944-83e7-477b-b09b-2b614bc1025f.pdf"]
  let ecommerceWbsite=["Learn to build an e-commerce website using .NET and Angular","UC-5c8ed034-295e-4c6f-a7f1-131964bc7655.pdf"]
  let SpringBootAmigoscode=["Getting started with Spring Boot, React , and AWS ",
            "certificate-of-completion-for-getting-started-with-spring-boot.pdf"]
  let JavaEssencialsAmigoscode=["Java Essentials","certificate-of-completion-for-java-essentials.pdf"]

  const hobbies = ["Solving coding challenge","Reading books", "Love soccer","love basketball"]

return(
  <div  class="body">
   
    {/* Education */}
    <div class="tab">
    <h1>Education</h1>   
    <div class="table">
    <table>
    <thead>
         <tr>
         <th>Honor</th>
         <th>School</th>
         <th>Course</th>
         <th>Year of Graduation</th>
         </tr>
       </thead>
       <tbody> 
               <tr >   
               <td>MSc</td>           
               <td>University of Glasgow, Glasgow, United Kingdom</td>
               <td>Software Development{" | "}
               <a href='https://www.gla.ac.uk/postgraduate/taught/softwaredevelopment/#tab=structure'
                target="blank">View
               </a>
               </td>
               <td>2022</td>          
               </tr>  
               <tr >   
               <td>Diploma</td>           
               <td>
                Classic Computers, Federal University of Technology, Akure, Nigeria
                </td>
               <td>Advance Java and SQL</td>
               <td>2017</td>          
               </tr>  
               <tr >   
               <td>B.Eng.</td>           
               <td>Federal University of Agriculture, Makurdi, Nigeria
               </td>
               <td>
                ELectrical and Electronics Engineering{" | "}
               </td>
               <td>2016</td>          
               </tr>                      
            </tbody>
           </table>  
    </div>
    </div>

     {/* Trainig */}
     <div class="tab">
     <h1>Training</h1> 
    <div class="table">
    <table>
    <thead>
         <tr>
         <th>Course</th>
         <th>Company</th>
         <th>Company website</th>
         <th>View certificate</th>
         <th>Year of completion</th>
         </tr>
       </thead>
       <tbody> 
               <tr >   
               <td>
                <a href={udemyUrl+webDevelopment} target="blank">
                {webDevelopment[0]}
                </a>
                </td>           
               <td>Udemy</td>
               <td>udemy.com</td>
               <td><View image={webDevelopment[1]} what="View"/></td>
               <td>2022</td>          
               </tr>    

               <tr >   
               <td>
                <a href={udemyUrl+[ecommerceWbsite[0]]} target="blank">
                { ecommerceWbsite[0]}
                </a>
                </td>           
               <td>Udemy</td>
               <td>udemy.com</td>
               <td><View image={ecommerceWbsite[1]} what="View"/></td>
               <td>2023</td>          
               </tr> 

                <tr >   
               <td>
                <a href={amigoscodeUrl} target="blank">
                {SpringBootAmigoscode[0]}
                </a>
                </td>           
               <td>Amigoscode</td>
               <td>amigoscode.com</td>
               <td><View image={SpringBootAmigoscode[1]} what="View"/></td>
               <td>2023</td>          
               </tr> 

                <tr >   
               <td>
                <a href={amigoscodeUrl} target="blank">
                {JavaEssencialsAmigoscode[0]}
                </a>
                </td>           
               <td>Amigoscode</td>
               <td>amigoscode.com</td>
               <td><View image={JavaEssencialsAmigoscode[1]} what="View"/></td>
               <td>2021</td>          
               </tr>      
            </tbody>
           </table>  
  </div>
  </div>

 {/* Hobies */}
 <div class="tab">
     <h1>Hobbies and Sport</h1> 
    <div class="hobbies">
      {hobbies?.map((hobbies,index)=>(
       <div>
        <strong>{index+1+". "}{hobbies}</strong>
       </div>
      ))}
  </div>
  </div>
  <div>  
  </div>

  <div class="tab">
  <h1>Photos</h1> 
  <div class="photos">
    <Pictures/>
    </div>
    </div>
  </div>
);
}