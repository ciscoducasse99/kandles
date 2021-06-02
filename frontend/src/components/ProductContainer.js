import React from "react";
import ProductListing from "./ProductListing.js"

const ProductContainer = ({ isLoaded, product, handleAdd, message, clearCart}) => {
  return (
    <div>
      {isLoaded && product[0] !== undefined ? (
        <ProductListing product={product[0]} handleAdd={handleAdd} message={message} clearCart={clearCart}/>
      ) : ( 
        <div className="spinner-border text-dark" role="status" />
      )}
    </div>
  );
};

export default ProductContainer;
