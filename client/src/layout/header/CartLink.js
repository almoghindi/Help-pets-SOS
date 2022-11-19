import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { useHttpClient } from "../../hooks/http-hook";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function CartLink() {
   const auth = useContext(AuthContext);
   const userId = auth.userId;
    const [itemsQuantity, setItemsQuantity] = useState(0);
    const [loadedProducts, setLoadedProducts] = useState([]);

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
        } catch (err) {}
      };
      if (userId) {fetchProduct();}
    }, [sendRequest, userId, loadedProducts]);
  return (
    <>
      {auth.isLoggedIn && (
        <Link to="/cart">
          <Badge color="secondary" className="m-4" badgeContent={itemsQuantity}>
            <ShoppingCartIcon fontSize="large" />{" "}
          </Badge>
        </Link>
      )}
    </>
  );
}
