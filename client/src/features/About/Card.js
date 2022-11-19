import React from 'react';
import "./about.css";

const Card = (props) => {
 return (
   <div className="aboutCard col-md-3 col-12">
     <div className="card-content">
       <div className="card-body">
         {" "}
         <img className="aboutImg" src={props.img} alt={props.img} />
         <div className="shadow"></div>
         <div className="aboutCard-title">{props.title}</div>
         <div className="card-subtitle">
           <p>
             {" "}
             <small className="text-muted">{props.description}</small>{" "}
           </p>
         </div>
       </div>
     </div>
   </div>
 );
}

export default Card;