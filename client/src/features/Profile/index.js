import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import Modal from "./Modal";
import Form from "./Form";
import { useForm } from "../../hooks/form-hook";
import { useHttpClient } from "../../hooks/http-hook";

const Profile = (props) => {
  const auth = useContext(AuthContext);
  const userId = auth.userId;
  const { sendRequest } = useHttpClient();
  const [isModalShown, setIsModalShown] = useState(false);


  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

 const submitProfileHandler = async (event) => {
   event.preventDefault();

   try {
     await sendRequest(
       `${process.env.REACT_APP_BACKEND_URL}/users/updateUser`,
       "POST",
      JSON.stringify({
       userId: userId,
       name: formState.inputs["name"].value,
       phone: formState.inputs["phone"].value,
       address: formState.inputs["address"].value
      }),
       {
         "Content-Type": "application/json",
         "Access-Control-Allow-Origin": "*",
       }
    );
    setIsModalShown(true);
  } catch (err) { }
 };

 return (
   <>
     {isModalShown && <Modal show={true} />}
     <Form
       inputHandler={inputHandler}
       inputs={props.inputs}
       isValid={formState.isValid}
       submitProfileHandler={submitProfileHandler}
     />
   </>
 );
};

export default Profile;
