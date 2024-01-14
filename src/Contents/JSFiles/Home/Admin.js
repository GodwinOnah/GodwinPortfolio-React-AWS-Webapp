import axios from 'axios';
import React from 'react';
import '../../CSSFiles/Admin.css'; 
import {useState} from 'react';
import { toast,ToastContainer } from "react-toastify";
import { Messages } from './../Messages/Messages.js';

export const Admin=()=>{

const [skill,setSkill] = useState("");
const [projectTittle,setProjectTittle] = useState("");
const [projectLink,setProjectLink] = useState("");
const [projectDescription,setProjectDescription] = useState("");
const [image,setImage] = useState(null);
const [phone,setPhone] = useState("");
const [imageId,setImageId] = useState("");
const [progress,setProgress] = useState({started:false, pc:0});
const [message,setMessage] = useState("");
const formData = new FormData();


  const uploadFile = (e) =>{  
    if(e.target.files.length>0){ 
      setImage(e.target.value);     
      const file = e.target.files[0];
      setImageId(file); 
      formData.append('file',file);
}}

const formSubmitPhone= (e) => {
  e.preventDefault();
  const datax = {phone};
  if(datax == null) setMessage("Enter a phone number");

  fetch('http://localhost:3002/phone',
  {  
    method:'POST', 
    headers:{
    "Access-Control-Allow-Origin":"*",
    "Content-Type": "application/json"
           },
    body: JSON.stringify(datax)
  },
    ).then(res =>{
          return res.text();      
                }).then(res=>{
                  setPhone("");
                  toast.success(res);
                             }).catch(error=>{
                                 toast.warning("Phone number not added");
                                           });
}


const formSubmitSkill= (e) => {
    e.preventDefault();
    const datax = {skill};
    if(datax == null) setMessage("Enter a skill");

    fetch('http://localhost:3002/skills',
    {  
      method:'POST', 
      headers:{
      "Access-Control-Allow-Origin":"*",
      "Content-Type": "application/json"
             },
      body: JSON.stringify(datax)
    },
      ).then(res =>{
            return res.text();      
                  }).then(res=>{
                    setSkill("");
                    toast.success(res);
                               }).catch(error=>{
                                   toast.warning("Skill not added");
                                             });
  }

  const formSubmitProject= (e) => {
    e.preventDefault();
    const datax = {projectTittle,projectDescription,projectLink};
    if(datax == null) setMessage("Enter a project");
    fetch('http://localhost:3002/project',
    {  
      method:'POST', 
      headers:{
      "Access-Control-Allow-Origin":"*",
      "Content-Type": "application/json"
             },
      body: JSON.stringify(datax)
    },
      ).then(res =>{
            return res.text();      
                  }).then(res=>{
                    setProjectLink("");
                    setProjectTittle("");
                    setProjectDescription("");
                    toast.success(res);
                               }).catch(error=>{
                                   toast.warning("Project not added");
                                             });
  }

  const formSubmitImage= (e) => {
    e.preventDefault();

    if(formData == null) setMessage("No File attached");

      axios.post(`http://localhost:3002/image/${imageId}/images/photo`,
      formData,
            {
              onUploadProgress : (progressEvent) => {
                setProgress(prevState=>{
                  return {...prevState, pc: progressEvent.progress*100}
                })
                  },
              method: 'POST',
              headers:{              
              "Access-Control-Allow-Origin":"*",
              "Content-Type": "multipart/form-data"
            }
          }
          ).then(res=>{
            setMessage("Image file Uplaoded");
            toast.success(res);
          }).catch(error=>{
            setMessage("File upload failed");
            toast.warning(error);
          }); 
  }

        
          return(
            <>
            <div class="admin_bg">
              <ToastContainer
              position='top-right'
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='light'
              />
              <h1 style={{color:'gold', margin:'100px'}}>Welcome Admin</h1>
              <div>
              <h3>Recieved Messages</h3>
              <div class="listOfCustomers" >
               <Messages/>
              </div>
              </div>
      
             
              
              <div class="containerAdmin">
              <h2 class="header1">Add Phone</h2>
              <hr/>
                <form  post ="" onSubmit={formSubmitPhone}>
                <div class="row addPro ">
                  <div  class="col-12 addPro2">
                      <input type='text' name="Phone" 
                     value={phone}
                     onChange = {(e)=>setPhone(e.target.value)}
                     placeholder="Add Phone" />
                  </div>
                    <div class="col-12 addPro2">                      
                      <button header1 type='submit'>Add</button>
                    </div>
                      </div>
                      </form>
                </div>  
              
             
              <div class="containerAdmin">
              <h2 class="header1">Add Skill</h2>
              <hr/>
                <form  post ="" onSubmit={formSubmitSkill}>
                <div class="row addPro ">
                  <div  class="col-12 addPro2">
                      <input type='text' name="Skill" 
                     value={skill}
                     onChange = {(e)=>setSkill(e.target.value)}
                     placeholder="Add skill" />
                  </div>
                    <div class="col-12 addPro2">                      
                      <button header1 type='submit'>Add</button>
                    </div>
                      </div>
                      </form>
                </div>  

                   
              
              <div class="containerAdmin">
              <h2  class="header1">Add Projects</h2>
              <hr/>
                <form  post ="" onSubmit={formSubmitProject}>
                <div class="row addPro ">
                  <div  class="col-12 addPro2">
                      <input type='text' name="projectTittle" 
                     value={projectTittle}
                     onChange = {(e)=>setProjectTittle(e.target.value)}
                     placeholder="Tittle" />
                  </div>
                  <div class="col-12 addPro2">
                      <input type='text' name="projectDescription" 
                      value={projectDescription}
                      onChange = {(e)=>setProjectDescription(e.target.value)}
                      placeholder="Description" />
                   </div> 
                   <div class="col-12 addPro2">
                      <input type='text' name="projectLink" 
                      value={projectLink}
                      onChange = {(e)=>setProjectLink(e.target.value)}
                      placeholder="Website Link" />
                   </div>
                
                    <div class="col-12 addPro2">                      
                      <button  class="btn btn-primary" type='submit'>Add</button>
                    </div>
                      </div>
                      </form>
                </div>  


               
                              
              <div class="containerAdmin">
              <h2 class="header1">Add Your Photo</h2> 
              <hr/>
                <form  post ="" onSubmit={formSubmitImage}>
                <div class="row addPro ">                 
                   <div class="col-12 addPro2">
                      <div class="drop">
                      <input type='file' name="image"
                       value={image}
                       onChange = {uploadFile}
                       placeholder="Upload Picture" />
                       <div>
                        {progress.started && <progress max="100" value={progress.pc}></progress>}
                        </div>
                    <div>
                      {message && <span>{message}</span>}
                    </div>
                      </div> 
                    </div>
               
                    <div class="col-12 addPro2">                      
                      <button class="btn btn-primary" type='submit'>Upload</button>
                    </div>
                      </div>
                      </form>
                </div>               
            </div>
            </>
          )
}