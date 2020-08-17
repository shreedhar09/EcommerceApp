import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { Radio, RadioGroup } from "react-radio-group";
import { connect } from "react-redux";
import {
  fetchCartDataToEmail,
  sendInvoiceDataAction
} from "../Redux/AuthAction";
import SimpleReactValidator from "simple-react-validator";
import { history } from "../History/History";
export class CheckoutUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      contact: "",
      pincode: "",
      adress: "",
      city: "",
      StateName: "",
      payment: "Cash On Delivery"
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }
  async componentDidMount() {
    if (this.props.fetchEmail.loggedIn) {
      let a = this.props.fetchEmail.user.data.Data.userlogin.emailId;
      await this.props.fetchCartDataToEmail(a);
    }
  }
  getInputName = e => {
    this.setState({ name: e.target.value });
  };

  getInputContact = e => {
    this.setState({ contact: e.target.value });
  };

  getInputpincode = e => {
    this.setState({ pincode: e.target.value });
  };

  getInputadress = e => {
    this.setState({ adress: e.target.value });
  };

  getInputcity = e => {
    this.setState({ city: e.target.value });
  };

  getInputstate = e => {
    this.setState({ StateName: e.target.value });
  };

  getInputpayment = value => {
    this.setState({ payment: value });
  };

  store = () => {
    if (this.props.checkOutCart.userCartData) {
      let CartTransfer = this.props.checkOutCart.userCartData.map(data => {
        return data;
      });
      let FinalData = {
        name: this.state.name,
        contact: this.state.contact,
        pincode: this.state.pincode,
        adress: this.state.adress,
        city: this.state.city,
        summary: [...CartTransfer],
        StateName: this.state.StateName,
        payment: this.state.payment,
        email: this.props.fetchEmail.user.data.Data.userlogin.emailId
      };
      return FinalData;
    }
  };

  sendInvoiceData = async () => {
    if (this.validator.allValid()) {
      let sendData = this.store();
      await this.props.sendInvoiceDataAction(
        sendData,
        this.props.fetchEmail.user.data.Data.userlogin.emailId
      );
      history.push("/invoice");
      window.location.reload();
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div className="bgImg">
        <div className="container">
          <div className="row" style={{ paddingTop: "20px" }}>
            <div className="col-lg-12">
              {/* 4 Blog */}
              <div className="row">
                <div className="col-lg-6">
                  <div className="alert alert-info" role="alert">
                    <strong>Checkout!!!!</strong>
                  </div>
                </div>
                <div className="col-lg-6">
                  <Accordion>
                    <Card className="mt-1">
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="btn"
                          eventKey="1"
                        >
                          Address
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <form>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label className="float-left">Name</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.getInputName}
                                  />
                                  {this.validator.message(
                                    "Name",
                                    this.state.name,
                                    "min:4|required"
                                  )}
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label className="float-left">
                                    Contact No
                                  </label>
                                  <input
                                    className="form-control"
                                    type="number"
                                    value={this.state.contact}
                                    onChange={this.getInputContact}
                                  />
                                  {this.validator.message(
                                    "Contact Number",
                                    this.state.contact,
                                    "min:10|max:10|required"
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label className="float-left">Pincode</label>
                                  <input
                                    className="form-control"
                                    placeholder="Pincode"
                                    type="number"
                                    value={this.state.pincode}
                                    onChange={this.getInputpincode}
                                  />
                                  {this.validator.message(
                                    "Pincode",
                                    this.state.pincode,
                                    "min:6|required"
                                  )}
                                </div>
                              </div>
                              <div className="col-lg-6"></div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label className="float-left">Address</label>
                                  <textarea
                                    class="form-control"
                                    aria-label="With textarea"
                                    value={this.state.adress}
                                    onChange={this.getInputadress}
                                  ></textarea>
                                  {this.validator.message(
                                    "Address",
                                    this.state.adress,
                                    "min:10|required"
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label className="float-left">City</label>
                                  <input
                                    className="form-control"
                                    placeholder="City"
                                    type="text"
                                    value={this.state.city}
                                    onChange={this.getInputcity}
                                  />
                                  {this.validator.message(
                                    "City",
                                    this.state.city,
                                    "min:3|required"
                                  )}
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label className="float-left">State</label>
                                  <input
                                    className="form-control"
                                    placeholder="State"
                                    type="text"
                                    value={this.state.StateName}
                                    onChange={this.getInputstate}
                                  />
                                  {this.validator.message(
                                    "State",
                                    this.state.StateName,
                                    "min:3|required"
                                  )}
                                </div>
                              </div>
                            </div>
                          </form>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="mt-1">
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="btn"
                          eventKey="2"
                        >
                          Order Summary
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <div class="container">
                            <table
                              id="cart"
                              class="table table-hover table-condensed"
                            >
                              <thead>
                                <tr>
                                  <th
                                    style={{ width: "50%" }}
                                    className="head h5"
                                  >
                                    Product
                                  </th>
                                  <th
                                    style={{ width: "10%" }}
                                    className="head h5"
                                  >
                                    Price
                                  </th>
                                  <th
                                    style={{ width: "20%" }}
                                    className="head h5"
                                  >
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
                              {this.props.checkOutCart.userCartData ? (
                                this.props.checkOutCart.userCartData.map(
                                  data => (
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
                                              <h4 className="nomargin">
                                                {data.Data.pName}
                                              </h4>
                                              <p>{data.Data.description}</p>
                                            </div>
                                          </div>
                                        </td>
                                        <td data-th="Price">
                                          {data.Data.price}
                                        </td>
                                        <td data-th="Quantity">
                                          {data.quantity}
                                        </td>
                                        <td
                                          data-th="Subtotal"
                                          className="text-center"
                                        >
                                          {data.Data.price * data.quantity}
                                        </td>
                                      </tr>
                                    </tbody>
                                  )
                                )
                              ) : (
                                <h1>Something Went Worng.....</h1>
                              )}

                              <tfoot>
                                <tr>
                                  <td colSpan="2" className="hidden-xs"></td>
                                  <td className="hidden-xs text-center">
                                    <strong>
                                      Total{" "}
                                      {this.props.checkOutCart.userCartData ? (
                                        this.props.checkOutCart.userCartData.reduce(
                                          (prev, next) =>
                                            prev +
                                            next.Data.price * next.quantity,
                                          0
                                        )
                                      ) : (
                                        <h1>Something Went Worng!!!!</h1>
                                      )}
                                    </strong>
                                  </td>
                                </tr>
                              </tfoot>
                            </table>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                    <Card className="mt-1">
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="btn"
                          eventKey="3"
                        >
                          Payment Options
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>
                          <div className="row" style={{ margin: "10px" }}>
                            <RadioGroup
                              name="payment"
                              selectedValue={this.state.payment}
                              onChange={this.getInputpayment}
                            >
                              <Radio
                                value="Credit /
                              Debit / ATM Car"
                                className="ml-4"
                              />{" "}
                              Credit / Debit / ATM Car
                              <Radio
                                value="Cash On
                              Delivery"
                                className="ml-4"
                              />{" "}
                              Cash On Delivery
                            </RadioGroup>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            onClick={() => this.sendInvoiceData()}
                          >
                            Confirm Order
                          </button>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    fetchEmail: state.loginUserData,
    checkOutCart: state.CheckoutCartData
  };
};
export default connect(mapStateToProps, {
  fetchCartDataToEmail,
  sendInvoiceDataAction
})(CheckoutUI);
