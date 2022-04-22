import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";
import Backdrop from "./component/Backdrop";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import StripeContainer from "./component/StripeContainer";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import SideDrawer from "./component/SideDrawer";
import Success from "./screens/success";
import Registration from "./screens/registration";
import Userlogin from "./screens/userlogin";
import Carthistory from "./component/carthistory";
function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Routes>
        <Route path="/login" element={< Userlogin/>} />
          <Route path="/history" element={< Carthistory/>} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/payment" element={<StripeContainer />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
