import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StoreList from "./List";
import { useHttpClient } from "../../../hooks/http-hook";
import Pagination from "../../../components/UIElements/Pagination";
import LoadingSpinner from "../../../components/UIElements/LoadingSpinner";

const Store = () => {
  const [loadedProducts, setLoadedProducts] = useState();
  const { isLoading, sendRequest } = useHttpClient();
  const [page, setPage] = useState(1);
  let links = [];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/shop`
        );

        setLoadedProducts(responseData.products);
      } catch (err) {}
    };
   fetchProducts();
   
  }, [sendRequest, page]);
  
  if (loadedProducts) {
    for (let i = 1; i < Math.ceil(loadedProducts.length / 8) + 1; i++) {
      links.push(
        <Link to={`/store?page=${i}`} onClick={() => setPage(i)} key={i}>
          <span>{i}</span>
        </Link>
      );
    }
  }
 return (
   <>
     {isLoading && (
       <div className="center">
         <LoadingSpinner />
       </div>
     )}
     {!isLoading && loadedProducts && (
       <>
         <StoreList items={loadedProducts} min={page * 8 - 8} max={page * 8} />
         <Pagination links={links}/>
       </>
     )}
   </>
 );
}
export default Store;