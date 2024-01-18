import axios from 'axios';
import React from 'react';
import '../../CSSFiles/Admin.css'; 
import { toast,ToastContainer } from "react-toastify";
import { Messages } from './../Messages/Messages.js';
import { Login } from './Login.js';
import {useState, useEffect} from 'react';
import { Register } from './Register';
import {Link } from "react-router-dom";


export const Admin=()=>{

const [skill,setSkill] = useState("");
const [projectTitle,setProjectTitle] = useState("");
const [gitHubLink,setGitHubLink] = useState("");
const [projectLink,setProjectLink] = useState("");
const [projectDescription,setProjectDescription] = useState("");
const [image,setImage] = useState(null);
const [phone,setPhone] = useState("");
const [imageId,setImageId] = useState("");
const [progress,setProgress] = useState({started:false, pc:0});
const [message,setMessage] = useState("");
const formData = new FormData();
const [isLogin,setIsLogin] = useState(false);
const [myPhone,setMyPhone] = useState([]);
const [skills,setSkills] = useState(null);
const [noSkillFound, setNoSkillFound] =  useState("");
const [projects,setProjects] = useState([]);
const [schools,setSchools] = useState([]);
const [noProjectFound, setNoProjectFound] =  useState("");
const [noSchoolFound, setNoSchoolFound] =  useState("");
const [loginStatus,setLoginStatus] = useState(true);
const [honor,setHonor] = useState("");
const [school,setSchool] = useState("");
const [course,setCourse] = useState("");
const [courseLink,setCourseLink] = useState("");
const [graduationYear,setGraduationYear] = useState("");





const uploadFile = (e) =>{  
    if(e.target.files.length>0){ 
      setImage(e.target.value);     
      const file = e.target.files[0];
      setImageId(file); 
      formData.append('file',file);
}}

useEffect(()=>{
  fetch('http://localhost:3002/login')
  .then(res =>{
      return res.json();
   })
   .then((data) =>{
    console.log(data)
    setLoginStatus(data);
    })
   .catch(err=>{
       console.log(err);
  })
 },[]);

const formSubmitPhone= (e) => {
  e.preventDefault();
  if(phone == "")
  { toast.warning("Enter a phone number");
  return
}

  fetch('http://localhost:3002/phone',
  {  
    method:'POST', 
    headers:{
    "Access-Control-Allow-Origin":"*",
    "Content-Type": "application/json"
           },
    body: JSON.stringify({phone})
  },
    ).then(res =>{
          return res.text();      
      })
      .then(res=>{
          setPhone("");
          toast.success(res);
          window.location.reload();
      })
      .catch(error=>{
            toast.warning("Phone number not added");
      });
}


const formSubmitSkill= (e) => {
    e.preventDefault();
    if(skill== "") {
      toast.warning("Enter a skill");
      return
    }

    fetch('http://localhost:3002/skills',
    {  
      method:'POST', 
      headers:{
      "Access-Control-Allow-Origin":"*",
      "Content-Type": "application/json"
             },
      body: JSON.stringify({skill})
    }
      ).then(res =>{
            return res.json();      
        })
      .then(data=>{
            setSkill("");
            toast.success(data);
            window.location.reload();
      })
      .catch(error=>{
            toast.warning("Skill not added");
        });
  }

  const formSubmitProject= (e) => {
    e.preventDefault();
    const datax = {projectTitle,projectDescription,gitHubLink,projectLink};
    if(!projectTitle||!projectDescription){
      toast.warning('Enter a Project Title and description are compulsary fields');
      return;
}
    fetch('http://localhost:3002/projects',
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
        })
        .then(res=>{
            setProjectLink("");
            setProjectTitle("");
            setGitHubLink("");
            setProjectDescription("");
            toast.success(res);
            window.location.reload();
        })
        .catch(error=>{
            toast.warning("Project not added");
         });
  }

  // Education 
  const formSubmitSchool = (e) => {
    e.preventDefault();
    const datax = {honor,school,course,courseLink,graduationYear};
    console.log(datax)
    if(!honor||!school||!course||!graduationYear){
      toast.warning('Enter compulsary fields');
      return;
}

    fetch('http://localhost:3002/schools',
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
        })
        .then(res=>{
            setHonor("");
            setSchool("");
            setCourse("");
            setCourseLink("");
            setGraduationYear("");
            toast.success(res);
            window.location.reload();
        })
        .catch(error=>{
            toast.warning("School not added");
         });

  }

  // Upload Image
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
          })
          .then(res=>{
            setMessage("Image file Uplaoded");
            toast.success(res);
            window.location.reload();
          })
          .catch(error=>{
            setMessage("File upload failed");
            toast.warning(error);
          }); 
        }

        // Get Phone
          useEffect(()=>{
            fetch('http://localhost:3002/phone')
            .then((res)=>{
              return res.json();
           })
           .then((data) =>{
              if(data)setMyPhone(data);
              return
            })
            .catch(err=>{
                      console.log(err);
           })
          },[]);

          // Get Skill
          useEffect(()=>{
            setIsLogin(localStorage.getItem('login'));//set localstorage with login status
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
        

          const deletePhone = ((id) => {
            if(window.confirm("Do you want to delete this item?")){
              fetch("http://localhost:3002/phone/"+id,
              {  
                method:'DELETE', 
              }
                ).then(res =>{
                      return res.text();      
                  })
                  .then(res=>{
                      toast.success(res);
                      window.location.reload();
                  })
                  .catch(error=>{
                      toast.warning("Phone not deleted");
                      console.log(error)
                   });
            }}
          )
  
          const deleteSkill = ((id) => {
            if(window.confirm("Do you want to delete this item?")){
              fetch("http://localhost:3002/skills/"+id,
              {  
                method:'DELETE', 
              }
                ).then(res =>{
                      return res.text();      
                  })
                  .then(res=>{
                      toast.success(res);
                      window.location.reload();
                  })
                  .catch(error=>{
                      toast.warning("Skill not deleted");
                      console.log(error)
                   });
            }}
          )

          // Delete Project
          const deleteProject = ((id) => {
            if(window.confirm("Do you want to delete this item?")){
              fetch("http://localhost:3002/projects/"+id,
              {  
                method:'DELETE', 
              }
                ).then(res =>{
                      return res.text();      
                  })
                  .then(res=>{
                      toast.success(res);
                      window.location.reload();
                  })
                  .catch(error=>{
                      toast.warning("Project not deleted");
                      console.log(error)
                   });
            }}
          )
            // Get Projects
          useEffect(()=>{
            fetch('http://localhost:3002/projects').then(res =>{
                return res.json();
             })
             .then((data) =>{
                if(data)setProjects(data);
                return
              })
             .catch(err=>{setNoProjectFound('No project data found. Check of database exist');
                              console.log(err);
            })
           },[]);

          //  Delete School
           const deleteSchool = ((id) => {
            if(window.confirm("Do you want to delete this item?")){
              fetch("http://localhost:3002/schools/"+id,
              {  
                method:'DELETE', 
              }
                ).then(res =>{
                      return res.text();      
                  })
                  .then(res=>{
                      toast.success(res);
                      window.location.reload();
                  })
                  .catch(error=>{
                      toast.warning("School not deleted");
                      console.log(error)
                   });
            }}         
          )

           // Get Schools
   useEffect(()=>{
    fetch('http://localhost:3002/schools').then(res =>{
        return res.json();
     })
     .then((data) =>{
        if(data)setSchools(data);
        return
      })
     .catch(err=>{setNoSchoolFound('No school data found. Check of database exist');
                      console.log(err);
    })}
   )

          
         

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
              <div class="register" >
              <h2 class="header1">Set Admin</h2>
              <div class="messages">
              <Link to="/Register"  style={{ textDecoration: 'none', fontSize:'20px'}}>
             <button>Register an Admin</button> 
              </Link>
              </div>      
              </div>
              </div>

              <div>                         
              <div class="listOfCustomers" >
              <h2 class="header1">Received Messages</h2>
              <div class="messages">
              <Messages/>
              </div>      
              </div>
              </div>


               {/* Phone Section     */}
              <div class="containerAdmin">               
              <h2 class="header1">Phone Section</h2>
              <hr/>

              <h5 style={{color:'Black'}}>Avialable phone numbers</h5>
              <div style={{overflow:'scroll', maxHeight:'100px',
              color:'red', border:'2px solid black',width:'300px',
              marginLeft:'auto',marginRight:'auto',
              marginBottom:'20px',padding:'10px'}}>
              { myPhone?.map((phone)=>(
                <div>                  
                  {phone.phone}                
                  <button onClick={()=>deletePhone(phone.id)}>
                  DELETE
                 </button>
                  </div>
            ))}               
              </div>
                <form  post ="" onSubmit={formSubmitPhone}>
                <div class="row addPro ">
                  <div  class="col-12 addPro2">
                    <input type='text' name="Phone" 
                     value={phone}
                     onChange = {(e)=>setPhone(e.target.value)}
                     placeholder="Add Phone"/>
                  </div>
                    <div class="col-12 addPro2">                      
                     {loginStatus && <button header1 type='submit'>Add</button>}
                     {!loginStatus && <button disabled header1 type='submit'>Only Admin can edit this</button>}
                    </div>
                      </div>
                      </form>
                </div>  

                {/* Skill Section            */}
              <div class="containerAdmin">
              <h2 class="header1">Skill Section</h2>
              <hr/>
              <h5 style={{color:'Black'}}>Avialable Skills</h5>
              <div style={{overflow:'scroll', maxHeight:'100px',
              color:'red', border:'2px solid black',width:'300px',
              marginLeft:'auto',marginRight:'auto',
              marginBottom:'20px',padding:'10px'}}>
              { skills?.map((skill)=>(
                <div>                  
                  {skill.skill}                
                  <button onClick={()=>deleteSkill(skill.id)}>
                  DELETE
                 </button>
                  </div>
            ))}               
              </div>

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
             
             {/* Project Section */}
              <div class="containerAdmin">
              <h2  class="header1">Projects Section</h2>
              <hr/>
              <h5 style={{color:'Black'}}>Avialable Projects</h5>
              <div style={{overflow:'scroll', maxHeight:'100px',
              color:'red', border:'2px solid black',width:'auto',
              marginLeft:'auto',marginRight:'auto',
              marginBottom:'20px',padding:'10px'}}>
              { projects?.map((project)=>(
                <div>                  
                  {project["projecttitle"]}                
                  <button onClick={()=>deleteProject(project.id)}>
                  DELETE
                 </button>
                  </div>
            ))} 
            </div>

                <form  post ="" onSubmit={formSubmitProject}>
                <div class="row addPro ">
                  <div  class="col-12 addPro2">
                      <input type='text' name="projectTittle" 
                      size="70"
                      required
                     value={projectTitle}
                     onChange = {(e)=>setProjectTitle(e.target.value)}
                     placeholder="Tittle" />
                  </div>
                  <div class="col-12 addPro2">
                      <textarea type='text' name="projectDescription" 
                      required
                      value={projectDescription}
                      style={{width: '50%', height:'150px', marginTop:'5px'}}
                      onChange = {(e)=>setProjectDescription(e.target.value)}
                      placeholder="Description" />
                   </div> 
                   <div class="col-12 addPro2">
                      <input type='text' name="gitHubLink" 
                       size="70"
                      value={gitHubLink}
                      onChange = {(e)=>setGitHubLink(e.target.value)}
                      placeholder="GitHub Link" />
                   </div>
                   <div class="col-12 addPro2">
                      <input type='text' name="projectLink" 
                      size="70"
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

                {/* Education Section */}
              <div class="containerAdmin">
              <h2  class="header1">Education Section</h2>
              <hr/>
              <h5 style={{color:'Black'}}>Avialable Schools</h5>
              <div style={{overflow:'scroll', maxHeight:'100px',
              color:'red', border:'2px solid black',width:'auto',
              marginLeft:'auto',marginRight:'auto',
              marginBottom:'20px',padding:'10px'}}>

              { schools?.map((school)=>(
                <div>                  
                  {school.school}                
                  <button onClick={()=>deleteSchool(school.id)}>
                  DELETE
                 </button>
                  </div>
            ))} 
            </div>

                <form  onSubmit={formSubmitSchool}>
                <div class="row addPro ">
                  <div  class="col-12 addPro2">
                      <input type='text' name="honor" 
                      size="50"
                      required
                     value={honor}
                     onChange = {(e)=>setHonor(e.target.value)}
                     placeholder="Honor" />
                  </div>
                  <div class="col-12 addPro2">
                      <input type='text' name="school" 
                      required
                      value={school}
                      size="50"
                      onChange = {(e)=>setSchool(e.target.value)}
                      placeholder="School Attended" />
                   </div> 
                   <div class="col-12 addPro2">
                      <input type='text' name="course" 
                       size="50"
                       required
                      value={course}
                      onChange = {(e)=>setCourse(e.target.value)}
                      placeholder="Course" />
                   </div>
                   <div class="col-12 addPro2">
                      <input type='text' name="courseLink" 
                       size="50"
                      value={courseLink}
                      onChange = {(e)=>setCourseLink(e.target.value)}
                      placeholder="Curriculum Link" />
                   </div>
                   <div class="col-12 addPro2">
                      <input type='text' name="graduationYear" 
                      size="50"
                      required
                      value={graduationYear}
                      onChange = {(e)=>setGraduationYear(e.target.value)}
                      placeholder="Graduation Year" />
                   </div>                
                    <div class="col-12 addPro2">                      
                      <button  class="btn btn-primary" type='submit'>Add</button>
                    </div>
                      </div>
                      </form>
                </div>  

                {/* Photo Section               */}
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
                       placeholder="Upload Picture"/>
                       <div>
                        {progress.started && <progress max="100" value = {progress.pc}></progress>}
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