import React from 'react';
import { Form, Row, Col } from "react-bootstrap";
import { VALIDATOR_REQUIRE } from "../../utils/validators";
import Button from "../../components/UIElements/Button";
import Input from "../../components/FormElements/Input";

export default function ReportForm(props) {
  return (
    <form className="container mt-3 mb-3" onSubmit={props.reportSubmitHandler}>
      <Row className="mb-3">
        {props.inputs &&
          props.inputs.map((input) => (
            <Col sm="12" md="6">
              <Form.Group controlId={input} className="col col-sm-6">
                <Form.Label style={{ fontWeight: "500" }}>
                  Enter {input}:
                </Form.Label>
                <Input
                  id={input}
                  type={input}
                  className="form-control"
                  onInput={props.inputHandler}
                  validators={[VALIDATOR_REQUIRE()]}
                  element="input"
                />
              </Form.Group>
            </Col>
          ))}
      </Row>
      <Row className="mb-3">
        <Form.Label style={{ fontSize: "20px", fontWeight: "500" }}>
          Enter Your Report:
        </Form.Label>
        <Input
          id="report"
          type="text"
          className="form-control"
          onInput={props.inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
        />
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
          <Button
            type="submit"
            disabled={!props.isValid}
            className="me-4 btn btn-success btn-lg btn-block"
          >
            Submit
          </Button>
          <Button
            type="reset"
            className="me-4 btn btn-danger btn-lg btn-block"
            to="/"
          >
            Cancel
          </Button>
        </Form.Group>
      </Row>
    </form>
  );
}