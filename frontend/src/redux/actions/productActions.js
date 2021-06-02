import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_FAILURE,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_PRODUCT_FROM_CART_FAILURE,
  CLEAR_CART_MESSAGE,
  CHECK_PRODUCT_IN_CART,
} from "./actionTypes";
import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_PRODUCTS,
  });
  try {
    await axios.get("/kandles").then((res) =>
      dispatch({
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload: res.data,
      })
    );
  } catch (err) {
    console.log("encountered error", err);
    dispatch({
      type: GET_ALL_PRODUCTS_FAILURE,
      payload: err,
    });
  }
};

export const getProduct = (id) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT,
  });
  try {
    await axios.get(`/kandles/${id}`).then((res) => {
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: res.data,
      });
      //check for duplcates here?
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCT_FAILURE,
      payload: err,
    });
  }
};

export const addProductToCart = (product) => {
  return (dispatch, getState) => {
    const isIncluded = getState().products.cart.includes(product);

    if (isIncluded) {
      dispatch({
        type: ADD_PRODUCT_TO_CART_FAILURE
      });
    } else {
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product,
      });
    }
  };
};

export const removeProductFromCart = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_PRODUCT_FROM_CART,
  });
  try {
    dispatch({
      type: REMOVE_PRODUCT_FROM_CART,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: REMOVE_PRODUCT_FROM_CART_FAILURE,
      payload: err,
    });
  }
};

export const clearCartMessage = () => (dispatch) => {
  dispatch({
    type: CLEAR_CART_MESSAGE,
  });
};

export const checkForDuplicates= (product)=> dispatch=>{
  return (dispatch, getState)=>{
    const isIncluded = getState().products.cart.includes(product)

    if(isIncluded){
      console.log('is included')
    } else {
      console.log('not included')
    }
  }
}