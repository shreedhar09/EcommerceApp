import "./App.css";
import Navigation from "./Components/Navigation";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import RootCategory from "./Components/RootCategory";
import RootClothing from "./Components/RootClothing";
import RootElectronic from "./Components/RootElectronic";

import Cart from "./Components/Cart";
import React, { Component } from "react";
import TV from "./Components/TV";
import Mobile from "./Components/Mobile";
import TShirt from "./Components/TShirt";
import Jeans from "./Components/Jeans";
import Product from "./Components/Product";
import CheckoutUI from "./ComponentUI/CheckoutUI";
import Invoice from "./Components/Invoice";
import Forgot from "./Components/Forgot";
import ResetTime from "./Components/ResetTime";

export class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Navigation></Navigation>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/category" component={RootCategory}></Route>
          <Route path="/clothing" component={RootClothing}></Route>
          <Route path="/electronics" component={RootElectronic}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/TV" component={TV}></Route>
          <Route path="/Mobile" component={Mobile}></Route>
          <Route path="/TShirt" component={TShirt}></Route>
          <Route path="/Jeans" component={Jeans}></Route>
          <Route path="/Product/:id" component={Product}></Route>
          <Route path="/checkout" component={CheckoutUI}></Route>
          <Route path="/invoice" component={Invoice}></Route>
          <Route path="/forgot" component={Forgot}></Route>
          <Route path="/reset" component={ResetTime}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
