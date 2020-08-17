import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductJeansAction } from "../Redux/AuthAction";

export class Jeans extends Component {
  async componentDidMount() {
    await this.props.getProductJeansAction("Clothing", "Jeans");
  }
  render() {
  
    return this.props.particularProductData.length === 0 ? (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="head mt-2">Loading...</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6"></div>
          <div className="col-lg-4 col-md-6">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Clothing</h5>
                <p className="card-text">
                  Fashion is not necessarily about lables. It's not about
                  brands. It's about something else that comes from within you.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6"></div>
        </div>
      </div>
    ) : (
      <div className="container">
        <div className="row">
          <div className="col-lg-12  mt-2">
            <h3 className="head">Clothing</h3>
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
  return { particularProductData: state.ProductJeans.productDataSpecific };
};

export default connect(mapStateToProps, { getProductJeansAction })(Jeans);
