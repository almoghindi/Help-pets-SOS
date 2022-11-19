import React, { useState } from 'react';
import { Link } from "react-router-dom";
import BootstrapModal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Modal = (props) => {
 const [show, setShow] = useState(props.show);

 return (
   <BootstrapModal
     show={show}
     onHide={() => setShow(false)}
     variant={props.variant}
   >
     <BootstrapModal.Header closeButton>
       <BootstrapModal.Title>{props.title}</BootstrapModal.Title>
     </BootstrapModal.Header>
     <BootstrapModal.Body>{props.body}</BootstrapModal.Body>
     <BootstrapModal.Footer>
       <Link to={props.secondLink}>
         <Button variant="secondary" onClick={() => setShow(false)}>
           {props.btnSecondLink || "Close"}
         </Button>
       </Link>
       <Link to={props.link}>
         <Button variant="primary" onClick={() => setShow(false)}>
           {props.btnLink}
         </Button>
       </Link>
     </BootstrapModal.Footer>
   </BootstrapModal>
 );
}

export default Modal;