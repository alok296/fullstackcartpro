import "./CartScreen.css";
import React from 'react'
import StripCheckout from "react-stripe-checkout";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link , useNavigate } from "react-router-dom";
import CartItem from "../component/CartItem";
import { addToCart,clearcart,removeFromCart } from "../redux/action/cartAction";
import {addcartitemaction} from "../redux/action/addcartitemaction"
import axios from 'axios'
const CartScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(1);
  };

  const makepayment = async(token) =>{
    if(token){
      cartItems.map((value)=>{
          axios.post(`/cart/addcart`,{
          name:value.name,
          email:token.email,
          imageUrl:value.imageUrl,
          totalprice:getCartSubTotal(),
          qty:value.qty
        })
      })
      dispatch(addcartitemaction(cartItems))
      cartItems.length=0
      // dispatch(clearcart())
    }
    else{
      alert(`payment Error`)
    }
  }
  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>
        {cartItems.length === 0 ? "":
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <StripCheckout
            stripeKey="pk_test_51Ko4bKSBftn7azzBqpUT5ZaeS5odtaKlWNvspX6Sz6ZqOy67dAxm7gwd4NSlZdozMoUqZnHICJssoxAM6Ywue7JX00oK6HDKje"
              token={makepayment}
              name="alok"
              item="Shoping Product"
              amount={getCartSubTotal()*100}>
            </StripCheckout>
          </div>
        </div>
}
      </div>
    </>
  );
};
export default CartScreen;
