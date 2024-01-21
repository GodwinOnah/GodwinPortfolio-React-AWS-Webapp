import axios from 'axios';
import React from 'react';
import '../../CSSFiles/Admin.css'; 
import { toast,ToastContainer } from "react-toastify";
import { Messages } from './../Messages/Messages.js';
import {useState, useEffect} from 'react';
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
const [pmessage,setPMessage] = useState("");
const [pMessages,setPMessages] = useState(null);
const formData = new FormData();
const [myPhone,setMyPhone] = useState([]);
const [skills,setSkills] = useState(null);
const [hobbies,setHobbies] = useState(null);
const [hobby,setHobby] = useState("");
const [noHobbyFound, setNoHobbyFound] =  useState("");
const [noSkillFound, setNoSkillFound] =  useState("");
const [noPMessageFound, setNoPMessageFound] =  useState("");
const [projects,setProjects] = useState([]);
const [schools,setSchools] = useState([]);
const [noProjectFound, setNoProjectFound] =  useState("");
const [noSchoolFound, setNoSchoolFound] =  useState("");
const [honor,setHonor] = useState("");
const [school,setSchool] = useState("");
const [course,setCourse] = useState("");
const [courseLink,setCourseLink] = useState("");
const [graduationYear,setGraduationYear] = useState("");
const [trainings,setTrainings] = useState([]);
const [tCourse,setTCourse] = useState("");
const [tCompany,setTCompany] = useState("");
const [tCompanyWebsite,setTCompanyWebsite] = useState("");
const [certificate,setCertificate] = useState("");
const [tYear,setTYear] = useState("");
const [noTrainingFound, setNoTrainingFound] =  useState("");
const [profiles,setProfiles] = useState(null);
const [profile,setProfile] = useState("");
const [noProfileFound, setNoProfileFound] =  useState("");
const [profileAvailable, setProfileAvailable]=  useState(false);
const [loginStatus,setLoginStatus] = useState(false);
const [adminName,setAdminName] = useState('');


useEffect(()=>{
  const data = window.localStorage.getItem('Admin')
  if(data != null)  setAdminName(data)
  },[adminName]);

// Upload Image
const uploadFile = (e) =>{  
    if(e.target.files.length>0){ 
      setImage(e.target.value);     
      const file = e.target.files[0];
      setImageId(file); 
      formData.append('file',file);
}}

// Get Login
useEffect(()=>{
  const data =  window.localStorage.getItem('login')
  if(data !=null) setLoginStatus(JSON.parse(data));
  fetch('http://localhost:3002/login')
  .then(res =>{
      return res.json();
   })
   .then((data) =>{
    })
   .catch(err=>{
       console.log(err);
  })
 },[]);

//  PHONE
// Submit Phone
const formSubmitPhone= (e) => {
  e.preventDefault();
  if(phone === "")
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

//  Delete Phone
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

// SKILLS
// Submit Skills
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

   // Get Skill
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

  
  // Delete Skill
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

  // PUBLIC MESSAGES
// Submit Public Message
const formSubmitPMessage= (e) => {
  e.preventDefault();
  console.log(pmessage)
  if(pmessage== "") {
    toast.warning("Enter a message");
    return
  }
  fetch('http://localhost:3002/pmessages',
  {  
    method:'POST', 
    headers:{
    "Access-Control-Allow-Origin":"*",
    "Content-Type": "application/json"
           },
    body: JSON.stringify({pmessage})
  }
    ).then(res =>{
          return res.json();      
      })
    .then(data=>{
          setPMessage("");
          toast.success(data);
          // window.location.reload();
    })
    .catch(error=>{
          toast.warning("Message not added");
      });
}

 // Get Public Message
 useEffect(()=>{
  fetch('http://localhost:3002/pmessages')
  .then((res)=>{
     return res.json();
  })
  .then((data) =>{
     if(data)setPMessages(data);
     return
   })
   .catch(err=>{setNoPMessageFound("No Skill found. Admin check if database exist");
                 console.log(err);
  })
 },[]);


// Delete public message
const deletePMessage = ((id) => {
  if(window.confirm("Do you want to delete this item?")){
    fetch("http://localhost:3002/pmessages/"+id,
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
            toast.warning("Message not deleted");
            console.log(error)
         });
  }}
)

  // HOBBIES
// Submit Hobbies
const formSubmitHobby= (e) => {
  e.preventDefault();
  if(hobby== "") {
    toast.warning("Enter a hobby");
    return
  }
  fetch('http://localhost:3002/hobbies',
  {  
    method:'POST', 
    headers:{
    "Access-Control-Allow-Origin":"*",
    "Content-Type": "application/json"
           },
    body: JSON.stringify({hobby})
  }
    ).then(res =>{
          return res.json();      
      })
    .then(data=>{
          setHobby("");
          toast.success(data);
          window.location.reload();
    })
    .catch(error=>{
          toast.warning("Hobby not added");
      });
}

 // Get Hobby
 useEffect(()=>{
  fetch('http://localhost:3002/hobbies')
  .then((res)=>{
     return res.json();
  })
  .then((data) =>{
     if(data)setHobbies(data);
     return
   })
   .catch(err=>{setNoHobbyFound("No hobby found. Admin check if database exist");
                 console.log(err);
  })
 },[]);


// Delete hobby
const deleteHobby = ((id) => {
  if(window.confirm("Do you want to delete this item?")){
    fetch("http://localhost:3002/hobbies/"+id,
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
            toast.warning("Hobby not deleted");
            console.log(error)
         });
  }}
)

// PROFILE SUMMARY
// Submit Profile
const formSubmitProfile= (e) => {
  e.preventDefault();
  if(profile== "") {
    toast.warning("Enter a profile summary");
    return
  }
  fetch('http://localhost:3002/profiles',
  {  
    method:'POST', 
    headers:{
    "Access-Control-Allow-Origin":"*",
    "Content-Type": "application/json"
           },
    body: JSON.stringify({profile})
  }
    ).then(res =>{
          return res.json();      
      })
    .then(data=>{
          setProfile("");
          toast.success(data);
          window.location.reload();
    })
    .catch(error=>{
          toast.warning("Profile not added");
      });
}

 // Get Profile Summary
 useEffect(()=>{
  fetch('http://localhost:3002/profiles')
  .then((res)=>{
     return res.json();
  })
  .then((data) =>{
    if(data.length>0) setProfileAvailable(true);
     setProfiles(data);
   })
   .catch(err=>{setNoProfileFound("No profile summary added. Admin check if database exist");
                 console.log(err);
  })
 },[]);


// Update Profile
const updateProfile = () => {
  if(window.confirm("Do you want to update your profile?")){
    fetch(
      "http://localhost:3002/profiles",
        {
          method: 'PUT',
          headers:{
            "Access-Control-Allow-Origin":"*",
              "Content-Type": "application/Json"
           },
          body: JSON.stringify({profile})
          }
      )
      .then(res =>{return res.json()})
      .then(data =>{         
                toast.success("Profile summary updated");
                // window.location.reload();
              return true;   
           })
           .catch(err=>{
              toast.warning("Profile not updated");
                     console.log(err);
      }) 
}}


// Delete Profile
const deleteProfile = ((id) => {
  if(window.confirm("Do you want to delete this item?")){
    fetch("http://localhost:3002/profiles/"+id,
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
            toast.warning("Profile not deleted");
            console.log(error)
         });
  }}
)

  // PROJECTS
  // Submit Project
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


  // EDUCATION 
  //Submit Schools
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

  //Submit Trainings
  const formSubmitTraining = (e) => {
    e.preventDefault();
    const datax = {tCourse,tCompany,tCompanyWebsite,certificate,tYear};
    console.log(datax)
    if(!tCourse||!tCompany||!certificate||!tYear){
      toast.warning('Enter compulsary fields');
      return;
}

    fetch('http://localhost:3002/trainings',
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
            setTCourse("");
            setTCompany("");
            setTCompanyWebsite("");
            setCertificate("");
            setTYear("");
            toast.success(res);
            // window.location.reload();
        })
        .catch(error=>{
            toast.warning("Training not added");
         });
  }

   //  Delete Traing
   const deleteTraining = ((id) => {
    if(window.confirm("Do you want to delete this item?")){
      fetch("http://localhost:3002/trainings/"+id,
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
              toast.warning("Training not deleted");
              console.log(error)
           });
    }}         
  )   

  // Get Training
    useEffect(()=>{
      fetch('http://localhost:3002/trainings')
       .then(res =>{
          return res.json();
      })
      .then((data) =>{
          if(data)setTrainings(data);
          return
        })
      .catch(err=>{setNoTrainingFound('No training data found. Check of database exist');
                        console.log(err);
      })}
)


  // Upload Image
  const formSubmitPhoto= (e) => {
    e.preventDefault();

    if(formData == null) setMessage("No Photo attached");

      axios.post(`http://localhost:3002/image/${imageId}/images/photos`,
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
              <h1 style={{color:'gold', margin:'100px'}}>Welcome {adminName}</h1>

              <div>                         
              <div class="register" >
              <h2 class="header2">Set Admin</h2>
              <div class="messages">
              <Link to="/Register"  style={{ textDecoration: 'none', fontSize:'20px'}}>
             <button>Become the Admin Here</button> 
              </Link>
              </div>      
              </div>
              </div>

              <div>                         
              <div class="adminMessages" >
              <h2 class="header2">Received Messages</h2>
              <div class="messages">
              <Messages/>
              </div>      
              </div>
              </div>


               {/* Phone Section     */}
              <div class="containerAdmin">               
              <h2 class="header2">Phone Section</h2>
              <hr/>

              <h5 style={{color:'Black'}}>Avialable phone numbers</h5>
              <div class="adminSection">
              { myPhone?.map((phone)=>(
                <div>                  
                  {phone.phone}                
                  {loginStatus && < button class="btn btn-primary" onClick={()=>deletePhone(phone.id)}>
                  DELETE
                 </button>  } 
                 {!loginStatus && < button class="btn btn-primary" disabled>
                  DELETE
                 </button>  }              
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
                     {loginStatus && <button class="btn btn-primary" type='submit'>Add</button>}
                     {!loginStatus && <button disabled class="btn btn-primary">Only Admin can edit this</button>}
                    </div>
                      </div>
                      </form>
                </div>  

                {/* Skill Section            */}
              <div class="containerAdmin">
              <h2 class="header2">Skill Section</h2>
              <hr/>
              <h5 style={{color:'Black'}}>Avialable Skills</h5>
              <div class="adminSection">
              { skills?.map((skill)=>(
                <div>                  
                  {skill.skill} 
                  {loginStatus && < button class="btn btn-primary" onClick={()=>deleteSkill(skill.id)}>
                  DELETE
                 </button>  } 
                 {!loginStatus && <button class="btn btn-primary" disabled>
                  DELETE
                 </button>  }                 
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
                    {loginStatus && <button class="btn btn-primary" type='submit'>Add</button>}
                     {!loginStatus && <button disabled class="btn btn-primary" type='submit'>Only Admin can edit this</button>}
                    </div>
                      </div>
                      </form>
                </div>  

             {/* Hobby Section            */}
             <div class="containerAdmin">
              <h2 class="header2">Hobby Section</h2>
              <hr/>
              <h5 style={{color:'Black'}}>Avialable Hobbies</h5>
              <div class="adminSection">
              { hobbies?.map((hobby)=>(
                <div>                  
                  {hobby.hobby} 
                  {loginStatus && < button class="btn btn-primary" onClick={()=>deleteHobby(hobby.id)}>
                  DELETE
                 </button>  } 
                 {!loginStatus && < button class="btn btn-primary" disabled>
                  DELETE
                 </button>  }                 
                  </div>
            ))}               
              </div>

                <form onSubmit={formSubmitHobby}>
                <div class="row addPro ">
                  <div  class="col-12 addPro2">
                      <input type='text' name="hobby" 
                     value={hobby}
                     onChange = {(e)=>setHobby(e.target.value)}
                     placeholder="Add hobby" />
                  </div>
                    <div class="col-12 addPro2">                      
                    {loginStatus && <button class="btn btn-primary" type='submit'>Add</button>}
                     {!loginStatus && <button disabled class="btn btn-primary" type='submit'>Only Admin can edit this</button>}
                    </div>
                      </div>
                      </form>
                </div>  

    {/* Public Message Section */}
    <div class="containerAdmin">
                  <h2 class="header2">Public Message Section</h2>
                  <hr/>
                  <h5 style={{color:'Black'}}>Avialable Messages</h5>
                  <div class="adminSection">
                  { pMessages?.map((pMessage)=>(
                    <div>                  
                      {pMessage.pmessage} 
                      {loginStatus && < button class="btn btn-primary" onClick={()=>deletePMessage(pMessage.id)}>
                      DELETE
                    </button>  } 
                    {!loginStatus && < button class="btn btn-primary" disabled>
                      DELETE
                    </button>  }                 
                      </div>
                ))}               
                  </div>

                    <form onSubmit={formSubmitPMessage}>
                    <div class="row addPro ">
                      <div  class="col-12 addPro2">
                        <textarea type='text' name="pmessage" 
                        value={pmessage}
                        style={{width: '50%', height:'150px', marginTop:'5px'}}
                        onChange = {(e)=>setPMessage(e.target.value)}
                        placeholder="Add Message" />
                      </div>
                        <div class="col-12 addPro2">                      
                        {loginStatus && <button class="btn btn-primary" type='submit'>Add</button>}
                        {!loginStatus && <button disabled class="btn btn-primary" type='submit'>Only Admin can edit this</button>}
                        </div>
                          </div>
                          </form>
                    </div>  

                 {/* Profile Section            */}
             <div class="containerAdmin">
              <h2 class="header2">Profile Section</h2>
              <hr/>
              <h5  style={{color:'Black'}}>Avialable Profile</h5>
              <div class="adminSection">
              { profiles?.map((profile)=>(
                <div>                  
                  {profile.profile} 
                  {loginStatus && < button class="btn btn-primary" onClick={()=>deleteProfile(profile.id)}>
                  DELETE
                 </button>  } 
                 {!loginStatus && < button class="btn btn-primary" disabled>
                  DELETE
                 </button>  }                  
                  </div>
            ))}               
              </div>

                <form>
                <div class="row addPro ">
                  <div  class="col-12 addPro2">
                      <textarea type='text' name="profile" 
                     value={profile}
                     style={{width: '50%', height:'150px', marginTop:'5px'}}
                     onChange = {(e)=>setProfile(e.target.value)}
                     placeholder="Add profile summary" />
                  </div>
                  {loginStatus && <div>
                  <div class="col-12 addPro2">                      
                  {!profileAvailable && <button  class="btn btn-primary" onClick={formSubmitProfile}>
                        Add
                  </button>}
                  </div>
                  <div class="col-12 addPro2">                                   
                  {profileAvailable && <button  class="btn btn-primary" onClick={updateProfile}>
                        Update
                  </button>}                   
                     
                    </div>
                    </div>
                    }
                     <div class="col-12 addPro2"> 
                    {            
                    !loginStatus && <button disabled class="btn btn-primary" type='submit'>Only Admin can edit this</button>                   
                    }
                     </div>
                      </div>
                      </form>
                </div>  
                          
             {/* Project Section */}
              <div class="containerAdmin">
              <h2  class="header2">Projects Section</h2>
              <hr/>
              <h5 style={{color:'Black'}}>Avialable Projects</h5>
              <div class="adminSection">
              { projects?.map((project)=>(
                <div>                  
                  {project["projecttitle"]} 
                  {loginStatus && < button class="btn btn-primary" onClick={()=>deleteProject(project.id)}>
                  DELETE
                 </button>  } 
                 {!loginStatus && < button class="btn btn-primary" disabled>
                  DELETE
                 </button>  }                   
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
                    {loginStatus && <button class="btn btn-primary" type='submit'>Add</button>}
                     {!loginStatus && <button disabled class="btn btn-primary" type='submit'>Only Admin can edit this</button>}
                    </div>
                      </div>
                      </form>
                </div>  

                {/* EDUCATION */}
                {/* Schools */}
              <div class="containerAdmin">
              <h2  class="header2">School Section</h2>
              <hr/>
              <h5 style={{color:'Black'}}>Avialable Schools</h5>
              <div class="adminSection">

              { schools?.map((school)=>(
                <div>                  
                  {school.school}
                  {loginStatus && < button class="btn btn-primary"  onClick={()=>deleteSchool(school.id)}>
                  DELETE
                 </button>  } 
                 {!loginStatus && < button class="btn btn-primary" disabled>
                  DELETE
                 </button>  }                    
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
                    {loginStatus && <button class="btn btn-primary" type='submit'>Add</button>}
                     {!loginStatus && <button disabled class="btn btn-primary" type='submit'>Only Admin can edit this</button>}
                    </div>
                      </div>
                      </form>
                </div>  

                {/* Trainings */}
                <div class="containerAdmin">
              <h2  class="header2">Training Section</h2>
              <hr/>
              <h5 style={{color:'Black'}}>Avialable Training</h5>
              <div class="adminSection">
              {trainings?.map((training)=>(
                <div>                  
                  {training.course}
                  {loginStatus && < button class="btn btn-primary"  onClick={()=>deleteTraining(training.id)}>
                  DELETE
                 </button>  } 
                 {!loginStatus && < button class="btn btn-primary" disabled>
                  DELETE
                 </button>  }                  
                  </div>
            ))} 
            </div>

                <form  onSubmit={formSubmitTraining}>
                <div class="row addPro ">
                  <div  class="col-12 addPro2">
                      <input type='text' name="tCourse" 
                      size="50"
                      required
                     value={tCourse}
                     onChange = {(e)=>setTCourse(e.target.value)}
                     placeholder="Course" />
                  </div>
                  <div class="col-12 addPro2">
                      <input type='text' name="tCompany" 
                      required
                      value={tCompany}
                      size="50"
                      onChange = {(e)=>setTCompany(e.target.value)}
                      placeholder="Company" />
                   </div> 
                   <div class="col-12 addPro2">
                      <input type='text' name="tCompanyWebsite" 
                      required
                      value={tCompanyWebsite}
                      size="50"
                      onChange = {(e)=>setTCompanyWebsite(e.target.value)}
                      placeholder="Company website" />
                   </div> 
                   <div class="col-12 addPro2">
                      <input type='text' name="certificate" 
                       size="50"
                       required
                      value={certificate}
                      onChange = {(e)=>setCertificate(e.target.value)}
                      placeholder="Certificate"/>
                   </div>
                   <div class="col-12 addPro2">
                      <input type='text' name="tYear" 
                       size="50"
                      value={tYear}
                      onChange = {(e)=>setTYear(e.target.value)}
                      placeholder="Graduation" />
                   </div>             
                    <div class="col-12 addPro2">                      
                    {loginStatus && <button class="btn btn-primary" type='submit'>Add</button>}
                     {!loginStatus && <button disabled class="btn btn-primary" type='submit'>Only Admin can edit this</button>}
                    </div>
                      </div>
                      </form>
                </div>  

                {/* Photo Section               */}
              <div class="containerAdmin">
              <h2 class="header2">Add Your Photo</h2> 
              <hr/>
                <form  post ="" onSubmit={formSubmitPhoto}>
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
                    {loginStatus && <button class="btn btn-primary" type='submit'>Upload</button>}
                     {!loginStatus && <button disabled class="btn btn-primary" type='submit'>Only Admin can edit this</button>}
                    </div>
                      </div>
                      </form>
                </div>               
            </div>
            </>
          )
}