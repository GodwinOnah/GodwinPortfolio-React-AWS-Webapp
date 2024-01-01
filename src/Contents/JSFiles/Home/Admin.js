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

const formSubmitSkill= (e) => {
    e.preventDefault();
    const datax = {skill};

    if(formData == null) setMessage("No File attached");

    fetch('https://obandeclothapp-60d299435905.herokuapp.com/skill',
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

    fetch('https://obandeclothapp-60d299435905.herokuapp.com/project',
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
                                   toast.warning("Project not added");
                                             });
  }

  const formSubmitImage= (e) => {
    e.preventDefault();

    if(formData == null) setMessage("No File attached");

      axios.post(`http://https://obandeclothapp-60d299435905.herokuapp.com:8080/api/image/${imageId}/images/uploads`,
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
            <div>
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
              <h1 style={{color:'Blue', margin:'100px'}}>Welcome Admin</h1>
              <div>
              <h3>My Messages</h3>
              <hr/>
              <div class="listOfCustomers" >
               <Messages/>
              </div>
              </div>
      
              <h3>New Skills</h3>
              <hr/>
              <div class="container">
                <form  post ="" onSubmit={formSubmitSkill}>
                <div class="row addPro ">
                  <div  class="col-12 addPro2">
                      <input type='text' name="Skill" 
                     value={skill}
                     onChange = {(e)=>setSkill(e.target.value)}
                     placeholder="Add skill" />
                  </div>
                  {/* <div class="col-12 addPro2">
                      <input type='text' name="clothPrice" 
                      value={clothPrice}
                      onChange = {(e)=>setClothPrice(e.target.value)}
                      placeholder="Price" />
                   </div>
                   <div class="col-12 addPro2">
                      <div class="drop">
                      <input type='file' name="clothPictureId"
                       value={clothPicture}
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
                     */}
                    <div class="col-12 addPro2">                      
                      <button type='submit'>Add</button>
                    </div>
                      </div>
                      </form>
                </div>  

                <h3>New Project</h3>
              <hr/>
              <div class="container">
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
                      <button type='submit'>Add</button>
                    </div>
                      </div>
                      </form>
                </div>  


                <h3>New Image</h3>
              <hr/>
              <div class="container">
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
                      <button type='submit'>Upload</button>
                    </div>
                      </div>
                      </form>
                </div>               
            </div>
          )
}