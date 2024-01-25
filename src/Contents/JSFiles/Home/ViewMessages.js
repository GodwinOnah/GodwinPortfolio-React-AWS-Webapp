import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';

export const ViewMessage = ({name,email,phone,companyname,subject,message}) =>{

    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

      return(
        <div style={{cursor:"pointer"}}>      
        <button href="#" onClick={handleShow}>
          View
        </button>  
        <Modal show={show} onHide={handleClose} size="xl">
          <Modal.Header>
            <Modal.Title>Message from {name}</Modal.Title>
          </Modal.Header>   
          <Modal.Body>
          <div class="card ">
          <div class="title">
          <h5><strong>{subject}</strong></h5> 
          </div>      
        <div class="card-body">        
        <strong>{message}</strong>
        </div>
        <div class="flex justify-content-left">
          <div>Sent by: {name}</div>
          <div>Phone Number: {phone}</div>
          <div>Sent from : {email}</div>
          <div>Company: {companyname}</div>
        </div>
       </div> 
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
)}