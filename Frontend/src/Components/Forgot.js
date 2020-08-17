import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMailAction } from "../Redux/AuthAction";

export class Forgot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userlogin: {
        emailId: ""
      }
    };
  }

  getInputEmail = e => {
    let tempObjToStoreEmail = Object.assign({}, this.state.userlogin);
    tempObjToStoreEmail.emailId = e.target.value;
    this.setState({ userlogin: tempObjToStoreEmail });
    // console.log(tempObjToStoreEmail.emailId)
  };
  store = () => {
    return {
      userlogin: {
        emailId: this.state.userlogin.emailId
      }
    };
  };
  sendResetReq = async () => {
    let SendEmail = this.store();

    console.log(SendEmail);

    await this.props.sendMailAction(SendEmail);

    alert("Please Check Your Email");
  };

  render() {
    return (
      <div
        className="card"
        style={{ width: "30rem", marginTop: "30px", marginLeft: "30px" }}
      >
        <div className="card-body">
          <h5 className="card-title">Change Your Password Here</h5>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Email</label>
            <input
              type="email"
              className="form-control"
              value={this.state.userlogin.emailId}
              placeholder="Email"
              onChange={this.getInputEmail}
            />
          </div>
          <button
            type="submit"
            className="btn btn-block btn-primary"
            onClick={this.sendResetReq}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  sendMailAction
})(Forgot);
