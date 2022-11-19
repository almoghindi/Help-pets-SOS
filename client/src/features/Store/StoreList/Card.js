import React from "react";
import Button from "../../../components/UIElements/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";


const StoreListCard = (props) => {
  return (
    <Col>
      <Card style={{ margin: "2.5rem", width: "14rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text style={{fontWeight: "bold"}}>{props.price}$</Card.Text>
          <Button
            className="btn btn-warning"
            variant="primary"
            to={`/product/${props.id}`}
          >
            More Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default StoreListCard;
