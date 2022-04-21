import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {cartReducer} from '../reducer/cartReducer';
import {addcartitem} from '../reducer/addcartitem';
import {getProductsReducer,getProductDetailsReducer} from '../reducer/productReducer';

const reducer = combineReducers({
    cart:cartReducer,
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsReducer,
    addcartitem
})

const middleware = [thunk];

const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware))
)

export default store;