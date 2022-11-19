import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../../context/auth-context";
import { useHttpClient } from "../../hooks/http-hook";
import Input from "../../components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../utils/validators";


import "./profile.css";

const Form = (props) => {
 const auth = useContext(AuthContext);
 const userId = auth.userId;
 const [user, setUser] = useState();
 const { sendRequest } = useHttpClient();

  
  
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/${userId}`
        );
        setUser(responseData.user);
      } catch (err) {}
    };
    fetchUser();
  }, []);
  
 return (
   <div className="container rounded bg-white mt-5 mb-5">
     <div className="row">
       <div className="col-md-3 border-right">
         <div className="d-flex flex-column align-items-center text-center p-3 py-5">
           <img
             alt=""
             className="rounded-circle mt-5"
             width="150px"
             src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
           />
           <span className="font-weight-bold">{user && user.name}</span>
           <span className="text-black-50">{user && user.email}</span>
           <span> </span>
         </div>
       </div>
       <div className="col-md-8 border-right">
         <form className="p-3 py-5" onSubmit={props.submitProfileHandler}>
           <div className="d-flex justify-content-between align-items-center mb-3">
             <h4 className="text-right">Profile Settings</h4>
           </div>
           <div className="row mt-3">
             {props.inputs &&
               user &&
               props.inputs.map((input) => {
                 return (
                   <div className="col-md-12" key={input}>
                    
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
                       label={`${input.toUpperCase()}`}
                     />
                   </div>
                 );
               })}
           </div>
          
           <div className="mt-5 text-center">
             <button
               className="btn btn-primary profile-button"
               type="submit"
               disabled={!props.isValid}
             >
               Save Profile
             </button>
           </div>
         </form>
       </div>
     </div>
   </div>
 );
}

export default Form;