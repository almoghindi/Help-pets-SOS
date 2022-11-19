import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/auth-context";
import { useHttpClient } from "../../../hooks/http-hook";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Modal from "./Modal";

const ProductDetailsCard = (props) => {
  const auth = useContext(AuthContext);
  const [isModalShown, setIsModalShown] = useState(false);
  const { sendRequest } = useHttpClient();


  const addToCart = async () => {
    if (!auth.isLoggedIn) {
      setIsModalShown(true);
      return;
    }
    else {
      try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/shop`,
        "POST",
        JSON.stringify({
          userId: auth.userId,
          productId: props.id,
          imageUrl: props.imageUrl[0],
          title: props.title,
          secondTitle: props.secondTitle,
          price: props.price,
          quantity: props.quantity
        }),
        {
          "Content-Type": "application/json",
        }
      );
    } catch (err) {
      // handleShow();
    }
    }
};
  return (
    <>
      {isModalShown && <Modal show={true} />}
      <Card style={{ margin: "3rem", background: "OldLace", display: "flex" }}>
        <Row className="g-0">
          <Col lg="5">
            <Carousel
              variant="dark"
              className="m-3 mt-100"
              style={{ marginTop: "3rem" }}
            >
              {props.imageUrl.map((image) => {
                return (
                  <Carousel.Item key={image}>
                    <img
                      style={{
                        height: "30rem",
                        width: "20rem",
                        alignItems: "center",
                      }}
                      className="d-block w-100 text-center"
                      src={image}
                      alt="First slide"
                      
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
          <Col lg="7" className="p-4">
            <Card.Title className="fs-1">{props.title}</Card.Title>
            <Card.Title className="fs-4 text-secondary">
              {props.secondTitle}
            </Card.Title>
            <Card.Text className="mt-5 fs-3">{props.price}$</Card.Text>
            <Card.Text className="mt-5 fs-5">{props.description}</Card.Text>

            <ButtonGroup aria-label="Basic example" size="lg" className="mt-5">
              <Button variant="outline-dark" onClick={props.handleMinus}>
                -
              </Button>
              <Button variant="outline-dark" disabled>
                {props.quantity}
              </Button>
              <Button variant="outline-dark" onClick={props.handlePlus}>
                +
              </Button>
            </ButtonGroup>
            <Button
              className="mt-5 ms-3"
              variant="dark"
              size="lg"
              onClick={addToCart}
            >
              Add To Cart
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default ProductDetailsCard;
