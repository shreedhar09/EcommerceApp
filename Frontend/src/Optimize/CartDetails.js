import React, { Component } from "react";
import {
  removeFromCartAction,
  addQuantityAction,
  removeQuantityAction
} from "../Redux/Cart/ActionCart";
import { connect } from "react-redux";

export class CartDetails extends Component {
  render() {
    return (
      <tbody key={this.props.productId}>
        <tr>
          <td data-th="Product">
            <div className="row">
              <div className="col-sm-2 hidden-xs">
                <img src={this.props.image} alt="Cart" className="img-fluid" />
              </div>
              <div className="col-sm-10">
                <h4 className="nomargin">{this.props.productName}</h4>
                <p>{this.props.description}</p>
              </div>
            </div>
          </td>
          <td data-th="Price">{this.props.price}</td>
          <td data-th="Quantity">
            <button
              className="btn  mr-2  bg-transparent border-0"
              onClick={() => {
                this.props.addQuantityAction(this.props.productId);
              }}
            >
              <span className="h1 text-success">+</span>
            </button>
            {this.props.quantity}
            <button
              className="btn  ml-2  bg-transparent border-0"
              onClick={() => {
                this.props.removeQuantityAction(this.props.productId);
              }}
            >
              <span className="h1 text-danger">━</span>
            </button>
          </td>
          <td data-th="Subtotal" className="text-center">
            {this.props.price * this.props.quantity}
          </td>
          <td className="actions" data-th="">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => {
                this.props.removeFromCartAction(this.props.productId);
              }}
            >
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default connect(null, {
  addQuantityAction,
  removeQuantityAction,
  removeFromCartAction
})(CartDetails);
