import React, { Component } from "react";
import { connect } from "react-redux";
import {
  resetPasswordAction,
  GetEmailForResetPassAction
} from "../Redux/AuthAction";

export class ResetTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userlogin: {
        emailId: "",
        password: ""
      }
    };
  }

  getInputPassword = e => {
    let tempObjToStorePassword = Object.assign({}, this.state.userlogin);
    tempObjToStorePassword.password = e.target.value;
    this.setState({ userlogin: tempObjToStorePassword });
    //console.log(tempObjToStorePassword.password);
  };
  getInputEmail = e => {
    let tempObjToStoreEmail = Object.assign({}, this.state.userlogin);
    tempObjToStoreEmail.emailId = e.target.value;
    this.setState({ userlogin: tempObjToStoreEmail });
    // console.log(tempObjToStoreEmail.emailId)
  };
  store = () => {
    return {
      userlogin: {
        password: this.state.userlogin.password
      }
    };
  };
  passwordChange = async () => {
    if (this.props.tokenFetch) {
      let changePass = this.store();
      await this.props.GetEmailForResetPassAction(this.state.userlogin.emailId);

      await this.props.resetPasswordAction(
        this.props.tokenFetch.Data.resetPasswordToken,
        changePass
      );
    }
  };
  render() {
    
    console.log(this.props);

    return (
      <div
        className="card"
        style={{ width: "30rem", marginTop: "30px", marginLeft: "30px" }}
      >
        <div className="card-body">
          <h5 className="card-title">Change Your Password Here</h5>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              className="form-control"
              value={this.state.userlogin.password}
              placeholder="Enter a New Password..."
              onChange={this.getInputPassword}
            />
            <label htmlFor="exampleInputPassword1">Email</label>
            <input
              className="form-control"
              value={this.state.userlogin.emailId}
              placeholder="Enter a email..."
              onChange={this.getInputEmail}
            />
          </div>
          <button
            type="submit"
            className="btn btn-block btn-primary"
            onClick={this.passwordChange}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    tokenFetch: state.resetTimeEmailPass
  };
};
export default connect(mapStateToProps, {
  resetPasswordAction,
  GetEmailForResetPassAction
})(ResetTime);
