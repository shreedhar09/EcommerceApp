import React, { Component } from "react";
import { connect } from "react-redux";
import { sendCartDataToEmail } from "../Redux/AuthAction";
import "../ComponentCSS/CartUI.css";
import Cart from "../uploads/Cart.png";
import { history } from "../History/History";
import CartDetails from "../Optimize/CartDetails";

export class CartUI extends Component {
  checkOut = async () => {
    if (this.props.checkLoggedInStatus.loggedIn) {
      let CartDataArray = this.props.cartDataHere.cartData.map(data => {
        return data;
      });

      let OrderSummary = {
        emailId: this.props.checkLoggedInStatus.user.data.Data.userlogin
          .emailId,
        cartItem: [...CartDataArray]
      };
      console.log(OrderSummary);
      await this.props.sendCartDataToEmail(OrderSummary);

      history.push("/checkout");
      window.location.reload();
    } else if (!this.props.checkLoggedInStatus.loggedIn) {
      history.push("/login");
      window.location.reload();
    }
  };

  navigateToCategory = () => {
    history.push("/category");
    window.location.reload();
  };

  render() {
    debugger
    return this.props.checkLoggedInStatus.loggedIn ? (
      this.props.cartDataHere.cartData.length === 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img className="img-fluid rounded" src={Cart} alt="Empty"></img>
            </div>
          </div>
          <div class="alert alert-info" role="alert">
            Your Shopping cart is empty!!!
          </div>
        </div>
      ) : (
        <div className="container">
          <table id="cart" className="table table-hover table-condensed">
            <thead>
              <tr>
                <th style={{ width: "50%" }} className="head h5">
                  Product
                </th>
                <th style={{ width: "10%" }} className="head h5">
                  Price
                </th>
                <th style={{ width: "20%" }} className="head h5">
                  Quantity
                </th>
                <th style={{ width: "20%" }} className="text-center head h5">
                  Subtotal
                </th>
              </tr>
            </thead>

            {this.props.cartDataHere.cartData.map(data => (
              <CartDetails
                key={data.Data._id}
                productId={data.Data._id}
                image={data.Data.image}
                productName={data.Data.pName}
                description={data.Data.description}
                price={data.Data.price}
                quantity={data.quantity}
              ></CartDetails>
            ))}
            <tfoot>
              <tr>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={this.navigateToCategory}
                  >
                    Continue Shopping
                  </button>
                </td>
                <td colSpan="2" className="hidden-xs"></td>
                <td className="hidden-xs text-center">
                  <strong>
                    Total{" "}
                    {this.props.cartDataHere.cartData.reduce(
                      (prev, next) => prev + next.Data.price * next.quantity,
                      0
                    )}
                  </strong>
                </td>
                <td>
                  <button
                    onClick={this.checkOut}
                    className="btn btn-success btn-block"
                  >
                    Checkout
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )
    ) : this.props.cartDataHere.cartData.length === 0 ? (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <img className="img-fluid rounded" src={Cart} alt="Empty"></img>
          </div>
        </div>
        <div className="alert alert-info" role="alert">
          Your Shopping cart is empty!!!
        </div>
      </div>
    ) : (
      <div className="container">
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={{ width: "50%" }} className="head h5">
                Product
              </th>
              <th style={{ width: "10%" }} className="head h5">
                Price
              </th>
              <th style={{ width: "20%" }} className="head h5">
                Quantity
              </th>
              <th style={{ width: "20%" }} className="text-center head h5">
                Subtotal
              </th>
            </tr>
          </thead>

          {this.props.cartDataHere.cartData.map(data => (
            <CartDetails
              key={data.Data._id}
              productId={data.Data._id}
              image={data.Data.image}
              productName={data.Data.pName}
              description={data.Data.description}
              price={data.Data.price}
              quantity={data.quantity}
            ></CartDetails>
          ))}
          <tfoot>
            <tr>
              <td>
                <button className="btn btn-warning">Continue Shopping</button>
              </td>
              <td colSpan="2" className="hidden-xs"></td>
              <td className="hidden-xs text-center">
                <strong>
                  Total{" "}
                  {this.props.cartDataHere.cartData.reduce(
                    (prev, next) => prev + next.Data.price * next.quantity,
                    0
                  )}
                </strong>
              </td>
              <td>
                <button
                  onClick={this.checkOut}
                  className="btn btn-success btn-block"
                >
                  Checkout
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    cartDataHere: state.cartDataProduct,
    checkLoggedInStatus: state.loginUserData
  };
};
export default connect(mapStateToProps, { sendCartDataToEmail })(CartUI);
