import React,{useEffect} from 'react';
import Layout from '../components/Layout'
import '../css/App.css';
import ProductContainer from "../components/ProductContainer.js"

import { getProduct, addProductToCart, clearCartMessage ,checkForDuplicates} from "../redux/actions/productActions";
import { connect } from "react-redux";


const Product =({match,product, cart, getProduct, isLoaded, addProductToCart, message, clearCartMessage, checkForDuplicates})=> {

  useEffect(() => {
    const { params: { candleId } } = match;
      getProduct(candleId)
  }, [ match, getProduct, checkForDuplicates]);
  

  console.log(product)
  return (
    <Layout component={
      <ProductContainer 
        isLoaded={isLoaded} 
        message={message} 
        product={product} 
        handleAdd={addProductToCart} 
        clearCart={clearCartMessage}
      />
    }
    />
  );
}

const mapStateToProps = (state) => ({
  product: state.products.product,
  isLoaded: state.products.isLoaded,
  message: state.products.cartMessage,
  cart:state.products.cart
});
export default connect(mapStateToProps, { getProduct, addProductToCart, clearCartMessage, checkForDuplicates })(Product);
