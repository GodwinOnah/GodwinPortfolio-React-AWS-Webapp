import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../CSSFiles/Views.css'


export const View= ({image,what}) =>{

    const string1 = image.split('.');
    const string2 = string1[string1.length-1] 
    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
    return (
        <div style={{cursor:"pointer"}}>
         
          <a href="#" onClick={handleShow}>
            {what}
          </a>  
          <Modal show={show} onHide={handleClose} size="xl">
            <Modal.Header>
              <Modal.Title><strong style={{fontSize:'20px',color:'blue',fontFamily:'-moz-initial'}}>
                {image.split(".")[0].split("-").join(" ").split("_").join(" ")}
                </strong>
                </Modal.Title>
            </Modal.Header>   
            <Modal.Body>
            <div class="modal1">
              {string2=="pdf" ?  
                (<div>
                    <iframe src={image} alt="" style={{width:'100%',height:'500px'}}></iframe>
                </div>) :
                (<div>
                    <img src={image} alt="" style={{width:'100%',height:'500px'}}/>
                </div>)
                }
        </div>
              </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary">
              <a href={image} download={image} style={{textDecoration: 'none',color:'white' }}>Download</a>
                </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );

}