import React, { useState } from "react";
import "./ForgetPassword.css";
import { useHttpClient } from "../../../hooks/http-hook";
import { useForm } from "../../../hooks/form-hook";
import Form from "./Form";

const ForgetPassword = () => {
  const { sendRequest } = useHttpClient();
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("green");

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      }
    },
    false
  );

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users/forgetPassword`,
        "POST",
        JSON.stringify({
          email: formState.inputs.email.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      if (response.error) {
        setMessage(response.error);
        setMessageColor("red");
      }
      if(response.message) {
        setMessage(response.message);
        setMessageColor("green");
      }
    } catch (err) {}
  };

  return (
    <>
      <Form
        submit={submitHandler}
        inputHandler={inputHandler}
        isValid={formState.isValid}
        message={message}
        color={messageColor}
      />
    </>
  );
};

export default ForgetPassword;;