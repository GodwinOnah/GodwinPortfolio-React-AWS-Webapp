import {toast, ToastContainer} from "react-toastify";

export const Poster = ({title, data, setter}) => {

    fetch(`${process.env.REACT_APP_URL}/` + title + "\'", {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => {
        return res.json();
    }).then(data => {
        setter
            ?.map((varx) => {
                varx("");
            })
        toast.success(data);
        window
            .location
            .reload();
    }).catch(error => {
        toast.warning({title} + " not added");
        toast.warning(error);
    });
}
