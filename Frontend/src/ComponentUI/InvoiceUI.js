import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FetchInvoiceDataAction,
  deleteInvoiceAction
} from "../Redux/AuthAction";

export class InvoiceUI extends Component {
  async componentDidMount() {
    if (this.props.fetchEmailInvoice.loggedIn) {
      let emailCart = this.props.fetchEmailInvoice.user.data.Data.userlogin
        .emailId;
      await this.props.FetchInvoiceDataAction(emailCart);
    }
  }
  gotoShop = async email => {
    await this.props.deleteInvoiceAction(email);
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h3 className="float-left head">Souled Out</h3>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <h3 className="float-right text-info invoiceFontOne">
                Tax Invoice
              </h3>
            </div>
          </div>
          <hr className="bg-dark"></hr>
          {this.props.invoice.Data ? (
            <div className="row">
              <div className="col-lg-4">
                <p>
                  <div class="alert alert-success head" role="alert">
                    Order Date:{" "}
                    {this.props.invoice.Data.recordDate.slice(0, 10)}
                  </div>
                </p>
                <p>
                  <div class="alert alert-success head" role="alert">
                    Invoice Date:{" "}
                    {this.props.invoice.Data.recordDate.slice(0, 10)}
                  </div>
                </p>
              </div>

              <div className="col-lg-8">
                <div class="alert alert-info text-center" role="alert">
                  <h3 className="head">Shipping Address</h3>
                  <div className="row">
                    <p className="head">
                      Address : {this.props.invoice.Data.adress}
                      {", "}
                      {this.props.invoice.Data.pincode}
                      {", "}
                      {this.props.invoice.Data.city}
                      {", "}
                      {this.props.invoice.Data.StateName}
                    </p>
                  </div>
                  <div className="row">
                    <p className="head">
                      Contact No: {this.props.invoice.Data.contact}{" "}
                    </p>
                  </div>
                  <div className="row">
                    <p className="head">
                      Email: {this.props.invoice.Data.email}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <h1>Waiting For Response.....</h1>
          )}

          <div className="row">
            <div class="container">
              <table id="cart" class="table table-hover table-condensed">
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
                    <th
                      style={{ width: "20%" }}
                      className="text-center head h5"
                    >
                      Subtotal
                    </th>
                  </tr>
                </thead>
                {this.props.invoice.Data ? (
                  this.props.invoice.Data.summary.map(data => (
                    <tbody>
                      <tr>
                        <td data-th="Product">
                          <div className="row">
                            <div className="col-sm-2 hidden-xs">
                              <img
                                src={data.Data.image}
                                alt="Cart"
                                className="img-fluid"
                              />
                            </div>
                            <div className="col-sm-10">
                              <h4 className="nomargin">{data.Data.pName}</h4>
                              <p>{data.Data.description}</p>
                            </div>
                          </div>
                        </td>
                        <td data-th="Price">{data.Data.price}</td>
                        <td data-th="Quantity">{data.quantity}</td>
                        <td data-th="Subtotal" className="text-center">
                          {data.Data.price * data.quantity}
                        </td>
                      </tr>
                    </tbody>
                  ))
                ) : (
                  <h1>Waiting For Response.....</h1>
                )}

                <tfoot>
                  <tr>
                    <td colSpan="3" className="hidden-xs"></td>
                    <td className="hidden-xs text-center">
                      <strong>
                        Total{" "}
                        {this.props.invoice.Data ? (
                          this.props.invoice.Data.summary.reduce(
                            (prev, next) =>
                              prev + next.Data.price * next.quantity,
                            0
                          )
                        ) : (
                          <h1>Waiting For Response.....</h1>
                        )}
                      </strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className="row">
            <div class="alert alert-success head" role="alert">
              <strong>Note</strong> : Delivery is expected to occur after{" "}
              <strong>10 Working Days</strong>
            </div>
          </div>
          <div className="row float-right">
            <div class="alert head " role="alert">
              <div className="row">
                <strong>thank you for shopping with us</strong>
              </div>
              <div className="row float-right">
                <strong>- Souled Out</strong>
              </div>
            </div>
          </div>
          {this.props.invoice.Data ? (
            <button
              className="btn btn-primary float-left"
              onClick={() => this.gotoShop(this.props.invoice.Data.email)}
            >
              Continue Shopping
            </button>
          ) : (
            <h1>Waiting For Response.....</h1>
          )}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    fetchEmailInvoice: state.loginUserData,
    invoice: state.invoiceData
  };
};
export default connect(mapStateToProps, {
  FetchInvoiceDataAction,
  deleteInvoiceAction
})(InvoiceUI);
