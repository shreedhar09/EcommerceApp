import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getProductByCategoryAction } from "../Redux/AuthAction";
import gadget from "../uploads/gadget.jpg";
import cloth from "../uploads/cloth.jpg";
import { connect } from "react-redux";
import { history } from "../History/History";

export class RootCategoryUI extends Component {
  goToElectronics = () => {
    debugger
    this.props.getProductByCategoryAction("Electronics");
    history.push("/electronics");
    window.location.reload();
  };
  goToClothing = async () => {
    await this.props.getProductByCategoryAction("Clothing");
  };
  render() {
    return (
      <div className="backCategory">
        <div className="container">
          <div className="row ">
            <div className="col-sm-12 col-md-0 col-lg-1"></div>
            <div className="col-sm-12 col-md-5 col-lg-4 alignContent">
              <div className="card cardOutline">
                <img src={gadget} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title head">Electronics</h5>
                  <p className="card-text">
                    Dreams about the future are always filled with gadgets.
                  </p>
                  <button
                    className="btn btn-primary head"
                    onClick={this.goToElectronics}
                  >
                    Take Me There
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-1 col-lg-2"></div>
            <div className="col-sm-12 col-md-5 col-lg-4 alignContent">
              <div className="card cardOutline">
                <img src={cloth} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title head">Clothing</h5>
                  <p className="card-text">
                    Fashion is not necessarily about lables. It's not about
                    brands. It's about something else that comes from within
                    you.
                  </p>
                  <Link
                    to="/Clothing"
                    className="btn btn-primary head"
                    onClick={this.goToClothing}
                  >
                    Take Me There
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-0 col-lg-1"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { getProductByCategoryAction })(RootCategoryUI);
