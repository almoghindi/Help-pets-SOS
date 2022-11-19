import React from "react";
import Modal from "../../components/UIElements/Modal";

export default function ReportModal(props) {

  return (
    <>
      <Modal
        show={props.show}
        title="Report update"
        body="Woohoo, you're report sent and we take care of it !"
        link="/store"
        btnLink="Go to store"
      />
    </>
  );
}

