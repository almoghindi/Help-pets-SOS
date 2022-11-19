import React from "react";
import Modal from "../../../components/UIElements/Modal";

export default function ReportModal(props) {
  return (
    <>
      <Modal
        show={props.show}
        title="Log in please !"
        body="In order to add items to your cart you must log in first!"
        link="/auth"
        btnLink="Login Now"
      />
    </>
  );
}
