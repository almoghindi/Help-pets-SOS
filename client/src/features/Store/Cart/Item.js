import React, { useContext } from "react";
import {
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/auth-context";
import { useHttpClient } from "../../../hooks/http-hook";

const CartItem = (props) => {
  const auth = useContext(AuthContext);
  const userId = auth.userId;
  const { sendRequest } = useHttpClient();

  const deleteItem = async () => {
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/shop`,
        "DELETE",
        JSON.stringify({
          userId: userId,
          cartProductId: props.id,
        }),
        {
          "Content-Type": "application/json",
        }
      );
    } catch (err) {}
  };

  return (
    <>
      <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
        <MDBCol md="2" lg="2" xl="2">
          {" "}
          <Link to={`/product/${props.productId}`}>
            <MDBCardImage
              src={props.img}
              fluid
              className="rounded-3"
              alt="Product"
            />{" "}
          </Link>
        </MDBCol>

        <MDBCol md="3" lg="3" xl="3">
          <MDBTypography tag="h4" className="text-black">
            {props.title}
          </MDBTypography>
          <MDBTypography tag="h6" className="text-muted mb-0">
            {props.secondTitle}
          </MDBTypography>
        </MDBCol>
        <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
          <MDBTypography tag="h6" className="text-black mb-0">
            Quantity: {props.quantity}
          </MDBTypography>
        </MDBCol>
        <MDBCol md="3" lg="2" xl="2" className="text-end">
          <MDBTypography tag="h6" className="mb-0">
            Price: €{props.price}
          </MDBTypography>
        </MDBCol>
        <MDBCol md="1" lg="1" xl="1" className="text-end">
          <MDBIcon
            fas
            icon="times"
            className="text-muted"
            style={{ cursor: "pointer" }}
            onClick={deleteItem}
          />
        </MDBCol>
      </MDBRow>

      <hr className="my-4" />
    </>
  );
};

export default CartItem;
