import React from 'react';
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function NavigationBarLink(props) {
 return (
   <Nav.Link className="m-4">
     <Link to={props.link}>

       <i
         className={`fa-solid fa-${props.icon}`}
         style={{
           letterSpacing: "1px",
         }}
       >
         {" " + props.title}
       </i>
      </Link>
     </Nav.Link>
 );
}