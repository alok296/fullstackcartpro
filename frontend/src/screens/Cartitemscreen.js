import "./cartitem.css";
import React from 'react'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link} from "react-router-dom";
import Carthistory from "../component/carthistory";
import {removeCartItem} from "../redux/action/addcartitemaction";
const carthistory = () => {
  const dispatch = useDispatch();
  const carthistory = useSelector((state) => state.addcartitem);
console.log(carthistory);


  useEffect(() => {}, []);
  const removeFromCartHandler = (id) => {
    dispatch(removeCartItem(id));
  };

  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Cart history</h2>
          {carthistory.length === 0 ? (
            <div>
              Your Cart history is empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            carthistory.map((item) => (
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
