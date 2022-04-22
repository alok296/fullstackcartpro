import "./cartitem.css";
import React from 'react'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link} from "react-router-dom";
import Carthistory from "../component/carthistory";
import {removeCartItem} from "../redux/action/addcartitemaction";
import axios from "axios";
const carthistory = () => {
  const dispatch = useDispatch();
  useEffect(() =>{
    axios.get('/cart/getcart').then(res=>{
    const cartdata = res.data;
    console.log(cartdata)
    })
    console.log(cartdata)
  }, []);

  const removeFromCartHandler = (id) => {
    dispatch(removeCartItem(id));
  };

  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Cart history</h2>
          {cartittem.length === 0 ? (
            <div>
              Your Cart history is empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartdata.map((item) => (
              <Carthistory
                key={item.product}
                item={item}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default carthistory;
