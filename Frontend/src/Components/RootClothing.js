import React, { Component } from "react";
import { getProductByCategoryAction } from "../Redux/AuthAction";
import { connect } from "react-redux";
import Load from "../uploads/Load.png";
export class RootClothing extends Component {
  async componentDidMount() {
    await this.props.getProductByCategoryAction("Clothing");
  }
  render() {
    debugger
    //console.log(this.props)
    return this.props.productData.length === 0 ? (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="head">
              <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-secondary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-danger" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-warning" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
              </div>

              <div className="spinner-grow text-dark" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </h3>
            <div className="row">
              <div className="col-lg-4 col-md-6"></div>
              <div className="col-lg-4 col-md-6">
                <img src={Load} className="img-fluid" alt="load"></img>
              </div>
              <div className="col-lg-4 col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-2">
            <h3 className="head">Clothing</h3>
          </div>
        </div>
        <div className="row">
          {this.props.productData.Data.map(item => (
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
  return {
    productData: state.ProductByCategoryData.productByCategory
  };
};
export default connect(mapStateToProps, { getProductByCategoryAction })(
  RootClothing
);
