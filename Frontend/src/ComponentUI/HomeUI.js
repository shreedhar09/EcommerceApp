import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import FlexGadget from "../uploads/FlexGadget.jpg";
import Clothing from "../uploads/Clothing.jpg";
import { connect } from "react-redux";
import { fetchCartDataToEmail } from "../Redux/AuthAction";

export class HomeUI extends Component {
  async componentDidMount() {
    if (this.props.CheckLoginStatus.loggedIn) {
      let Check = this.props.CheckLoginStatus.user.data.Data.userlogin.emailId;
      await this.props.fetchCartDataToEmail(Check);
    }
  }
  render() {
    return (
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              className="bannerSize img-fluid"
              src={Clothing}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="banner">Clothing</h3>
              <p className="banner">
                Fashion is not necessarily about lables. It's not about brands.
                It's about something else that comes from within you.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="bannerSize img-fluid"
              src={FlexGadget}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="banner">Electronics</h3>
              <p className="banner">
                Dreams about the future are always filled with gadgets.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {this.props.cartDataShowHome.userCartData ? (
          <h4 className="center head">
            products waiting for the checkout.....
          </h4>
        ) : (
          <div></div>
        )}
        <div className="row">
          {this.props.cartDataShowHome.userCartData ? (
            this.props.cartDataShowHome.userCartData.map(data => (
              <React.Fragment>
                <div className="col-4 mt-2" key={data.Data._id}>
                  <div
                    className="card"
                    style={{ width: "18rem" }}
                    onClick={() => {
                      this.props.propForHistory.history.push(
                        `/product/${data.Data._id}`
                      );
                    }}
                  >
                    <img
                      className="card-img-top img-fluid"
                      src={data.Data.image}
                      alt="T-Shirt"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{data.Data.pName}</h5>
                      <p className="card-text">
                        <span className="h5">Description</span>{" "}
                        {data.Data.description}
                      </p>
                      <p className="card-text">
                        <span className="h5">Price</span> {data.Data.price}
                      </p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    CheckLoginStatus: state.loginUserData,
    cartDataShowHome: state.CheckoutCartData
  };
};

export default connect(mapStateToProps, { fetchCartDataToEmail })(HomeUI);
