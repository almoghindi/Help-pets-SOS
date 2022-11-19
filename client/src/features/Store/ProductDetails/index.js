import React, { useState, useEffect } from 'react';
import { useHttpClient } from "../../../hooks/http-hook";
import LoadingSpinner from "../../../components/UIElements/LoadingSpinner";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "./Card";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [loadedProduct, setLoadedProduct] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const productId = useParams().productId;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/shop/${productId}`
        );
        clearError();
        setLoadedProduct(responseData.product);
      } catch (err) {}
    };
    fetchProduct();
  }, [sendRequest, productId]);

  const handlePlus = () => {
    if (quantity < 10) {
      setQuantity((prev) => prev + 1);
     }
  };
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  
  return (
    <>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && loadedProduct && (
        <ProductDetailsCard
          id={productId}
          key={productId}
          quantity={quantity}
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          title={loadedProduct.title}
          secondTitle={loadedProduct.secondTitle}
          price={loadedProduct.price}
          description={loadedProduct.description}
          imageUrl={loadedProduct.imageUrl}
        />
      )}
      {!isLoading && error && (
        <div style={{ textAlign: "center", marginTop: "17rem" }}>
          <h1>Invalid Product !</h1>
        </div>
      )}
    </>
  );
}
export default ProductDetails;