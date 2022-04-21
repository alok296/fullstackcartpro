import "./HomeScreen.css";
import React,{ useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";

import Product from "../component/Product";

import { getProducts as listProducts } from "../redux/action/productActions";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state)=>state.getProducts);
  const { products,loading,error} = getProducts;
  useEffect(() => {
    dispatch(listProducts());
  },[dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((item) => (
            <Product
              key={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              imageUrl={item.imageUrl}
              productId={item._id}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default HomeScreen;