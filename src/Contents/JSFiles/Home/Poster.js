import {toast, ToastContainer} from "react-toastify";
import axios from 'axios';

export const Poster = ({title, data, setter,timer}) => {

 axios(`${process.env.REACT_APP_URL}/` + title + "\'", {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => {
        if(res)
        toast.success(res.data);
        setter
            ?.map((varx) => {
                varx("");
            })
        setTimeout(() => {
            window
                .location
                .reload();
        }, timer);
    }).catch(error => {
        toast.warning({title} + " not added");
        toast.warning(error);
    });
}
