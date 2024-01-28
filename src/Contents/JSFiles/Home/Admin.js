import axios from 'axios';
import React from 'react';
import '../../CSSFiles/Admin.css'; 
import { toast,ToastContainer } from "react-toastify";
import { Messages } from './../Messages/Messages.js';
import {useState, useEffect} from 'react';
import {Link } from "react-router-dom";
import { CiSettings } from "react-icons/ci";


export const Admin=()=>{

const [skill,setSkill] = useState("");
const [projectTitle,setProjectTitle] = useState("");
const [videoLink,setVideoLink] = useState("");
const [gitHubLink,setGitHubLink] = useState("");
const [projectLink,setProjectLink] = useState("");
const [projectDescription,setProjectDescription] = useState("");
const [phone,setPhone] = useState("");
const [progress,setProgress] = useState({started:false, pc:0});
const [message,setMessage] = useState("");
const [pmessage,setPMessage] = useState("");
const [pMessages,setPMessages] = useState(null);
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
const [certificateFile,setCertificateFile] = useState(null);
const [tYear,setTYear] = useState("");
const [noTrainingFound, setNoTrainingFound] =  useState("");
const [profiles,setProfiles] = useState(null);
const [profile,setProfile] = useState("");
const [profileTitle,setProfileTitle] = useState("");
const [noProfileFound, setNoProfileFound] =  useState("");
const [profileAvailable, setProfileAvailable]=  useState(false);
const [loginStatus,setLoginStatus] = useState(false);
const [adminName,setAdminName] = useState('');
const [cv,setCv] = useState(null);
const [cvs,setCvs] = useState([]);
const [photo,setPhoto] = useState(null);
const [photos,setPhotos] = useState([]);
const [photoUpload,setPhotoUpload] = useState(false);
const [cvUpload,setCvUpload] = useState(false);
const [isCvPresent,setIsCvPresent] = useState(false);


useEffect(()=>{
  const admindata = window.localStorage.getItem('Admin');
  if(admindata != null)  setAdminName(admindata);
  const logindata = window.localStorage.getItem('login')
  if(logindata != null)  setLoginStatus(JSON.parse(logindata));
  },[adminName,loginStatus]);

 
//  PHONE
// Submit Phone
const formSubmitPhone= (e) => {
  e.preventDefault();
  if(phone === "")
  { toast.warning("Enter a phone number");
  return
}
  fetch(`${process.env.REACT_APP_URL}/phone`,
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
            toast.warning("Phone number not added or call the admin on: +447751776483");
      });
}

 // Get Phone
 useEffect(()=>{
  fetch(`${process.env.REACT_APP_URL}/phone`)
  .then((res)=>{
    return res.json();
 })
 .then((data) =>{
    if(data)setMyPhone(data);
    return
  })
  .catch(err=>{
    toast.warning(err);
 })
},[]);

//  Delete Phone
const deletePhone = ((id) => {
  if(window.confirm("Do you want to delete this item?")){
    fetch(`${process.env.REACT_APP_URL}/phone/`+id,
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
            toast.warning("Phone not deleted? Call the admin on: +447751776483");
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
    fetch(`${process.env.REACT_APP_URL}/skills`,
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
            toast.warning("Skill not added? Call the admin on: +447751776483");
        });
  }

   // Get Skill
   useEffect(()=>{
    fetch(`${process.env.REACT_APP_URL}/skills`)
    .then((res)=>{
       return res.json();
    })
    .then((data) =>{
       if(data)setSkills(data);
       return
     })
     .catch(err=>{setNoSkillFound("No Skill found. Admin check if database exist or call the admin on: +447751776483");
    })
   },[]);

  
  // Delete Skill
  const deleteSkill = ((id) => {
    if(window.confirm("Do you want to delete this item?")){
      fetch(`${process.env.REACT_APP_URL}/skills/`+id,
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
              toast.warning("Skill not deleted? Call the admin on: +447751776483");
           });
    }}
  )

  // PUBLIC MESSAGES
// Submit Public Message
const formSubmitPMessage= (e) => {
  e.preventDefault();
  if(pmessage== "") {
    toast.warning("Enter a message");
    return
  }
  fetch(`${process.env.REACT_APP_URL}/pmessages`,
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
          window.location.reload();
    })
    .catch(error=>{
          toast.warning("Message not added? Call the admin on: +447751776483");
      });
}

 // Get Public Message
 useEffect(()=>{
  fetch(`${process.env.REACT_APP_URL}/pmessages`)
  .then((res)=>{
     return res.json();
  })
  .then((data) =>{
     if(data)setPMessages(data);
     return
   })
   .catch(err=>{setNoPMessageFound("No Skill found by this time. Admin check if database exist or call the admin on: +447751776483");
   toast.warning(err);
  })
 },[]);


// Delete public message
const deletePMessage = ((id) => {
  if(window.confirm("Do you want to delete this item?")){
    fetch(`${process.env.REACT_APP_URL}/pmessages/`+id,
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
            toast.warning("Message not deleted? Call the admin on: +447751776483");
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
  fetch(`${process.env.REACT_APP_URL}/hobbies`,
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
          toast.warning("Hobby not added? Call the admin on: +447751776483");
      });
}

 // Get Hobby
 useEffect(()=>{
  fetch(`${process.env.REACT_APP_URL}/hobbies`)
  .then((res)=>{
     return res.json();
  })
  .then((data) =>{
     if(data)setHobbies(data);
     return
   })
   .catch(err=>{setNoHobbyFound("No hobby found. Admin check if database exist or call the admin on: +447751776483");
   toast.warning(err);
  })
 },[]);


// Delete hobby
const deleteHobby = ((id) => {
  if(window.confirm("Do you want to delete this item?")){
    fetch(`${process.env.REACT_APP_URL}/hobbies/`+id,
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
            toast.warning(error);
         });
  }}
)

// PROFILE SUMMARY
// Submit Profile
const formSubmitProfile= (e) => {
  e.preventDefault();
  const datax = {profileTitle,profile};
  if(profile== "") {
    toast.warning("Enter a profile summary");
    return
  }
  fetch(`${process.env.REACT_APP_URL}/profiles`,
  {  
    method:'POST', 
    headers:{
    "Access-Control-Allow-Origin":"*",
    "Content-Type": "application/json"
           },
    body: JSON.stringify(datax)
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
          toast.warning("Profile not added? Call the admin on: +447751776483");
      });
}

 // Get Profile Summary
 useEffect(()=>{
  fetch(`${process.env.REACT_APP_URL}/profiles`)
  .then((res)=>{
     return res.json();
  })
  .then((data) =>{
    if(data.length>0) setProfileAvailable(true);
     setProfiles(data);
   })
   .catch(err=>{setNoProfileFound("No profile summary added. Admin check if database exist or call the admin on: +447751776483");
   toast.warning(err);
  })
 },[]);


// Update Profile
const updateProfile = () => {
  const datax = {profileTitle,profile};
  if(window.confirm("Do you want to update your profile?")){
    fetch(`${process.env.REACT_APP_URL}/profiles`,
        {
          method: 'PUT',
          headers:{
            "Access-Control-Allow-Origin":"*",
              "Content-Type": "application/Json"
           },
          body: JSON.stringify(datax)
          }
      )
      .then(res =>{return res.json()})
      .then(data =>{         
                toast.success("Profile summary updated");
              return true;   
           })
           .catch(err=>{
              toast.warning("Profile not updated? Call the admin on: +447751776483");
              toast.warning(err);
      }) 
}}


// Delete Profile
const deleteProfile = ((id) => {
  if(window.confirm("Do you want to delete this item?")){
    fetch(`${process.env.REACT_APP_URL}/profiles/`+id,
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
            toast.warning("Profile not deleted? Call the admin on: +447751776483");
            toast.warning(error);
         });
  }}
)

  // PROJECTS
  // Submit Project
  const formSubmitProject= (e) => {
    e.preventDefault();
    const datax = {projectTitle,projectDescription,videoLink,gitHubLink,projectLink};
    if(!projectTitle||!projectDescription){
      toast.warning('Enter a Project Title and description are compulsary fields');
      return;
}
    fetch(`${process.env.REACT_APP_URL}/projects`,
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
            toast.warning("Project not added? Call the admin on: +447751776483");
         });
  }

   // Delete Project
   const deleteProject = ((id) => {
    if(window.confirm("Do you want to delete this item?")){
      fetch(`${process.env.REACT_APP_URL}/projects/`+id,
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
              toast.warning("Project not deleted? Call the admin on: +447751776483");
              toast.warning(error);
           });
    }}
  )
    // Get Projects
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_URL}/projects`).then(res =>{
        return res.json();
     })
     .then((data) =>{
      if(data.length<1)setNoProjectFound('No project data found. Check of database exist or call the admin on: +447751776483');
        if(data)setProjects(data);
        return
      })
     .catch(err=>{
     toast.warning(err);
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

    fetch(`${process.env.REACT_APP_URL}/schools`,
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
            toast.warning("School not added? Call the admin on: +447751776483");
         });
  }

   //  Delete School
   const deleteSchool = ((id) => {
    if(window.confirm("Do you want to delete this item?")){
      fetch(`${process.env.REACT_APP_URL}/schools/`+id,
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
              toast.warning("School not deleted? Call the admin on: +447751776483");
              toast.warning(error);
           });
    }}         
  )

   // Get Schools
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_URL}/schools`).then(res =>{
        return res.json();
        })
        .then((data) =>{
        if(data)setSchools(data);
        return
        })
        .catch(err=>{setNoSchoolFound('No school data found. Check of database exist or call the admin on: +447751776483');
        toast.warning(err);
        })}
)

  //Submit Trainings
  const formSubmitTraining = (e) => {
    e.preventDefault();
    const datax = {tCourse,tCompany,tCompanyWebsite,tYear};
    if(!tCourse||!tCompany||!tYear){
      toast.warning('Enter compulsary fields');
      return;
}

const formData = new FormData();
formData.append('tCourse',tCourse);
formData.append('tCompany',tCompany);
formData.append('tCompanyWebsite',tCompanyWebsite);
formData.append('file',certificateFile);                                                                                                                                                                
formData.append('tYear',tYear);

if(formData == null) setMessage("No Photo attached");
axios.post(`${process.env.REACT_APP_URL}/trainings`,
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
      setTCourse("");
      setTCompany("");
      setTCompanyWebsite("");
      setCertificateFile(null);
      setTYear("");
      toast.success("Trainig Added");
    })
    .catch(error=>{
      toast.success("Training not Added");
      toast.warning(error);
    }); 
  }

   //  Delete Trainingg
   const deleteTraining = ((id) => {
    if(window.confirm("Do you want to delete this item?")){
      fetch(`${process.env.REACT_APP_URL}/trainings/`+id,
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
              toast.warning(error);
           });
    }}         
  )   

  // Get Training
    useEffect(()=>{
      fetch(`${process.env.REACT_APP_URL}/trainings`)
       .then(res =>{
          return res.json();
      })
      .then((data) =>{
          if(data)setTrainings(data);
          return
        })
      .catch(err=>{setNoTrainingFound('No training data found. Check of database exist or call the admin on: +447751776483');
                       
      })}
)

 //Get CV
 useEffect(()=>{  
  fetch(`${process.env.REACT_APP_URL}/cvs`)
  .then(res =>{
      return res.json();
   })
   .then((data) =>{  
    setCvs(data);
    if(data.length>0) setIsCvPresent(true);
    })
   .catch(err=>{
    toast.warning(err);
  })
 },[]);

 //  Delete CV
const deleteCv = ((id) => {
if(window.confirm("Do you want to delete this item?")){
  fetch(`${process.env.REACT_APP_URL}/cvs/`+id,
  {  
    method:'DELETE', 
  }
    ).then(res =>{
          return res.text();      
      })
      .then(res=>{
          toast.success("CV deleted");
          window.location.reload();
      })
      .catch(error=>{
          toast.warning("CV not deleted? Call the admin on: +447751776483");
          toast.warning(error);
       });
}}
)

// Upload CV
const formSubmitCV= (e) => {
  e.preventDefault();
  
  const formData = new FormData();
  formData.append('cv',cv)

  // if(!formData.has('cv'))  return toast.warning("Attach a CV");
  setCvUpload(true);
    axios.post(`${process.env.REACT_APP_URL}/cvs`,
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
          toast.success("CV Uplaoded");
          setCvUpload(false);
          setTimeout(() => {
            window.location.reload();
         }, 2000);
        })
        .catch(error=>{
          toast.success("CV not Uplaoded? Call the admin on: +447751776483");
          setCvUpload(false);
          toast.warning(error);
        }); 
      }

  //Get Photo
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_URL}/photos`)
    .then(res =>{
      return res.json();
   })
   .then((data) =>{
    setPhotos(data);
    })
   .catch(err=>{
    toast.warning(err);
  })
   },[]);

  // Add Photo
  const formSubmitPhoto= (e) => {
    e.preventDefault();
   
    const formData = new FormData();
    formData.append('photo',photo)

    if(formData == null) setMessage("No Photo attached");
    setPhotoUpload(true);
      axios.post(`${process.env.REACT_APP_URL}/photos`,
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
            toast.success("Photo file Uplaoded successively");
            setPhotoUpload(false);
            setTimeout(() => {
              window.location.reload();
           }, 2000);
          })
          .catch(error=>{
            toast.success("Photo not Uplaoded");
            setPhotoUpload(false);
            toast.warning(error);
          }); 
        }

       //  Delete Photo
const deletePhoto = ((id) => {
  if(window.confirm("Do you want to delete this item?")){
    fetch(`${process.env.REACT_APP_URL}/photos/`+id,
    {  
      method:'DELETE', 
    }
      ).then(res =>{
            return res.text();      
        })
        .then(res=>{
            toast.success("Photo deleted");
            window.location.reload();
        })
        .catch(error=>{
            toast.warning("Photo not deleted? or Call the admin on: +447751776483");
            
         });
  }}
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
              <h1 style={{color:'gold', margin:'100px'}}>Welcome {adminName}</h1>

              <div>                         
              <div class="register" >
              <h2 class="header2"> <CiSettings />Admin</h2>
              <div class="messages">
              <Link to="/Register"  style={{ textDecoration: 'none', fontSize:'20px'}}>
             <button class="btn btn-primary">Become the Admin Here</button> 
              </Link>
              </div>      
              </div>
              </div>

              <div class="adminMessages" >                         
              <h2 class="header2">Received Messages</h2>
              <div class="messages">
              <Messages/>
              </div>      
              </div>


               {/* Phone Section     */}
              <div class="containerAdmin">               
              <h2 class="header2">Phone Section</h2>
              <hr/>

              <h5 style={{color:'Black'}}>Avialable phone numbers</h5>
              <div class="adminSection">
              { 
              myPhone?.map((phone)=>(
                <div>                  
                  {phone.phone}                
                  {loginStatus && < button class="btn btn-primary" onClick={()=>deletePhone(phone.id)}>
                  DELETE
                 </button>  } 
                 {!loginStatus && < button class="btn btn-primary" disabled>
                  DELETE
                 </button>  }              
                  </div>
            ))
            }               
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
                  {noSkillFound|| skill.skill} 
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
                  {noHobbyFound|| hobby.hobby} 
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
                      {noPMessageFound || pMessage.pmessage} 
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
                  <h3>{profile.profiletitle}</h3>                 
                  {noProfileFound || profile.profile} 
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
                      <input type='text' name="profileTitle" 
                      required
                     value={profileTitle}
                     onChange = {(e)=>setProfileTitle(e.target.value)}
                     placeholder="Profile Title" />
                  </div>
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
                  {noProjectFound || project["projecttitle"]} 
                  {loginStatus && <button class="btn btn-primary" onClick={()=>deleteProject(project.id)}>
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
                      <input type='text' name="videoLink" 
                      value={videoLink}
                      onChange = {(e)=>setVideoLink(e.target.value)}
                      placeholder="Video Link" />
                   </div>
                   <div class="col-12 addPro2">
                      <input type='text' name="gitHubLink" 
                      value={gitHubLink}
                      onChange = {(e)=>setGitHubLink(e.target.value)}
                      placeholder="GitHub Link" />
                   </div>
                   <div class="col-12 addPro2">
                      <input type='text' name="projectLink" 
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
                  {noSchoolFound || school.school}
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
                      required
                     value={honor}
                     onChange = {(e)=>setHonor(e.target.value)}
                     placeholder="Honor" />
                  </div>
                  <div class="col-12 addPro2">
                      <input type='text' name="school" 
                      required
                      value={school}
                      onChange = {(e)=>setSchool(e.target.value)}
                      placeholder="School Attended" />
                   </div> 
                   <div class="col-12 addPro2">
                      <input type='text' name="course" 
                       required
                      value={course}
                      onChange = {(e)=>setCourse(e.target.value)}
                      placeholder="Course" />
                   </div>
                   <div class="col-12 addPro2">
                      <input type='text' name="courseLink" 
                      value={courseLink}
                      onChange = {(e)=>setCourseLink(e.target.value)}
                      placeholder="Curriculum Link" />
                   </div>
                   <div class="col-12 addPro2">
                      <input type='text' name="graduationYear" 
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
                  {noTrainingFound || training.course}
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
                      required
                     value={tCourse}
                     onChange = {(e)=>setTCourse(e.target.value)}
                     placeholder="Course" />
                  </div>
                  <div class="col-12 addPro2">
                      <input type='text' name="tCompany" 
                      required
                      value={tCompany}
                      onChange = {(e)=>setTCompany(e.target.value)}
                      placeholder="Company" />
                   </div> 
                   <div class="col-12 addPro2">
                      <input type='text' name="tCompanyWebsite" 
                      required
                      value={tCompanyWebsite}
                      onChange = {(e)=>setTCompanyWebsite(e.target.value)}
                      placeholder="Company website" />
                   </div> 
                   <div class="col-12 addPro2">
                   <strong>Upload Certificate: </strong><input type='file' name="certificateImage"
                       onChange = {(e)=>setCertificateFile(e.target.files[0])}
                       placeholder="Upload certificate"/>
                   </div>
                   <div class="col-12 addPro2">
                      <input type='text' name="tYear" 
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


                {/* CV Section               */}
                <div class="containerAdmin">
              <h2 class="header2">Add a CV</h2> 
              <hr/>
              <h5 style={{color:'Black'}}>Avialable CV</h5>
              <div class="adminSection">
              {cvs.map((cv)=>(
                <div>                  
                  <strong class="cv">{cv.cv}</strong>
                  {loginStatus && < button class="btn btn-primary"  onClick={()=>deleteCv(cv.id)}>
                  DELETE
                 </button>  } 
                 {!loginStatus && < button class="btn btn-primary" disabled>
                  DELETE
                 </button>  }                  
                  </div>
            ))} 
            </div>
                <form  post ="" onSubmit={formSubmitCV}>
                <div class="row addPro ">                 
                   <div class="col-12 addPro2">
                      <div class="drop">
                      <input type='file' name="cv"
                       onChange = {(e)=>setCv(e.target.files[0])}
                       placeholder="Upload CV"/>
                       {cvUpload && <span>Uploading CV...</span>}
                       <div>
                        {progress.started && <progress max="100" value = {progress.pc}></progress>}
                        </div>
                    <div>
                      {message && <span>{message}</span>}
                    </div>
                      </div> 
                    </div>
               
                    <div class="col-12 addPro2">                      
                    {!isCvPresent && loginStatus && <button class="btn btn-primary" type='submit'>Upload</button>}
                    {isCvPresent && loginStatus && <button disabled class="btn btn-primary" type='submit'>Uploaded</button>}
                     {!loginStatus && <button disabled class="btn btn-primary" type='submit'>Only Admin can edit this</button>}
                    </div>
                      </div>
                      </form>
                </div> 

                {/* Photo Section               */}
              <div class="containerAdmin">
              <h2 class="header2">Add Your Photo</h2> 
              <hr/>
              <h5 style={{color:'Black'}}>Avialable Photo(s)</h5>
              <div class="adminSection">
              {photos?.map((photo)=>(
                <div>                  
                   <strong class="cv">{photo.photo}</strong>
                  {loginStatus && < button class="btn btn-primary"  onClick={()=>deletePhoto(photo.id)}>
                  DELETE
                 </button>  } 
                 {!loginStatus && < button class="btn btn-primary" disabled>
                  DELETE
                 </button>  }                  
                  </div>
            ))} 
              </div>
                <form  post ="" onSubmit={formSubmitPhoto}>
                <div class="row addPro ">                 
                   <div class="col-12 addPro2">
                      <div class="drop">
                      <input type='file' name="photo"
                       onChange = {(e)=>setPhoto(e.target.files[0])}
                       placeholder="Upload Picture"/>
                       <div>
                        {progress.started && <progress max="100" value = {progress.pc}></progress>}
                        </div>
                    <div>
                      {photoUpload && <span>Uploading Photo...</span>}
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