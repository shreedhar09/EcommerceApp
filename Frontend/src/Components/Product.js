import React, { Component } from "react";
import { connect } from "react-redux";
import Tag from "../uploads/Tag.png";
import Desc from "../uploads/Desc.png";
import {
  getParticularProductAction,
  sendCartDataToEmail
} from "../Redux/AuthAction";
import { addToCartAction } from "../Redux/Cart/ActionCart";
import { history } from "../History/History";
import Load from "../uploads/Load.png";
export class Product extends Component {
  constructor(props) {
    super(props);


    this.productId = this.props.match.params.id;
  }
  
  async componentDidMount() {
    this.props.getParticularProductAction(this.productId);
  }
  goToCart = async id => {
    if (this.props.checkLoggedInStatus.loggedIn) {

      await this.props.addToCartAction(id); //Here Await is Important.
      console.log("hey");
      let CartDataArray = this.props.cartDataForHome.cartData.map(data => {
        return data;
      });

      let OrderSummary = {
        emailId: this.props.checkLoggedInStatus.user.data.Data.userlogin
          .emailId,
        cartItem: [...CartDataArray]
      };
      console.log(OrderSummary);
      let a = await this.props.sendCartDataToEmail(OrderSummary);
      console.log(a);
      history.push("/cart");
      window.location.reload();
    } else {
      await this.props.addToCartAction(id); //Here Await is Important.
      history.push("/cart");
      window.location.reload();
    }
  };
  render() {
    debugger
    return this.props.DataOfProduct.length === 0 ? (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="head mt-2">Searching.........</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6"></div>
          <div className="col-lg-4 col-md-6">
            <div className="card" style={{ width: "40rem" }}>
              <div className="card-body">
                <img src={Load} className="img-fluid" alt="load"></img>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6"></div>
        </div>
      </div>
    ) : (
      <div className="container mt-4 mb-4">
        <div className="row containerProduct">
          <div className="col-lg-4">
            <div
              className="card bg-transparent border-0"
              style={{ width: "18rem" }}
            >
              <img
                src={this.props.DataOfProduct.Data.image}
                className="img-fluid"
                alt="Product"
              ></img>
              <div className="card-body">
                <button
                  className="btn btn-transparent"
                  onClick={() => this.goToCart(this.productId)}
                >
                  Add To Cart
                </button>
                <button className="btn btn-dark ml-2">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="card bg-transparent border-0"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">
                  {this.props.DataOfProduct.Data.pName}
                </h5>
                <hr />
                <h5 className="card-title">
                  <img src={Tag} alt="Price"></img>
                  {this.props.DataOfProduct.Data.price}
                </h5>
                <hr />
                <img src={Desc} alt="Description"></img>

                <span className="card-title float-right">
                  {this.props.DataOfProduct.Data.description}
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    DataOfProduct: state.ProductSpecificData.productSpecific,
    checkLoggedInStatus: state.loginUserData,
    cartDataForHome: state.cartDataProduct
  };
};
export default connect(mapStateToProps, {
  getParticularProductAction,
  addToCartAction,
  sendCartDataToEmail
})(Product);
