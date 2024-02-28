import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import '../../../Contents/CSSFiles/Login.css';
import {useState, useEffect} from 'react';
import {toast, ToastContainer} from "react-toastify";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Typical from 'react-typical';

export const ContactMe = () => {
    const form = useRef();
    const [name,
        SetName] = useState("");
    const [email,
        SetEmail] = useState("");
    const [subject,
        SetSubject] = useState("");
    const [message,
        SetMessage] = useState("");
    const [myPhone,
        setMyPhone] = useState([]);
    const [companyName,
        SetCompanyName] = useState('');
    const [sending,
        SetSending] = useState(false)
    const [send,
        SetSend] = useState(false)
    const [data,
        SetData] = useState({});
    const [show,
        setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const myPhoneNumber = "(+447751776483)";

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/phone`).then((res) => {
            return res.json();
        }).then((data) => {
            if (data) 
                setMyPhone(data);
            return
        }).catch(err => {
            console.log(err);
        })
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        const datax = {
            name,
            email,
            companyName,
            subject,
            message
        };
        if (datax == null) {
            toast.warning("Add a message");
            return;
        }
        if (!name || !email || !companyName || !subject || !message) {
            toast.warning("Enter all fields");
            return;
        }
        SetSending(true);

        (() => {
            emailjs.init("4GGWAs8YmyTJJ--jF")
        })(); //Function call

        //  Send message to email
        emailjs
            .sendForm('service_9n124vv', 'template_pmpo23n', form.current)
            .then((res) => {
                SetSending(false);
                SetName("");
                SetEmail("");
                SetMessage("");
                SetCompanyName("");
                SetSubject("");
                SetSend(true);
                setTimeout(() => {
                    handleClose();
                    SetSend(false);
                }, 2000);
                window
                    .location
                    .reload();
            }, (error) => {
                toast.success(error);
            });

        //  Send message to database
        fetch(`${process.env.REACT_APP_URL}/messages`, {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datax)
        }).then(res => {
            return res.text();
        }).then(res => {
            window
                .location
                .reload();
        })
    }
    return (
        <div style={{
            cursor: "pointer"
        }}>
            <a onClick={handleShow}>
                Contact Me
            </a>

            <Modal show={show} onHide={handleClose} size="">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div class="d-flex">
                            😎..
                            <Typical
                                steps={[
                                "Hey!!",
                                1000,
                                'I\'m patiently waiting for your message',
                                3500,
                                'I am passionate about what I do',
                                5000,
                                'I love to save cost',
                                6500
                            ]}
                                loop={Infinity}
                                wrapper="p"/>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <form ref={form} onSubmit={sendEmail}>
                    <Modal.Body>
                        <div class="">
                            <ToastContainer
                                position='top-right'
                                autoClose={4000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme='light'/>
                            <div class="shadow rounded" style={{backgroundColor:'skyblue'}}>
                                <table class="table">
                                    <tr>
                                        <td>
                                            <label class="shadow rounded" for="name">Name
                                            </label>
                                        </td>
                                        <td>
                                            <input
                                            class="shadow rounded"
                                                name="name"
                                                value={name}
                                                onChange=
                                                {e=>SetName(e.target.value)}
                                                type='text'/>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="shadow rounded" for="email">Email
                                            </label>
                                        </td>
                                        <td>
                                            <input
                                            class="shadow rounded"
                                                name="senderEmail"
                                                value={email}
                                                onChange=
                                                {e=>SetEmail(e.target.value)}
                                                type='email'/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="shadow rounded" for="companyName">Company
                                            </label>
                                        </td>
                                        <td>
                                            <input
                                                name="companyName"
                                                value={companyName}
                                                onChange=
                                                {e=>SetCompanyName(e.target.value)}
                                                type='text'/>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <label class="shadow rounded" for="subject">Subject
                                            </label>
                                        </td>
                                        <td>
                                            <input
                                            class="shadow rounded"
                                                value={subject}
                                                name="subject"
                                                onChange=
                                                {e=>SetSubject(e.target.value)}
                                                type='text'/>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <label class="shadow rounded" for="text">Message
                                            </label>
                                        </td>
                                        <td>
                                            <textarea
                                            class="shadow rounded"
                                                name="text"
                                                style={{
                                                width: '100%',
                                                height: '150px',
                                                marginTop: '5px'
                                            }}
                                                value={message}
                                                onChange=
                                                {e=>SetMessage(e.target.value)}
                                                type='text'/>

                                        </td>
                                    </tr>
                                </table>
                                <div >
                                    <div class="">
                                        {sending && <strong
                                            style={{
                                            color: 'red'
                                        }}>Sending message...</strong>}
                                        {send && <strong
                                            style={{
                                            color: 'green'
                                        }}>Message Sent</strong>}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </Modal.Body>
                    <div
                        style={{
                        textAlign: 'center',
                        color: 'blue',
                        fontWeight: 'bolder'
                    }}>
                        <marquee scrollamount="2">
                            <div class="d-flex">
                                <strong>Phone(s):</strong>
                                {myPhoneNumber}
                                {myPhone
                                    ?.map((phone) => (
                                        <p>{",(" + phone.phone + ")"}</p>
                                    ))
}
                            </div>
                        </marquee>
                    </div>
                    <Modal.Footer>
                        <Button class="shadow rounded" variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button class="shadow rounded" type="submit" variant="primary">
                            Send
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
}
