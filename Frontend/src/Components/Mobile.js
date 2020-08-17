import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductMobileAction } from "../Redux/AuthAction";

export class Mobile extends Component {
  async componentDidMount() {
    await this.props.getProductMobileAction("Electronics", "Mobile");
  }
  render() {
    debugger
    return this.props.particularProductData.length === 0 ? (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="head mt-2 text-center">Loading...</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12"></div>
          <div className="col-lg-4 col-md-12 mt-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Electronics</h5>
                <p className="card-text">
                  Dreams about the future are always filled with gadgets.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12"></div>
        </div>
      </div>
    ) : (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-2">
            <h3 className="head">Electronics</h3>
          </div>
        </div>
        <div className="row">
          {this.props.particularProductData.Data.map(item => (
            <div className="col-lg-4 col-md-6 mt-2" key={item._id}>
              <div
                className="card"
                style={{ width: "18rem" }}
                onClick={() => {
                  this.props.history.push(`/product/${item._id}`);
                }}
              >
                <img
                  className="card-img-top img-fluid"
                  src={item.image}
                  alt="T-Shirt"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.pName}</h5>
                  <p className="card-text">
                    <span className="h5">Description</span> {item.description}
                  </p>
                  <p className="card-text">
                    <span className="h5">Price</span> {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { particularProductData: state.ProductMobile.productDataSpecific };
};
export default connect(mapStateToProps, { getProductMobileAction })(Mobile);
