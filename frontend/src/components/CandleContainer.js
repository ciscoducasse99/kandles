import React, { useEffect } from "react";
import { getAllProducts } from "../redux/actions/productActions";
import { connect } from "react-redux";
import CandleListing from './CandleListing';

const CandleContainer = ({products,getAllProducts,isLoaded}) => {

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <div className="row">
      {isLoaded && products[0] !== undefined ? (
        <CandleListing candles={products[0]}/>
      ) : (
        <div className="spinner-border text-dark" role="status" />
      )}
    </div>
  );
};

  const mapStateToProps = (state) =>({
    products:state.products.products,
    isLoaded:state.products.isLoaded
  })
  export default connect(mapStateToProps, {getAllProducts})(CandleContainer)