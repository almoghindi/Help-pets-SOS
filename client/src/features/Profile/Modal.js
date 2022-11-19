import React from "react";
import Modal from "../../components/UIElements/Modal";

export default function ProfileModal(props) {
  return (
    <>
      <Modal
        show={props.show}
        title="Profile update"
        body="Woohoo, your user has been updated !"
        link="/"
        btnLink="Go back home"
      />
    </>
  );
}
