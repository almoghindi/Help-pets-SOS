import React from 'react';
import { Link } from "react-router-dom";
import { VALIDATOR_REQUIRE } from "../../../utils/validators";
import Button from "../../../components/UIElements/Button";
import BootstrapButton from "react-bootstrap/Button";
import Input from "../../../components/FormElements/Input";

export default function Form(props) {
 return (
   <form className="AuthForm" onSubmit={props.authSubmitHandler} id="form">
     <div className="AuthFormContent">
       <h3 className="AuthFormTitle">
         {props.loginMode ? "Login" : "Sign up"}
       </h3>
       <div className="text-center" style={{ color: "cornsilk" }}>
         {props.loginMode ? "Not registered yet?" : "Already have an account ?"}{" "}
         <span
           onClick={props.switchModeHandler}
           type="reset"
           style={{ color: "#FED550" }}
         >
           {props.loginMode ? "Sign up" : "Login"}
         </span>
         {props.loginMode ? (
           ""
         ) : (
           <p style={{ fontSize: "12px"}}>Password must have 1 uppercase, lowercase and symbol</p>
         )}
       </div>
       {props.inputs &&
         props.inputs.map((input) => (
           <div className="form-group mt-3" key={input}>
             <Input
               id={input}
               key={input}
               type={input}
               className="form-control mt-1"
               placeholder={`Enter ${input}`}
               onInput={props.inputHandler}
               element="input"
               validators={[VALIDATOR_REQUIRE()]}
               errorText={`Please enter a valid ${input}`}
               label={`Enter ${input}`}
             />
           </div>
         ))}

       <p style={{ color: "red" }}>{props.err}</p>
       <div className="d-grid gap-2 mt-3">
         <Button
           type="submit"
           disabled={!props.isValid}
           className="btn btnPrimary"
         >
           {props.loginMode ? "Login" : "Sign up"}
         </Button>
       </div>
       {props.loginMode ? (
         <>
           <div className="d-grid gap-2">
             <BootstrapButton
               className="align"
               variant="light"
               onClick={props.handleGoogle}
             >
               <i className="fa-brands fa-google"></i> Sign with Google
             </BootstrapButton>
           </div>
           <p className="text-center mt-2" style={{ color: "cornsilk" }}>
             Forgot{" "}
             <Link to="/forgetpassword">
               <span className="pass" style={{ color: "#FED550" }}>
                 password?
               </span>
             </Link>
           </p>
         </>
       ) : null}
     </div>
   </form>
 );
}