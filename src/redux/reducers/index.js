import { combineReducers } from "redux";
import productReducer from "./productReducer";
import  cartReducer  from "./cartReducer";

const allReducers = combineReducers({
    productReducer:productReducer,
    cartReducer:cartReducer,
    
 

});
export default allReducers;