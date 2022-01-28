import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";

function App({ current }) {



  useEffect(() => {
    console.log(current);
  },)
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route  path="/" element={<Products/>} />
          <Route  path="/cart" element={<Cart/>} />
          {false ? ( <h1>Error Found</h1>) : (<Route  path="/product/:id" element={<SingleItem/>} />)}
        </Routes>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
