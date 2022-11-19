import React from "react";

import "../ForgetPassword/ForgetPassword.css";
import { VALIDATOR_REQUIRE } from "../../../utils/validators";
import Button from "../../../components/UIElements/Button";
import Input from "../../../components/FormElements/Input";
import Template from "../ForgetPassword/Template";


export default function Form(props) {
 return (
          <Template>
             <form onSubmit={props.submit}>
               <div
                 className="alert alert-success bg-soft-primary border-0"
                 role="alert"
               >
                 Enter the new password and confirmation.
               </div>
               <div className="form-group">
                 <Input
                   id="password"
                   type="password"
                   className="form-control mt-1"
                   placeholder="Enter Password"
                   onInput={props.inputHandler}
                   element="input"
                   validators={[VALIDATOR_REQUIRE()]}
                   errorText="Please enter a valid password"
                   label="Enter password"
                 />
                 <Input
                   id="confirmPassword"
                   type="password"
                   className="form-control mt-1"
                   placeholder="Enter Password"
                   onInput={props.inputHandler}
                   element="input"
                   validators={[VALIDATOR_REQUIRE()]}
                   errorText="Please confirm your password"
                   label="Enter confirm password"
                 />
               </div>
               <div className="form-group">
                 <Button
                   type="submit"
                   disabled={!props.isValid}
                   className="btn btnPrimary"
                 >
                   Reset Password
                 </Button>
               </div>
             </form>
           </Template>
 );
}