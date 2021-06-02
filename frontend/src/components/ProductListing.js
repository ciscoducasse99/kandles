import React from "react";
import "../css/App.css";

const ProductListing = ({ product, handleAdd, message}) => {
 
  return (
    <div className="row">
      <div className="col-md-6 m-auto text-center">
        <img
          src={product.image}
          className="stock-image-product"
          alt={product.name}
        />
      </div>
      <div className="col-md-6 text-center">
        <h5 className="mb-5">{product.name}</h5>
        <p className="yeezy-text mb-5">{product.description}</p>

        <div className="d-flex flex-row mb-5 yeezy-text">
          <p className="mr-auto">${product.price}</p>
          <small>Stock amount: {product.stock}</small>
        </div>

  {/* {message === null ? <small>Click below to add to cart</small>:<small className={message.code === 0 ? 'text-danger':'text-success'}>{message.message}</small>} */}

        <button
          className="w-100 btn yeezy-btn mt-2 py-2"
          onClick={() => handleAdd(product)}
        >
          Order
        </button>

        
      </div>
    </div>
  );
};

export default ProductListing;
