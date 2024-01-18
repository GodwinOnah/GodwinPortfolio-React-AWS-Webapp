import { toast,ToastContainer } from "react-toastify";


export const  Poster = ({title,data,url,setter}) =>{

    fetch("\'"+url+"/"+title+"\'",
    {  
      method:'POST', 
      headers:{
      "Access-Control-Allow-Origin":"*",
      "Content-Type": "application/json"
             },
      body: JSON.stringify(data)
    }
      ).then(res =>{
            return res.json();      
        })
      .then(data=>{
        setter?.map((varx)=>{
            varx("");
        })
            toast.success(data);
      })
      .catch(error=>{
            toast.warning({title}+" not added");
            console.log(error);
        });
  }
