import axios from 'axios';
import React,{useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import '../../Contents/CSSFiles/Admin.css'; 
import {useState, useEffect} from 'react';
import { toast,ToastContainer } from "react-toastify";

export const AboutMe=()=>{

const [clothName,setClothName] = useState("");
const [clothPrice,setClothPrice] = useState("");
const [clothPicture,setClothPicture] = useState("");
const [clothPictureIdData,setClothPictureIdData] = useState(null);
const [userX,setUserX] = useState([]);
const [progress,setProgress] = useState({started:false, pc:0});
const [message,setMessage] = useState("");
const thisFormData = new FormData();


useEffect(()=>{
  fetch('https://obandeclothapp-60d299435905.herokuapp.com/userx').then(res =>{
    if(res) setUserX(res.data); 
    return;
})
},[]);

const userY = () =>{
  return (
    <table class="table table-hover">
    <thead>
         <tr>
         <th>USER/ID</th>
         <th>FIRST NAME</th>
         <th>LAST NAME</th>
         <th>EMAIL</th>
         <th>ADDRESS</th>
         <th>PHONE NUMBER</th>
         </tr>
       </thead>
       <tbody> 
             {
             userX?.map((user,index)=>(
               <tr key = {index}>              
               <th >{index+1}</th>
               <td>{user.firstname}</td>
               <td>{user.lastname}</td>
               <td>{user.email}</td>
               <td>{user.address}</td>
               <td>{user.phone}</td>              
               </tr>  
            ))
            }           
            </tbody>
           </table>  
  )}

  const uploadFile = (e) =>{  
    if(e.target.files.length>0){ 
      setClothPicture(e.target.value);     
      const file = e.target.files[0];
      setClothPictureIdData(file); 
      thisFormData.append('file',file);
}}

   const formSubmit= (e) => {
    e.preventDefault();
    const datax = {clothName,clothPicture,clothPrice};

    if(thisFormData == null) setMessage("No File attached");

fetch('https://obandeclothapp-60d299435905.herokuapp.com/clothings',
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
                    setClothName("");
                    setClothPrice("");
                    setClothPicture("");
                    toast.success(res);
                               }).catch(error=>{
                                   toast.warning("Image details not uploaded");
                                             });

    // setMessage("Uploading image file...");
    //   setProgress(prevState=>{
    //     return {...prevState, started: true}
    //   });

    //   axios.post(`http://https://obandeclothapp-60d299435905.herokuapp.com:8080/api/clothings/${clothId}/images/uploads`,
    //   thisFormData,
    //         {
    //           onUploadProgress : (progressEvent) => {
    //             setProgress(prevState=>{
    //               return {...prevState, pc: progressEvent.progress*100}
    //             })
    //               },
    //           method: 'POST',
    //           headers:{              
    //           "Access-Control-Allow-Origin":"*",
    //           "Content-Type": "multipart/form-data"
    //         }
    //       }
    //       ).then(res=>{
    //         setMessage("Image file Uplaoded");
    //         toast.success(res);
    //       }).catch(error=>{
    //         setMessage("File upload failed");
    //         toast.warning(error);
    //       }); 
  }

        function Dropzone({clothId}) {
            const onDrop = useCallback(acceptedFiles => {
              const file = acceptedFiles[0];
    
              const formDataDropZone = new FormData();
              formDataDropZone.append("file",file);
              setClothPictureIdData(formDataDropZone);
              console.log(formDataDropZone.file);
            },[]);
  
            const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
          
            return (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
                }
              </div>
            )
          };

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
              <h3>Registered Customers</h3>
              <hr/>
              <div class="listOfCustomers" >
               {userY()}
              </div>
              </div>
      
              <h3>Add New Product</h3>
              <hr/>
              <div class="container">
                <form  post ="" onSubmit={formSubmit}>
                <div class="row addPro ">
                  <div  class="col-12 addPro2">
                      <input type='text' name="clothName" 
                     value={clothName}
                     onChange = {(e)=>setClothName(e.target.value)}
                     placeholder="Cloth Name" />
                  </div>
                  <div class="col-12 addPro2">
                      <input type='text' name="clothPrice" 
                      value={clothPrice}
                      onChange = {(e)=>setClothPrice(e.target.value)}
                      placeholder="Price" />
                   </div>
                   <div class="col-12 addPro2">
                      <div class="drop">
                      <Dropzone/>
                      <input type='file' name="clothPictureId"
                       value={clothPicture}
                       onChange = {uploadFile}
                       placeholder="Upload Picture" />
                       <div>{progress.started && <progress max="100" value={progress.pc}></progress>}</div>
                    <div>{message && <span>{message}</span>}</div>
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