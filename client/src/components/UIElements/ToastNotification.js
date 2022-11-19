import React from 'react';
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const ToastNotification = (props) => {
 return (
   <ToastContainer position="top-end" className="p-3">
     <Toast
       onClose={props.onClose}
       show={props.show}
       delay={3000}
       autohide
       bg={props.bg}
     >
       <Toast.Header>
         <img src={props.img} className="rounded me-2" alt="" />
         <strong className="me-auto">{props.title}</strong>
         <small>{props.time}</small>
       </Toast.Header>
    <Toast.Body variant={props.bg}>{props.description}</Toast.Body>
     </Toast>{" "}
   </ToastContainer>
 );
}

export default ToastNotification;