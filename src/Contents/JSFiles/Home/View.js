import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../CSSFiles/Views.css'


export const View= ({item,what}) =>{

    const string1 = item.split('.');
    const string2 = string1[string1.length-1] 
    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    return (
        <div style={{cursor:"pointer"}}>
         
          <a  onClick={handleShow}>
            {what}
          </a>  
          <Modal show={show} onHide={handleClose} size="xl">
            <Modal.Header>
              <Modal.Title><strong style={{fontSize:'20px',color:'blue',fontFamily:'-moz-initial'}}>
                {item
                .split(".")[0]
                .split("-")
                .join(" ")
                .split("_")
                .join(" ")
                .replace(/\d+/g,"")
                .replace("http://localhost:/certificates/","")
                .replace("http://localhost:/CV images/","")
                .replace("http://localhost:/photo images/","")
                .replace("()","")       
                }
                </strong>
                </Modal.Title>
            </Modal.Header>   
            <Modal.Body>
            <div class="modal1">
              {string2=="pdf"||"docx" ?  
                (<div>
                    <iframe src={item} alt="" style={{width:'100%',height:'500px'}} title="frame1"></iframe>
                </div>) :
                (<div>
                    <img src={item} alt="" style={{width:'100%',height:'500px'}}/>
                </div>)
                }
        </div>
              </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );

}