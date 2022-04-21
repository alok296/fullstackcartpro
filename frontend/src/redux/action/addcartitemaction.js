import * as actionTypes from '../constant/cartConstant';
import axios from 'axios';

export const addcartitemaction=(qty)=>async(dispatch)=>{
    const {data} = await axios.get(`/api/products/cartget`);
    dispatch({
        type:actionTypes.ADD_CART_ITEM,
        payload:{
        product:data._id,
        name:data.name,
        imageUrl:data.imageUrl,
        totalprice:data.price,
        qty
        }
    })
}

export const removeCartItem=(id)=>async(dispatch,getState)=>{
    console.log('in REMOVE CART ITEM')
dispatch({
    type:actionTypes.REMOVE_CART_ITEM,
    payload:id,
})
};


