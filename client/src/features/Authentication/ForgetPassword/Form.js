import React from "react";
import "./ForgetPassword.css";
import { Link } from "react-router-dom";
import { VALIDATOR_REQUIRE } from "../../../utils/validators";
import Button from "../../../components/UIElements/Button";
import Input from "../../../components/FormElements/Input";
import Template from "./Template";

export default function Form(props){
  return (
    <Template>
      <form onSubmit={props.submit}>
        <div
          className="alert alert-success bg-soft-primary border-0"
          role="alert"
        >
          Enter your email address and we'll send you an email with link to
          reset your password, Check your spam category for Reset password link.
        </div>
        <div className="form-group">
          <Input
            id="email"
            type="email"
            className="form-control mt-1"
            placeholder="Email Address"
            onInput={props.inputHandler}
            element="input"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid Email"
            label="Enter Email"
          />
        </div>
        <p style={{ color: props.color }}>{props.message}</p>
        <div className="form-group">
          <Button
            type="submit"
            disabled={!props.isValid}
            className="btn btnPrimary"
          >
            Reset Password
          </Button>
        </div>
        <div className="form-group other_auth_links">
          <Link to="/auth">
            <span className="">Login</span>
          </Link>
          <Link to="/auth">
            <span className="">Register</span>
          </Link>
        </div>
      </form>
    </Template>
  );
}