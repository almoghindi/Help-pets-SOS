import React,{ useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../../context/auth-context";
import { useForm } from "../../hooks/form-hook";
import { useHttpClient } from "../../hooks/http-hook";
import ReportModal from "./Modal";
import ReportForm from "./Form";

const SOSReport = (props) => {
  const auth = useContext(AuthContext);
  const { sendRequest } = useHttpClient();
  const [isModalShown, setIsModalShown] = useState(false);
  let formInputs = [];
  let formStates = {};
  if (auth.isLoggedIn) {
    formInputs = props.loginInputs;
    formStates = {
      userId: {
        value: auth.userId,
        isValid: true,
      },
      city: {
        value: "",
        isValid: false,
      },
      state: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
      report: {
        value: "",
        isValid: false,
      },
    };
  }
  else {
    formInputs = props.noLoginInputs;
    formStates = {
      fullname: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      city: {
        value: "",
        isValid: false,
      },
      state: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
      report: {
        value: "",
        isValid: false,
      },
    }
  }


  const [formState, inputHandler] = useForm(
    formStates,
    false
  );

  const reportSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const formData = {};
      Object.keys(formState.inputs).forEach((key) => {
        if (formState.inputs[key] !== undefined) {
          formData[key] = formState.inputs[key].value;
        }
      });
      
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/reports/createReport`,
        "POST",
        JSON.stringify(formData),
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
      {isModalShown && <ReportModal show={true} />}
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        LETS HELP THE PETS TOGETHER !
      </h1>
      <h4 style={{ textAlign: "center", marginBottom: "50px" }}>
        Report the event and let's save the pets we all love
      </h4>
      <ReportForm
        inputs={formInputs}
        reportSubmitHandler={reportSubmitHandler}
        inputHandler={inputHandler}
        isValid={formState.isValid}
      />
    </>
  );
}

export default SOSReport;