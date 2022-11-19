import React, { useState, useEffect } from "react";
import "../ForgetPassword/ForgetPassword.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useHttpClient } from "../../../hooks/http-hook";
import { useForm } from "../../../hooks/form-hook";
import Modal from "../../../components/UIElements/Modal";

import Form from "./Form";

const ResetPassword = () => {
  const { sendRequest } = useHttpClient();
  const [isModalShown, setIsModalShown] = useState(false);
  const [token, setToken] = useState("");
  const userId = useParams().userId;

  let navigate = useNavigate();

  const [formState, inputHandler] = useForm(
    {
      password: {
        value: "",
        isValid: false,
      },
      confirmPassword: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    const isValidCheck = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/checkResetLink`,
          "POST",
          JSON.stringify({
            userId: userId,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        setToken(responseData);
      } catch (err) {}
    };
    isValidCheck();
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (
      formState.inputs.password.value === formState.inputs.confirmPassword.value
    ) {
      try {
        await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/${userId}/${token.token}`,
          "PUT",
          JSON.stringify({
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );
      } catch (err) { }
      setIsModalShown(true);
      // navigate("/auth", { replace: true });
    }

}
    



  if (token.isValid) {
    return (
      <>
        {isModalShown && (
          <Modal
            variant="success"
            show={true}
            title="Update"
            time="Now"
            body="Your password reset successfully"
            link="/auth"
            btnLink="Login Now!"
            secondLink="/"
            btnSecondLink="Back Home"
          />
        )}

        <Form
          submit={submitHandler}
          inputHandler={inputHandler}
          isValid={formState.isValid}
        />
      </>
    );
  }
  else {
    return (
      <div style={{textAlign: "center", marginTop:"17rem"}}>
        <h1>Invalid Link !</h1>
        <h2>Please try again</h2>
        <Link to="/">
          <p style={{textDecoration:"underline"}}>Back Home</p>
        </Link>
      </div>
    );
  }
  
};

export default ResetPassword;
