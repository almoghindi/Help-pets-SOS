import React from 'react';
import "./ForgetPassword.css";
import logo from "../../../assets/logo.png";

export default function Template(props) {
 return (
   <div className="auth_class">
     <div className="container login-container">
       <div className="row">
         <div className="col-md-6 welcome_auth">
           <div className="auth_welcome">
             Let's be a part from the biggest pets community{" "}
             <span>
               <a href="/">"Help pets S.O.S."</a>
             </span>
           </div>
         </div>
         <div className="col-md-6 login-form">
           <div className="login_form_in">
             <div className="auth_branding">
               <a className="auth_branding_in" href="/">
                 <img src={logo} alt="Help pets SOS" />
               </a>
             </div>
             <h1 className="auth_title text-left">Password Reset</h1>
             {props.children}
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}