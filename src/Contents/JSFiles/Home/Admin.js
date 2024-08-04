import axios from 'axios';
import React from 'react';
import '../../CSSFiles/Admin.css';
import {toast, ToastContainer} from "react-toastify";
import {Messages} from './../Messages/Messages.js';
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {CiSettings} from "react-icons/ci";
import ProgressBar from "@ramonak/react-progress-bar";
import { Poster } from './Poster';

export const Admin = () => {

    const [skill,
        setSkill] = useState("");
    const [projectTitle,
        setProjectTitle] = useState("");
    const [videoLink,
        setVideoLink] = useState("");
    const [gitHubLink,
        setGitHubLink] = useState("");
    const [projectLink,
        setProjectLink] = useState("");
    const [projectDescription,
        setProjectDescription] = useState("");
    const [phone,
        setPhone] = useState("");
    const [myEmail,
        setMyEmail] = useState("");
    const [linkedIn,
        setLinkedIn] = useState("");
    const [instagramName,
        setInstagramName] = useState("");
    const [progressTraining,
        setProgressTraining] = useState(0);
    const [progressCv,
        setProgressCv] = useState(0);
    const [progressPhoto,
        setProgressPhoto] = useState(0);
    const [message,
        setMessage] = useState("");
    const [pmessage,
        setPMessage] = useState("");
    const [pMessages,
        setPMessages] = useState([]);
    const [myPhone,
        setMyPhone] = useState([]);
    const [skills,
        setSkills] = useState([]);
    const [hobbies,
        setHobbies] = useState([]);
    const [hobby,
        setHobby] = useState("");
    const [noHobbyFound,
        setNoHobbyFound] = useState("");
    const [noSkillFound,
        setNoSkillFound] = useState("");
    const [noPMessageFound,
        setNoPMessageFound] = useState("");
    const [projects,
        setProjects] = useState([]);
    const [schools,
        setSchools] = useState([]);
    const [noProjectFound,
        setNoProjectFound] = useState("");
    const [noSchoolFound,
        setNoSchoolFound] = useState("");
    const [honor,
        setHonor] = useState("");
    const [school,
        setSchool] = useState("");
    const [course,
        setCourse] = useState("");
    const [courseLink,
        setCourseLink] = useState("");
    const [graduationYear,
        setGraduationYear] = useState("");
    const [trainings,
        setTrainings] = useState([]);
    const [tCourse,
        setTCourse] = useState("");
    const [tCompany,
        setTCompany] = useState("");
    const [tCompanyWebsite,
        setTCompanyWebsite] = useState("");
    const [certificateFile,
        setCertificateFile] = useState(null);
    const [tYear,
        setTYear] = useState("");
    const [noTrainingFound,
        setNoTrainingFound] = useState("");
    const [profiles,
        setProfiles] = useState([]);
    const [profile,
        setProfile] = useState("");
    const [profileTitle,
        setProfileTitle] = useState("");
    const [noProfileFound,
        setNoProfileFound] = useState("");
    const [profileAvailable,
        setProfileAvailable] = useState(false);
    const [phoneAvailable,
        setPhoneAvailable] = useState(false);
    const [loginStatus,
        setLoginStatus] = useState(false);
    const [adminName,
        setAdminName] = useState('');
    const [cv,
        setCv] = useState(null);
    const [cvs,
        setCvs] = useState([]);
    const [photo,
        setPhoto] = useState(null);
    const [photos,
        setPhotos] = useState([]);
    const [photoUpload,
        setPhotoUpload] = useState(false);
    const [cvUpload,
        setCvUpload] = useState(false);
    const [isCvPresent,
        setIsCvPresent] = useState(false);
    const [underconstruction,
        setUnderConstruction] = useState(false);
    const [deletingAllTrainings,
        setDeletingAllTrainings] = useState(false);
    const [deletingTraining,
        setDeletingTraining] = useState(false);

    const admin_phone_numbers = myPhone?.map((phone) => ( <p>{",(" + phone.phone + ")"}</p>))

    useEffect(() => {
        window
            .localStorage
            .setItem('underconstruction', JSON.stringify(underconstruction))
        const admindata = window
            .localStorage
            .getItem('Admin');
        if (admindata != null) 
            setAdminName(admindata);
        const logindata = window
            .localStorage
            .getItem('login')
        if (logindata != null) 
            setLoginStatus(JSON.parse(logindata));
        }
    , [adminName, loginStatus]);

    // Set under construction swith ON/OFF
    const underConstructionFunction = () => {
        setUnderConstruction(!underconstruction);
    }

    //  PHONE Submit Phone
    const formSubmitPhone = (e) => {
        e.preventDefault();
        const datax = {phone,myEmail,linkedIn,instagramName}
        if (phone === ""||myEmail === ""||linkedIn === ""||instagramName === "") {
            toast.warning("Enter complete contact details");
            return
        }
        fetch(`${process.env.REACT_APP_URL}/phone`, {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datax)
        }).then(res => {
            if(res)
            setPhone("");
            toast.success(res.data);
            window
                .location
                .reload();
        }).catch(error => {
            toast.warning("Phone number not added or call the admin on: " + admin_phone_numbers);
        });
    }

     // Update Phone
     const updatePhone = (e) => {
        e.preventDefault();
        const datax = {phone,myEmail,linkedIn,instagramName}
        if (phone === ""||myEmail === ""||linkedIn === ""||instagramName === "") {
            toast.warning("Enter complete contact details");
            return
        }
        if (window.confirm("Do you want to update your contacts?")) {
            fetch(`${process.env.REACT_APP_URL}/phone`, {
                method: 'PUT',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/Json"
                },
                body: JSON.stringify(datax)
            }).then(res => {
                if(res)
                toast.success("Admin contacts updated");
                return true;
            }).catch(err => {
                toast.warning("Contacts not updated? Call the admin on: " + admin_phone_numbers);
                toast.warning(err);
            })
        }
    }

    // Get Phone
    useEffect(() => {
       axios.get(`${process.env.REACT_APP_URL}/phone`).then((res) => {
        if (res.data.length > 0) 
        setPhoneAvailable(true);
            if (res) 
                setMyPhone(res.data);
            return
        }).catch(err => {
            toast.warning(err);
        })
    }, []);

    //  Delete Phone
    const deletePhone = ((id) => {
        if (window.confirm("Do you want to delete this item?")) {
            axios.delete(`${process.env.REACT_APP_URL}/phone/` + id).then(res => {
                if(res)
                toast.success(res.data);
                window
                    .location
                    .reload();
            }).catch(error => {
                toast.warning("Phone not deleted? Call the admin on: " + admin_phone_numbers);
            });
        }
    })

    // SKILLS Submit Skills
    const formSubmitSkill = (e) => {
        e.preventDefault();
        const datax = {skill}
        if (skill == "") {
            toast.warning("Enter a skill");
            return
        }
       fetch(`${process.env.REACT_APP_URL}/skills`, {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datax)
        }).then(res => {
            setSkill("");
            toast.success(res.data);
            window
                .location
                .reload();
        }).catch(error => {
            toast.warning("Skill not added? Call the admin on: " + admin_phone_numbers);
        });
    }

    // Get Skill
    useEffect(() => {
       axios.get(`${process.env.REACT_APP_URL}/skills`).then((res) => {
            if (res) 
                setSkills(res.data);
            return
        }).catch(err => {
            setNoSkillFound("No Skill found. Admin check if database exist or call the admin on: " + admin_phone_numbers);
        })
    }, []);

    // Delete Skill
    const deleteSkill = ((id) => {
        if (window.confirm("Do you want to delete this item?")) {
            axios.delete(`${process.env.REACT_APP_URL}/skills/` + id).then(res => {
                if(res)
                toast.success(res.data);
                window
                    .location
                    .reload();
            }).catch(error => {
                toast.warning("Skill not deleted? Call the admin on: " + admin_phone_numbers);
            });
        }
    })

    // Delete all Skills
    const deleteAllSkill = (() => {
        if (window.confirm("Do you want to delete this item?")) {
            axios.delete(`${process.env.REACT_APP_URL}/skills`).then(res => {
                if(res)
                toast.success(res.data);
                window
                    .location
                    .reload();
            }).catch(error => {
                toast.warning("All Skill not deleted? Call the admin on: "+ admin_phone_numbers);
            });
        }
    })

    // PUBLIC MESSAGES Submit Public Message
    const formSubmitPMessage = (e) => {
        e.preventDefault();
        const datax = {pmessage};
        if (pmessage == "") {
            toast.warning("Enter a message");
            return
        }
        fetch(`${process.env.REACT_APP_URL}/pmessages`, {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datax)
        }).then(res => {
            setPMessage("");
            toast.success(res.data);
            window
                .location
                .reload();
        }).catch(error => {
            toast.warning("Message not added? Call the admin on: " + admin_phone_numbers);
        });
    }

    // Get Public Message
    useEffect(() => {
        axios(`${process.env.REACT_APP_URL}/pmessages`).then((res) => {
            if (res) 
                setPMessages(res.data);
            return
        }).catch(err => {
            setNoPMessageFound("No Skill found by this time. Admin check if database exist or call the admin on: " + admin_phone_numbers);
            toast.warning(err);
        })
    }, []);

    // Delete public message
    const deletePMessage = ((id) => {
        if (window.confirm("Do you want to delete this item?")) {
            axios.delete(`${process.env.REACT_APP_URL}/pmessages/` + id).then(res => {
                if(res)
                toast.success(res.data);
                window
                    .location
                    .reload();
            }).catch(error => {
                toast.warning("Message not deleted? Call the admin on: "+ admin_phone_numbers);
            });
        }
    })

    // Delete public message
    const deleteAllPMessage = ((id) => {
        if (window.confirm("Do you want to delete this item?")) {
            axios.delete(`${process.env.REACT_APP_URL}/pmessages`).then(res => {
                if(res)
                toast.success(res.data);
                window
                    .location
                    .reload();
            }).catch(error => {
                toast.warning("All Messages not deleted? Call the admin on: "+ admin_phone_numbers);
            });
        }
    })

    // HOBBIES Submit Hobbies
    const formSubmitHobby = (e) => {
        e.preventDefault();
        const datax = {hobby}
        if (hobby == "") {
            toast.warning("Enter a hobby");
            return
        }
        fetch(`${process.env.REACT_APP_URL}/hobbies`, {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datax)
        }).then(res => {           
            setHobby("");
            if(res)
            toast.success(res.data);
            window
                .location
                .reload();
        }).catch(error => {
            toast.warning("Hobby not added? Call the admin on: "+ admin_phone_numbers);
        });
    }

    // Get Hobby
    useEffect(() => {
        axios(`${process.env.REACT_APP_URL}/hobbies`).then((res) => {
            if (res) 
                setHobbies(res.data);
            return
        }).catch(err => {
            setNoHobbyFound("No hobby found. Admin check if database exist or call the admin on: " + admin_phone_numbers);
            toast.warning(err);
        })
    }, []);

    // Delete hobby
    const deleteHobby = ((id) => {
        if (window.confirm("Do you want to delete this item?")) {
           axios(`${process.env.REACT_APP_URL}/hobbies/` + id, {method: 'DELETE'}).then(res => {
            if(res)    
            toast.success(res.data);
                window
                    .location
                    .reload();
            }).catch(error => {
                toast.warning("Hobby not deleted");
                toast.warning(error);
            });
        }
    })
    // Delete All hobbies
    const deleteAllHobby = ((id) => {
        if (window.confirm("Do you want to delete these items?")) {
            axios.delete(`${process.env.REACT_APP_URL}/hobbies`).then(res => {
                if(res)
                toast.success(res.data);
                window
                    .location
                    .reload();
            }).catch(error => {
                toast.warning("All Hobbies not deleted");
                toast.warning(error);
            });
        }
    })

    // PROFILE SUMMARY Submit Profile
    const formSubmitProfile = (e) => {
        e.preventDefault();
        const datax = {
            profileTitle,
            profile
        };  
        if (profile == "") {
            toast.warning("Enter a profile summary");
            return
        }
      fetch(`${process.env.REACT_APP_URL}/profiles`, {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datax)
        }).then(res => {
            setProfile("");
            if(res)
            toast.success(res.data);
            window
                .location
                .reload();
        }).catch(error => {
            toast.warning("Profile not added? Call the admin on: " + admin_phone_numbers);
        });
    }

    // Get Profile Summary
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/profiles`).then((res) => {
            if (res.data.length > 0) 
                setProfileAvailable(true);
                if(res)
                setProfiles(res.data);
        }).catch(err => {
            setNoProfileFound("No profile summary added. Admin check if database exist or call the admin on: "+ admin_phone_numbers);
            toast.warning(err);
        })
    }, []);

    // Update Profile
    const updateProfile = (e) => {
        e.preventDefault();
        const datax = {
            profileTitle,
            profile
        };
        if (window.confirm("Do you want to update your profile?")) {
            fetch(`${process.env.REACT_APP_URL}/profiles`, {
                method: 'PUT',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/Json"
                },
                body: JSON.stringify(datax)
            }).then(res => {
                if(res)
                toast.success("Profile summary updated");
                return true;
            }).catch(err => {
                toast.warning("Profile not updated? Call the admin on: " + admin_phone_numbers);
                toast.warning(err);
            })
        }
    }

    // Delete Profile
    const deleteProfile = ((id) => {
        if (window.confirm("Do you want to delete this item?")) {
            axios.delete(`${process.env.REACT_APP_URL}/profiles/` + id).then(res => {
                if(res)
                toast.success(res);
                window
                    .location
                    .reload();
            }).catch(error => {
                toast.warning("Profile not deleted? Call the admin on: "+ admin_phone_numbers);
                toast.warning(error);
            });
        }
    })

    // PROJECTS Submit Project
    const formSubmitProject = (e) => {
        e.preventDefault();
        const datax = {
            projectTitle,
            projectDescription,
            videoLink,
            gitHubLink,
            projectLink
        };
        if (!projectTitle || !projectDescription) {
            toast.warning('Enter a Project Title and description are compulsary fields');
            return;
        }
        fetch(`${process.env.REACT_APP_URL}/projects`, {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datax)
        }).then(res => {
            if(res)
            toast.success(res);
            setProjectLink("");
            setProjectTitle("");
            setGitHubLink("");
            setProjectDescription("");
            window
                .location
                .reload();
        }).catch(error => {
            toast.warning("Project not added? Call the admin on: "+ admin_phone_numbers);
        });
    }

    // Delete Project
    const deleteProject = ((id) => {
        if (window.confirm("Do you want to delete this item?")) {
            axios.delete(`${process.env.REACT_APP_URL}/projects/` + id).then(res => {   
                if(res)
                toast.success(res);
                window
                    .location
                    .reload();
            }).catch(error => {
                toast.warning("Project not deleted? Call the admin on: "+ admin_phone_numbers);
                toast.warning(error);
            });
        }
    })

    // Delete All Projects
    const deleteAllProject = ((id) => {
        if (window.confirm("Do you want to delete this item?")) {
            axios.delete(`${process.env.REACT_APP_URL}/projects`).then(res => {
                res(res)
                toast.success(res);
                window
                    .location
                    .reload();
            }).catch(error => {
                toast.warning("All Projects not deleted? Call the admin on: "+ admin_phone_numbers);
                toast.warning(error);
            });
        }
    })
    // Get Projects
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/projects`).then((res) => {
            if (res.data.length < 1) 
                setNoProjectFound("No project data found. Check of database exist or call the admin on: " + admin_phone_numbers);
            if (res) 
            setProjects(res.data);
            return
        }).catch(err => {
            toast.warning(err);
        })
    }, []);

    // EDUCATION Submit Schools
    const formSubmitSchool = (e) => {
        e.preventDefault();
        const datax = {
            honor,
            school,
            course,
            courseLink,
            graduationYear
        };
        if (!honor || !school || !course || !graduationYear) {
            toast.warning('Enter compulsary fields');
            return;
        }

       fetch(`${process.env.REACT_APP_URL}/schools`, {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datax)
        }).then(res => {
            if(res)
            toast.success(res);
            setHonor("");
            setSchool("");
            setCourse("");
            setCourseLink("");
            setGraduationYear("");
            
            window
                .location
                .reload();
        }).catch(error => {
            toast.warning("School not added? Call the admin on: +447751776483");
        });
    }

    //  Delete School
    const deleteSchool = ((id) => {
        if (window.confirm("Do you want to delete this item?")) {
           axios.delete(`${process.env.REACT_APP_URL}/schools/` + id, {method: 'DELETE'}).then(res => {
            if(res)    
            toast.success(res);
                window
                    .location
                    .reload();
            }).catch(error => {
                toast.warning("School not deleted? Call the admin on: " + admin_phone_numbers);
                toast.warning(error);
            });
        }
    })

    //  Delete All School
    const deleteAllSchool = ((id) => {
        if (window.confirm("Do you want to delete all these items?")) {
            axios(`${process.env.REACT_APP_URL}/schools`, {method: 'DELETE'}).then(res => {
                if(res)
                toast.success(res);
                window
                    .location
                    .reload();
            }).catch(error => {
                toast.warning("All Schools not deleted? Call the admin on: " + admin_phone_numbers);
                toast.warning(error);
            });
        }
    })

    // Get Schools
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/schools`).then((res) => {
            if (res) 
                setSchools(res.data);
            return
        }).catch(err => {
            setNoSchoolFound("No school data found. Check of database exist or call the admin on: " + admin_phone_numbers);
            toast.warning(err);
        })
    })

    //Submit Trainings
    const formSubmitTraining = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('tCourse',tCourse);
        formData.append('tCompany',tCompany);
        formData.append('tCompanyWebsite',tCompanyWebsite);
        formData.append('tYear',tYear);
        formData.append('certificateFile',certificateFile);
        if (!tCourse || !tCompany || !tYear) {
            toast.warning('Enter compulsary fields');
            return;
        }
        console.log(formData)

        axios.post(`${process.env.REACT_APP_URL}/trainings`, formData, {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress: (progressEvent) => {
                setProgressCv(Math.round(100 * progressEvent.loaded))
            }
        }).then(res => {
            setTCourse("");
            setTCompany("");
            setTCompanyWebsite("");
            setCertificateFile(null);
            setTYear("");
            if(res)
            toast.success("Trainig Added");
            window
                .location
                .reload();
        }).catch(error => {
            toast.warning("Training not Added");
            toast.warning(error);
        });
    }

    //  Delete Trainingg
    const deleteTraining = ((id) => {
        if (window.confirm("Do you want to delete this item?")) {
            setDeletingTraining(true);
            axios.delete(`${process.env.REACT_APP_URL}/trainings/` + id).then(res => {
                if(res)
                toast.success(res);
                setDeletingTraining(false);
                window
                    .location
                    .reload();
            }).catch(error => {
                setDeletingTraining(false);
                toast.warning("Training not deleted");
                toast.warning(error);
            });
        }
    })

    //  Delete All Trainingg
    const deleteAllTraining = () => {
        if (window.confirm("Do you want to delete all these item?")) {
            setDeletingAllTrainings(true);
            axios.delete(`${process.env.REACT_APP_URL}/trainings`).then(res => {
                if(res)
                toast.success(res);
                setDeletingAllTrainings(false);
                window
                    .location
                    .reload();
            }).catch(error => {
                setDeletingAllTrainings(false);
                toast.warning("All training not deleted");
                toast.warning(error);
            });
        }
    }

    // Get Training
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/trainings`).then((res) => {
            if (res) 
                setTrainings(res.data);
            return
        }).catch(err => {
            setNoTrainingFound("No training data found. Check of database exist or call the admin on: "+ admin_phone_numbers);

        })
    })

    //Get CV
    useEffect(() => {
        axios(`${process.env.REACT_APP_URL}/cvs`).then((res) => {
           if(res)
            setCvs(res.data);
            if (res.data.length > 0) 
                setIsCvPresent(true);
            }
        ).catch(err => {
            toast.warning(err);
        })
    }, []);

    //  Delete CV
    const deleteCv = ((id) => {
        if (window.confirm("Do you want to delete this item?")) {
            axios.delete(`${process.env.REACT_APP_URL}/cvs/` + id).then(res => {
                if(res)
                toast.success("CV deleted");
                setTimeout(() => {
                    window
                        .location
                        .reload();
                }, 2000);
            }).catch(error => {
                toast.warning("CV not deleted? Call the admin on: "+ admin_phone_numbers);
                toast.warning(error);
            });
        }
    })

    // Upload CV
    const formSubmitCV = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('cv', cv)

        // if(!formData.has('cv'))  return toast.warning("Attach a CV");
        setCvUpload(true);
        axios.post(`${process.env.REACT_APP_URL}/cvs`, formData, {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress: (progressEvent) => {
                setProgressCv(Math.round(100 * progressEvent.loaded))
            }
        }).then(res => {
            if(res)
            toast.success("CV Uplaoded");
            setCvUpload(false);
            setTimeout(() => {
                window
                    .location
                    .reload();
            }, 2000);
        }).catch(error => {
            toast.success("CV not Uplaoded? Call the admin on: "+ admin_phone_numbers);
            setCvUpload(false);
            toast.warning(error);
        });
    }

    //Get Photo
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/photos`).then((res) => {
            if(res)
            setPhotos(res.data);
        }).catch(err => {
            toast.warning(err);
        })
    }, []);

    // Add Photo
    const formSubmitPhoto = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('photo', photo)

        if (formData.has == null) 
            setMessage("No Photo attached");
        setPhotoUpload(true);
        axios.post(`${process.env.REACT_APP_URL}/photos`, formData, {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress: (progressEvent) => {
                setProgressPhoto(Math.round(100 * progressEvent.loaded))
            }
        }).then(res => {
            toast.success("Photo file Uplaoded successively");  
            setTimeout(() => {
                window
                    .location
                    .reload();
            }, 2000);
        }).catch(error => {
            toast.success("Photo not Uplaoded");
            toast.warning(error);
        });
    }

    //  Delete Photo
    const deletePhoto = ((id) => {
        if (window.confirm("Do you want to delete this item?")) {
            axios.delete(`${process.env.REACT_APP_URL}/photos/` + id, {method: 'DELETE'}).then(res => {
                if(res)
                toast.success("Photo deleted");
                window
                    .location
                    .reload();
            }).catch(error => {
                toast.warning("Photo not deleted? or Call the admin on: "+ admin_phone_numbers);

            });
        }
    })

    //  Delete All Photo
    const deleteAllPhoto = () => {
        if (window.confirm("Do you want to delete this item?")) {
            axios.delete(`${process.env.REACT_APP_URL}/photos`, {method: 'DELETE'}).then(res => {
                if(res)
                toast.success("All Photos deleted");
                window
                    .location
                    .reload();
            }).catch(error => {
                toast.warning("All Photos not deleted? or Call the admin on: " + admin_phone_numbers);

            });
        }
    }

    //Confirm going for page construction
    const confirmIsUnderConstruction = () => {

        if (window.confirm("Do you want to go for page maintenance?")) {
            const underConstruction = {underconstruction}

           fetch(`${process.env.REACT_APP_URL}/underconstruction`, {
                method: 'PUT',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/Json"
                },
                body: JSON.stringify(underConstruction)
            }).then(res => {
                if(res)
                toast.success("Page under construction set");
                return true;
            }).catch(err => {
                toast.warning("Page not set for under construction");
                toast.warning(err);
            })
        }
    }

    return ( <> <div class="admin_bg">
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
            theme='light'/>
        <h1 class="shadow rounded" style={{
            color: 'gold',
            margin: '100px'
        }}>Welcome {adminName}</h1>

        <div>
            <div class="register">
                <h2 class="header2">
                    <CiSettings/>Admin</h2>
                <div
                    style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '30px'
                }}>
                    <div
                        style={{
                        border: '2px solid white',
                        width: 'fit-content'
                    }}>
                        <h4><strong style={{color:'white'}}>Setting default page to 'Under Construction'?</strong></h4>
                        <strong
                            style={{
                            color: 'gold',
                            margin: '10px'
                        }}>NO</strong>
                        <label class="switch">
                            <input class="check" type="checkbox" onChange={underConstructionFunction}/>
                            <span class="slider"></span>
                        </label>
                        <strong
                            style={{
                            color: 'gold',
                            margin: '10px'
                        }}>YES</strong>
                        <div
                            style={{
                            padding: '15px'
                        }}>
                            {loginStatus && < button class = "btn btn-primary" onClick = {
                                () => confirmIsUnderConstruction()
                            } > Confirm </button>}
                            {!loginStatus && < button disabled class = "btn btn-primary" > Confirm </button>}
                        </div>

                    </div>
                </div>
                <div class="messages">
                    <Link
                        to="/Register"
                        style={{
                        textDecoration: 'none',
                        fontSize: '20px'
                    }}>
                        <button class="btn btn-primary">Become the Admin Here</button>
                    </Link>
                </div>
            </div>
        </div>

        <div class="adminMessages">
            <h2 class="header2">Received Messages</h2>
            <div
                style={{
                overflow: loginStatus
                    ? 'scroll'
                    : 'hidden',
                maxHeight: loginStatus
                    ? '400px'
                    : '300px',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Messages/>
            </div>
        </div>

        {/* Phone Section     */}
        <div class="containerAdmin">
            <h2 class="header2">Phone Section</h2>
            <hr/>

            <h5 style={{
                color: 'Black'
            }}>Avialable phone numbers</h5>
            <div class="adminSection">
                {myPhone
                    ?.map((phone) => (
                        <div>
                            {phone.phone}
                            {loginStatus && < button class = "btn btn-primary" onClick = {
                                () => deletePhone(phone.id)
                            } > DELETE </button>}
                            {!loginStatus && < button class = "btn btn-primary" disabled > DELETE </button>}
                        </div>
                    ))
}
            </div>
            <form post="" onSubmit={formSubmitPhone}>
                <div class="row addPro ">
                    <div class="col-12 addPro2">
                        <input
                            type='text'
                            name="Phone"
                            value={phone}
                            onChange=
                            {(e)=>setPhone(e.target.value)}
                            placeholder="Add Phone"/>
                        <input
                            type='text'
                            name="myEmail"
                            value={myEmail}
                            onChange=
                            {(e)=>setMyEmail(e.target.value)}
                            placeholder="Add Email"/>
                        <input
                            type='text'
                            name="linkedIn"
                            value={linkedIn}
                            onChange=
                            {(e)=>setLinkedIn(e.target.value)}
                            placeholder="Add your LinkedIn ID"/>
                        <input
                            type='text'
                            name="instagramName"
                            value={instagramName}
                            onChange=
                            {(e)=>setInstagramName(e.target.value)}
                            placeholder="Add Instagram ID"/>
                    </div>
                    <div class="col-12 addPro2">
                    {loginStatus && <div>
                        <div class="col-12 addPro2">
                            {!phoneAvailable && <button class="btn btn-primary" onClick={formSubmitPhone}>
                                Add
                            </button>}
                            {phoneAvailable && <button class="btn btn-primary" onClick={updatePhone}>
                                Update
                            </button>}
                        </div>
                    </div>
                       }
                        {!loginStatus && <button disabled class="btn btn-primary">Only Admin can edit this</button>}
                    </div>
                </div>
            </form>
        </div>

        {/* Skill Section            */}
        <div class="containerAdmin">
            <h2 class="header2">Skill Section</h2>
            <hr/>
            <h5 style={{
                color: 'Black'
            }}>Avialable Skills</h5>
            <div class="adminSection">
                {skills
                    ?.map((skill) => (
                        <div>
                            {noSkillFound || skill.skill}
                            {loginStatus && < button class = "btn btn-primary" onClick = {
                                () => deleteSkill(skill.id)
                            } > DELETE </button>}
                            {!loginStatus && <button class="btn btn-primary" disabled>
                                DELETE
                            </button>}
                        </div>
                    ))}
            </div>

            <form post="" onSubmit={formSubmitSkill}>
                <div class="row addPro ">
                    <div class="col-12 addPro2">
                        <input
                            type='text'
                            name="Skill"
                            value={skill}
                            onChange=
                            {(e)=>setSkill(e.target.value)}
                            placeholder="Add skill"/>
                    </div>
                    <div class="col-12 addPro2">
                        {loginStatus && <button class="btn btn-primary" type='submit'>Add</button>}
                        {skills.length>0 ? loginStatus && <button
                            class="btn btn-danger"
                            style={{
                            marginLeft: '10px'
                        }}
                            onClick={() => deleteAllSkill()}>Clear</button>:<button disabled class="btn btn-primary"  style={{
                                marginLeft: '10px'
                            }}>Cleer</button>}
                        {!loginStatus && <button disabled class="btn btn-primary" type='submit'>Only Admin can edit this</button>}
                    </div>
                </div>
            </form>
        </div>

        {/* Hobby Section            */}
        <div class="containerAdmin">
            <h2 class="header2">Hobby Section</h2>
            <hr/>
            <h5 style={{
                color: 'Black'
            }}>Avialable Hobbies</h5>
            <div class="adminSection">
                {hobbies
                    ?.map((hobby) => (
                        <div>
                            {noHobbyFound || hobby.hobby}
                            {loginStatus && < button class = "btn btn-primary" onClick = {
                                () => deleteHobby(hobby.id)
                            } > DELETE </button>}
                            {!loginStatus && < button class = "btn btn-primary" disabled > DELETE </button>}
                        </div>
                    ))}
            </div>

            <form onSubmit={formSubmitHobby}>
                <div class="row addPro ">
                    <div class="col-12 addPro2">
                        <input
                            type='text'
                            name="hobby"
                            value={hobby}
                            onChange=
                            {(e)=>setHobby(e.target.value)}
                            placeholder="Add hobby"/>
                    </div>
                    <div class="col-12 addPro2">
                        {loginStatus && <button class="btn btn-primary" type='submit'>Add</button>}
                        {loginStatus && <button
                            class="btn btn-danger"
                            style={{
                            marginLeft: '10px'
                        }}
                            onClick={() => deleteAllHobby()}>Clear</button>}
                        {!loginStatus && <button disabled class="btn btn-primary" type='submit'>Only Admin can edit this</button>}
                    </div>
                </div>
            </form>
        </div>

        {/* Public Message Section */}
        <div class="containerAdmin">
            <h2 class="header2">Public Message Section</h2>
            <hr/>
            <h5 style={{
                color: 'Black'
            }}>Avialable Messages</h5>
            <div class="adminSection">
                {pMessages
                    ?.map((pMessage) => (
                        <div>
                            {noPMessageFound || pMessage.pmessage}
                            {loginStatus && < button class = "btn btn-primary" onClick = {
                                () => deletePMessage(pMessage.id)
                            } > DELETE </button>}
                            {!loginStatus && < button class = "btn btn-primary" disabled > DELETE </button>}
                        </div>
                    ))}
            </div>

            <form onSubmit={formSubmitPMessage}>
                <div class="row addPro ">
                    <div class="col-12 addPro2">
                        <textarea
                            type='text'
                            name="pmessage"
                            value={pmessage}
                            style={{
                            width: '50%',
                            height: '150px',
                            marginTop: '5px'
                        }}
                            onChange=
                            {(e)=>setPMessage(e.target.value)}
                            placeholder="Add Message"/>
                    </div>
                    <div class="col-12 addPro2">
                        {loginStatus && <button class="btn btn-primary" type='submit'>Add</button>}
                        {loginStatus && <button
                            class="btn btn-danger"
                            style={{
                            marginLeft: '10px'
                        }}
                            onClick={() => deleteAllPMessage()}>Clear</button>}
                        {!loginStatus && <button disabled class="btn btn-primary" type='submit'>Only Admin can edit this</button>}
                    </div>
                </div>
            </form>
        </div>

        {/* Profile Section            */}
        <div class="containerAdmin">
            <h2 class="header2">Profile Section</h2>
            <hr/>
            <h5 style={{
                color: 'Black'
            }}>Avialable Profile</h5>
            <div class="adminSection">
                {profiles
                    ?.map((profile) => (
                        <div>
                            <h3>{profile.profiletitle}</h3>
                            {noProfileFound || profile.profile}
                            {loginStatus && < button class = "btn btn-primary" onClick = {
                                () => deleteProfile(profile.id)
                            } > DELETE </button>}
                            {!loginStatus && < button class = "btn btn-primary" disabled > DELETE </button>}
                        </div>
                    ))}
            </div>

            <form>
                <div class="row addPro ">
                    <div class="col-12 addPro2">
                        <input
                            type='text'
                            name="profileTitle"
                            required
                            value={profileTitle}
                            onChange=
                            {(e)=>setProfileTitle(e.target.value)}
                            placeholder="Profile Title"/>
                    </div>
                    <div class="col-12 addPro2">
                        <textarea
                            type='text'
                            name="profile"
                            value={profile}
                            style={{
                            width: '50%',
                            height: '150px',
                            marginTop: '5px'
                        }}
                            onChange=
                            {(e)=>setProfile(e.target.value)}
                            placeholder="Add profile summary"/>
                    </div>
                    {loginStatus && <div>
                        <div class="col-12 addPro2">
                            {!profileAvailable && <button class="btn btn-primary" onClick={formSubmitProfile}>
                                Add
                            </button>}
                        </div>
                        <div class="col-12 addPro2">
                            {profileAvailable && <button class="btn btn-primary" onClick={updateProfile}>
                                Update
                            </button>}
                        </div>
                    </div>
                       }
                    <div class="col-12 addPro2">
                        {!loginStatus && <button disabled class="btn btn-primary" type='submit'>Only Admin can edit this</button>
}
                    </div>
                </div>
            </form>
        </div>

        {/* Project Section */}
        <div class="containerAdmin">
            <h2 class="header2">Projects Section</h2>
            <hr/>
            <h5 style={{
                color: 'Black'
            }}>Avialable Projects</h5>
            <div class="adminSection">
                {projects
                    ?.map((project) => (
                        <div>
                            {noProjectFound || project["projecttitle"]}
                            {loginStatus && <button class="btn btn-primary" onClick={() => deleteProject(project.id)}>
                                DELETE
                            </button>}
                            {!loginStatus && < button class = "btn btn-primary" disabled > DELETE </button>}
                        </div>
                    ))}
            </div>

            <form post="" onSubmit={formSubmitProject}>
                <div class="row addPro ">
                    <div class="col-12 addPro2">
                        <input
                            type='text'
                            name="projectTittle"
                            required
                            value={projectTitle}
                            onChange=
                            {(e)=>setProjectTitle(e.target.value)}
                            placeholder="Tittle"/>
                    </div>
                    <div class="col-12 addPro2">
                        <textarea
                            type='text'
                            name="projectDescription"
                            required
                            value={projectDescription}
                            style={{
                            width: '50%',
                            height: '150px',
                            marginTop: '5px'
                        }}
                            onChange=
                            {(e)=>setProjectDescription(e.target.value)}
                            placeholder="Description"/>
                    </div>
                    <div class="col-12 addPro2">
                        <input
                            type='text'
                            name="videoLink"
                            value={videoLink}
                            onChange=
                            {(e)=>setVideoLink(e.target.value)}
                            placeholder="Video Link"/>
                    </div>
                    <div class="col-12 addPro2">
                        <input
                            type='text'
                            name="gitHubLink"
                            value={gitHubLink}
                            onChange=
                            {(e)=>setGitHubLink(e.target.value)}
                            placeholder="GitHub Link"/>
                    </div>
                    <div class="col-12 addPro2">
                        <input
                            type='text'
                            name="projectLink"
                            value={projectLink}
                            onChange=
                            {(e)=>setProjectLink(e.target.value)}
                            placeholder="Website Link"/>
                    </div>
                    <div class="col-12 addPro2">
                        {loginStatus && <button class="btn btn-primary" type='submit'>Add</button>}
                        {loginStatus && <button
                            class="btn btn-danger"
                            style={{
                            marginLeft: '10px'
                        }}
                            onClick={() => deleteAllProject()}>Clear</button>}
                        {!loginStatus && <button disabled class="btn btn-primary" type='submit'>Only Admin can edit this</button>}
                    </div>
                </div>
            </form>
        </div>

        {/* EDUCATION */}
        {/* Schools */}
        <div class="containerAdmin">
            <h2 class="header2">School Section</h2>
            <hr/>
            <h5 style={{
                color: 'Black'
            }}>Avialable Schools</h5>
            <div class="adminSection">

                {schools
                    ?.map((school) => (
                        <div>
                            {noSchoolFound || school.school}
                            {loginStatus && < button class = "btn btn-primary" onClick = {
                                () => deleteSchool(school.id)
                            } > DELETE </button>}
                            {!loginStatus && < button class = "btn btn-primary" disabled > DELETE </button>}
                        </div>
                    ))}
            </div>

            <form onSubmit={formSubmitSchool}>
                <div class="row addPro ">
                    <div class="col-12 addPro2">
                        <input
                            type='text'
                            name="honor"
                            required
                            value={honor}
                            onChange=
                            {(e)=>setHonor(e.target.value)}
                            placeholder="Honor"/>
                    </div>
                    <div class="col-12 addPro2">
                        <input
                            type='text'
                            name="school"
                            required
                            value={school}
                            onChange=
                            {(e)=>setSchool(e.target.value)}
                            placeholder="School Attended"/>
                    </div>
                    <div class="col-12 addPro2">
                        <input
                            type='text'
                            name="course"
                            required
                            value={course}
                            onChange=
                            {(e)=>setCourse(e.target.value)}
                            placeholder="Course"/>
                    </div>
                    <div class="col-12 addPro2">
                        <input
                            type='text'
                            name="courseLink"
                            value={courseLink}
                            onChange=
                            {(e)=>setCourseLink(e.target.value)}
                            placeholder="Curriculum Link"/>
                    </div>
                    <div class="col-12 addPro2">
                        <input
                            type='text'
                            name="graduationYear"
                            required
                            value={graduationYear}
                            onChange=
                            {(e)=>setGraduationYear(e.target.value)}
                            placeholder="Graduation Year"/>
                    </div>
                    <div class="col-12 addPro2">
                        {loginStatus && <button class="btn btn-primary" type='submit'>Add</button>}
                        {loginStatus && <button
                            class="btn btn-danger"
                            style={{
                            marginLeft: '10px'
                        }}
                            onClick={() => deleteAllSchool()}>Clear</button>}
                        {!loginStatus && <button disabled class="btn btn-primary" type='submit'>Only Admin can edit this</button>}
                    </div>
                </div>
            </form>
        </div>

        {/* Trainings */}
        <div class="containerAdmin">
            <h2 class="header2">Training Section</h2>
            <hr/>
            <h5 style={{
                color: 'Black'
            }}>Avialable Training</h5>
            <div class="adminSection">
                {trainings
                    ?.map((training) => (
                        <div>
                            {noTrainingFound || training.course}
                            {loginStatus && < button class = "btn btn-primary" onClick = {
                                () => deleteTraining(training.id)
                            } > DELETE </button>}
                            {!loginStatus && < button class = "btn btn-primary" disabled > DELETE </button>}
                        </div>
                    ))}
            </div>

            <form onSubmit={formSubmitTraining}>
                <div class="row addPro ">
                    <div class="col-12 addPro2">
                        <input
                            type='text'
                            name="tCourse"
                            required
                            value={tCourse}
                            onChange=
                            {(e)=>setTCourse(e.target.value)}
                            placeholder="Course"/>
                    </div>
                    <div class="col-12 addPro2">
                        <input
                            type='text'
                            name="tCompany"
                            required
                            value={tCompany}
                            onChange=
                            {(e)=>setTCompany(e.target.value)}
                            placeholder="Company"/>
                    </div>
                    <div class="col-12 addPro2">
                        <input
                            type='text'
                            name="tCompanyWebsite"
                            required
                            value={tCompanyWebsite}
                            onChange=
                            {(e)=>setTCompanyWebsite(e.target.value)}
                            placeholder="Company website"/>
                    </div>
                    <div class="col-12 addPro2">
                        <h6>Upload Certificate:
                        </h6><input
                            type='file'
                            name="certificateFile"
                            onChange=
                            {(e)=>setCertificateFile(e.target.files[0])}
                            placeholder="Upload certificate"/>
                    </div>
                    <div class="col-12 addPro2">
                        <input
                            type='text'
                            name="tYear"
                            value={tYear}
                            onChange=
                            {(e)=>setTYear(e.target.value)}
                            placeholder="Graduation"/>
                    </div>
                    {progressTraining && <div
                        class="progress"
                        role="progressbar"
                        aria-label="Example with label"
                        aria-valuenow={progressTraining}
                        aria-valuemin="0"
                        aria-valuemax="100">
                        <div
                            class="progress-bar overflow-visible text-dark"
                            style={{
                            width: `${progressTraining}`
                        }}>
                            <span>Uploading files...</span>
                        </div>
                    </div>}
                    <div class="col-12 addPro2">
                        {deletingAllTrainings && <div>
                            <strong>Deleteing all trainings...</strong>
                        </div>}
                        {deletingTraining && <div>
                            <strong>Deleteing training...</strong>
                        </div>}
                        {loginStatus && <button class="btn btn-primary" type='submit'>Add</button>}
                        {loginStatus && <button
                            class="btn btn-danger"
                            style={{
                            marginLeft: '10px'
                        }}
                            onClick={() => deleteAllTraining()}>Clear</button>}
                        {!loginStatus && <button disabled class="btn btn-primary" type='submit'>Only Admin can edit this</button>}
                    </div>
                </div>
            </form>

        </div>

        {/* CV Section               */}
        <div class="containerAdmin">
            <h2 class="header2">Add a CV</h2>
            <hr/>
            <h5 style={{
                color: 'Black'
            }}>Avialable CV</h5>
            <div class="adminSection">
                {cvs.map((cv) => (
                    <div>
                        <strong class="cv">{cv.cv}</strong>
                        {loginStatus && < button class = "btn btn-primary" onClick = {
                            () => deleteCv(cv.id)
                        } > DELETE </button>}
                        {!loginStatus && < button class = "btn btn-primary" disabled > DELETE </button>}
                    </div>
                ))}
            </div>
            <form post="" onSubmit={formSubmitCV}>
                <div class="row addPro ">
                    <div class="col-12 addPro2">
                        <div class="drop flex">
                            <input
                                type='file'
                                name="cv"
                                onChange=
                                {(e)=>setCv(e.target.files[0])}
                                placeholder="Upload CV"/>
                            <div>
                            {cvUpload && <ProgressBar completed={progressCv} maxCompleted={100}/>}
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
            <h5 style={{
                color: 'Black'
            }}>Avialable Photo(s)</h5>
            <div class="adminSection">
                {photos
                    ?.map((photo) => (
                        <div>
                            <strong class="cv">{photo.photo}</strong>
                            {loginStatus && < button class = "btn btn-primary" onClick = {
                                () => deletePhoto(photo.id)
                            } > DELETE </button>}
                            {!loginStatus && < button class = "btn btn-primary" disabled > DELETE </button>}
                        </div>
                    ))}
            </div>
            <form post="" onSubmit={formSubmitPhoto}>
                <div class="row addPro ">
                    <div class="col-12 addPro2">
                        <div class="drop flex">
                            <input
                                type='file'
                                name="photo"
                                onChange=
                                {(e)=>setPhoto(e.target.files[0])}
                                placeholder="Upload Picture"/> 
                                <div>
                                {photo && <ProgressBar completed={progressPhoto} maxCompleted={100}/>}
                                </div>         
                        </div>
                    </div>

                    <div class="col-12 addPro2">
                        {loginStatus && <button class="btn btn-primary" type='submit'>Upload</button>}
                        {loginStatus && <button
                            class="btn btn-danger"
                            style={{
                            marginLeft: '10px'
                        }}
                            onClick={() => deleteAllPhoto()}>Clear</button>}
                        {!loginStatus && <button disabled class="btn btn-primary" type='submit'>Only Admin can edit this</button>}
                    </div>
                </div>
            </form>
        </div>
    </div> </>
          )
}