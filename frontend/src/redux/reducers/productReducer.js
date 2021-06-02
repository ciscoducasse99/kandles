import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_FAILURE,
  REMOVE_PRODUCT_FROM_CART, CLEAR_CART_MESSAGE, CHECK_PRODUCT_IN_CART
} from "../actions/actionTypes";


//Break down into smaller pieces of state later
const initialState = {
  cart:[],
  products: [],
  product: [],
  isLoaded: false,
  error:null,
  cartMessage: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        isLoaded: false,
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        isLoaded: true,
      };
    case GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoaded: true,
      };
    case GET_PRODUCT:
      return{
        ...state,
        isLoaded:false,
      }
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product:action.payload,
        isLoaded:true
      }
    case GET_PRODUCT_FAILURE:
      return{
        ...state,
        isLoaded:true,
        error:action.payload
      }
    case ADD_PRODUCT_TO_CART:

      return{
        ...state,
        cart:[...state.cart, action.payload],
        cartMessage:{message:'Item added to cart!', code:1}
      }
    
    case ADD_PRODUCT_TO_CART_FAILURE:
      return{
        ...state,
        cartMessage:{message:'Product is already in the cart. You can adjust the quanity in the cart menu.', code:0}
      }
    case REMOVE_PRODUCT_FROM_CART:
      return{
        ...state,
        cart: [...state.cart.filter(item => item.candleId!== action.payload)]
      }
    case CLEAR_CART_MESSAGE:
      return{
        ...state,
        cartMessage:null
      }
    default:
      return state;
  }
}
