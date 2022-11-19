import React, { useState, useContext } from "react";
import "./Auth.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { signInWithGooglePopup } from "../../../utils/firebase";
import { useHttpClient } from "../../../hooks/http-hook";
import { useForm } from "../../../hooks/form-hook";
import { AuthContext } from "../../../context/auth-context";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../components/UIElements/LoadingSpinner";
import Form from "./Form";

const Auth = (props) => {
  const auth = useContext(AuthContext);
  const { isLoading, sendRequest } = useHttpClient();
  const [loginMode, setLoginMode] = useState(true);
  const [err, setErr] = useState("");
  let navigate = useNavigate();

  const [formState, inputHandler, setFormData] = useForm(
      {
        email: {
          value: "",
          isValid: false,
        },
        password: {
          value: "",
          isValid: false,
        },
      },
      false
  );
  
  let inputs = [];
  if (loginMode) {
    inputs = props.login;
  } else {
    inputs = props.signup;
  }

  const handleAuth = async (url, body, errText) => {
    try {
      const responseData = await sendRequest(
        url,
        "POST",
        JSON.stringify(body),
        {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }
      );
      auth.login(responseData.userId, responseData.token);
      navigate("/", { replace: true });
    } catch (err) {
      setErr(errText);
    }
  };

  const handleGoogle = async () => {
    const response = await signInWithGooglePopup();
    handleAuth(
      `${process.env.REACT_APP_BACKEND_URL}/users/googleLogin`,
      {
        email: response.user.email,
        name: response.user.displayName,
      },
      "Cant login, please try again"
    );
  }
  
  const switchModeHandler = () => {
    if (!loginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          phone: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    }
    else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
          phone: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setLoginMode((prevMode) => !prevMode);
    setErr("");
  };



  const authSubmitHandler = async (event) => {
    event.preventDefault();
      try {
        const formData = {};
        Object.keys(formState.inputs).forEach((key) => {
          if (formState.inputs[key] !== undefined) {
           formData[key] = formState.inputs[key].value;
          }
        });
        handleAuth(
            `${process.env.REACT_APP_BACKEND_URL}/users/${loginMode ? "login" : "signup"}`,
            formData,
            `Cant ${loginMode ? "login" : "signup"}, please try again`
        );
      } catch (err) {
        setErr(`Cant ${loginMode ? "login" : "signup"}, please try again`);
    }
    
  } 

    return (
      <>
        <div className="AuthFormContainer">
          {isLoading && <LoadingSpinner asOverlay />}
          <Form
            loginMode={loginMode}
            authSubmitHandler={authSubmitHandler}
            switchModeHandler={switchModeHandler}
            inputs={inputs}
            inputHandler={inputHandler}
            err={err}
            isValid={formState.isValid}
            handleGoogle={handleGoogle}
          />
        </div>
      </>
    );
  } 

export default Auth;
