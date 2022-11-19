import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/auth-context";
import { useHttpClient } from "../../../hooks/http-hook";
import Button from 'react-bootstrap/Button';
import Item from "./Item";
import "./cart.css"

export default function CartCheckout() {
  const auth = useContext(AuthContext);
  const userId = auth.userId;
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [itemsQuantity, setItemsQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  const { sendRequest } = useHttpClient();

  useEffect(() => {
   const fetchProduct = async () => {
     try {
       const responseData = await sendRequest(
         `${process.env.REACT_APP_BACKEND_URL}/shop/cart`,
         "POST",
         JSON.stringify({
           userId: userId,
         }),
         {
           "Content-Type": "application/json",
         }
       );
       setLoadedProducts(responseData.products);
       setItemsQuantity(responseData.quantity);
       setTotalPrice(parseFloat(responseData.totalPrice));
     } catch (err) {}
   };
   fetchProduct();
 }, [sendRequest, userId, loadedProducts]);
  
  const handleDeliveryChange = event => {
    setDeliveryPrice(Number(event.target.value));
  };
  
  return (
    <section className="h-100">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {itemsQuantity} items
                        </MDBTypography>
                      </div>

                      <hr className="my-4" />

                      {loadedProducts &&
                        loadedProducts.map((item) => {
                          return (
                            <Item
                              id={item.id}
                              key={item.id}
                              productId={item.productId}
                              img={item.imageUrl}
                              title={item.title}
                              secondTitle={item.secondTitle}
                              price={item.price}
                              quantity={item.quantity}
                            />
                          );
                        })}

                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <Link to="/">
                            <MDBCardText tag="a" className="text-body">
                              <MDBIcon fas icon="long-arrow-alt-left me-2" />
                              Back to shop
                            </MDBCardText>
                          </Link>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1"
                      >
                        Summary
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          items {itemsQuantity}
                        </MDBTypography>
                        <MDBTypography tag="h5">€ {totalPrice}</MDBTypography>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Shipping
                      </MDBTypography>

                      <div className="mb-4 pb-2">
                        <select
                          className="select p-2 rounded"
                          style={{ width: "100%" }}
                          onChange={handleDeliveryChange}
                        >
                          <option value={0}>Free-Delivery- €0</option>9
                          <option value={5}>Standard-Delivery- €5.00</option>
                          <option value={12}>Fast-Delivery- €12.00</option>
                        </select>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Give code
                      </MDBTypography>

                      <div className="mb-5">
                        <MDBInput size="lg" label="Enter your code" />
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5">
                          € {totalPrice + deliveryPrice}
                        </MDBTypography>
                      </div>
                      <Link to="/checkout">
                        <Button type="button" variant="dark" size="lg">
                          CHECKOUT
                        </Button>
                      </Link>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
