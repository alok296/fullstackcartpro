import * as actionTypes from '../constant/cartConstant';
import axios from 'axios';

export const addcartitemaction=(qty)=>async(dispatch)=>{
    // const {data} = await axios.get(`/cart/getcart`);
    // dispatch({
    //     type:actionTypes.ADD_CART_ITEM,
    //     payload:{
    //     product:data._id,
    //     name:data.name,
    //     email:data.email,
    //     imageUrl:data.imageUrl,
    //     totalprice:data.price,
    //     qty
    //     }
    // })
}

export const removeCartItem=(id)=>async(dispatch,getState)=>{
dispatch({
    type:actionTypes.REMOVE_CART_ITEM,
    payload:id,
})
};


