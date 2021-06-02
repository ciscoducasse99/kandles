import {combineReducers} from 'redux';
import productsReducer from './productReducer'
const rootReducer = combineReducers({
    products:productsReducer
    // cart:cartReducer,
    // user:userReducer,
    // payment:paymentReducer,
    // errors:errorReducer
})

export default rootReducer