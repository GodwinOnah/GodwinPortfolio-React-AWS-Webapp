import {useState, useEffect} from 'react';
import React from 'react';
import '../../../Contents/CSSFiles/messages.css';
import {toast} from "react-toastify";
import {ViewMessage} from '../Home/ViewMessages';
import axios from 'axios';

export const Messages = () => {
    const [messages,
        setMessages] = useState([]);
    const [noMessageFound,
        setNoMessageFound] = useState("");
    const [loginStatus,
        setLoginStatus] = useState(false);

    useEffect(() => {
        const data = window
            .localStorage
            .getItem('login')
        if (data != null) 
            setLoginStatus(JSON.parse(data));
        axios(`${process.env.REACT_APP_URL}/messages`).then((res) => {
            if (res) 
                setMessages(res.data);
                // return
            }
        ).catch(err => {
            setNoMessageFound("No message received at the moment. Admin check if database exist");
        })
    }, []);

    // Delete a Message
    const deleteMessage = ((id) => {
        if (window.confirm("Do you want to delete this item?")) {
            axios(`${process.env.REACT_APP_URL}/messages/` + id, {method: 'DELETE'}).then(res => {
                if(res)
                toast.success(res.data);
                window
                    .location
                    .reload();
            }).catch(error => {
                toast.warning("Message not deleted");
            });
        }
    })

    // Delete all Messages
    const deleteAllMessages = () => {
        if (window.confirm("Do you want to delete this item?")) {
            axios(`${process.env.REACT_APP_URL}/messages`, {method: 'DELETE'}).then(res => {
                if(res)
                toast.success(res.data);
                window
                    .location
                    .reload();
            }).catch(error => {
                toast.warning("All Messages not deleted");
            });
        }
    }

    return (
        <div class="listOfCustomers">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>COMPANY</th>
                        <th>MESSAGE</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class="messageTBody">
                    {noMessageFound || messages
                        ?.map((message, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{message.name}</td>
                                {loginStatus && <td>{message.email}</td>}
                                {!loginStatus && <td>
                                    <strong
                                        style={{
                                        color: 'red'
                                    }}>Hidden</strong>
                                </td>}
                                {loginStatus && <td>{message.phone}</td>}
                                {!loginStatus && <td>
                                    <strong
                                        style={{
                                        color: 'red'
                                    }}>Hidden</strong>
                                </td>}
                                <td>{message.companyname}</td>
                                <td>
                                    <div class="mess1">
                                        <div class="mess2">
                                            {message.message}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex">
                                        <strong class="viewMessageBtn">
                                            <ViewMessage
                                                name={message.name}
                                                email={message.email}
                                                phone={message.phone}
                                                companyname={message.companyname}
                                                subject={message.subject}
                                                message={message.message}/>
                                        </strong>
                                        {loginStatus && <button class="btn btn-danger" onClick={() => deleteMessage(message.id)}>
                                            <strong
                                                style={{
                                                color: 'gold'
                                            }}
                                                class="deleteMessageBtn"
                                                title='Delete'>
                                                X
                                            </strong>
                                        </button>
}
                                        {!loginStatus && <button
                                            class="btn btn-danger"
                                            disabled
                                            onClick={() => deleteMessage(message.id)}>
                                            <strong
                                                style={{
                                                color: 'gold'
                                            }}
                                                class="deleteMessageBtn"
                                                title='Delete'>
                                                X
                                            </strong>
                                        </button>
}
                                    </div>
                                </td>
                            </tr>

                        ))
}
                    {!loginStatus &&< p style = {{color:'white',textAlign:'center'}} > Scrolling Disabled </p>}
                </tbody>
            </table>

            {loginStatus && <button class="btn btn-danger" onClick={() => deleteAllMessages()}>
                Clear Messages
            </button>
}

        </div>
    )
}
