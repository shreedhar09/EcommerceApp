import React, { Component } from "react";
import NavingationUI from "../ComponentUI/NavingationUI";
import { SaveGoogleAuthDataAction } from "../Redux/AuthAction";
import { connect } from "react-redux";

export class Navigation extends Component {
  componentDidMount() {
    this.props.SaveGoogleAuthDataAction();
  }
  render() {
    return (
      <React.Fragment>
        <NavingationUI
          isUserLoggedIn={this.props.UserSigninData}
        ></NavingationUI>
      </React.Fragment>
    );
  }
}
let mapStateToProps = state => {
  return {
    UserSigninData: state.SigninData
  };
};
export default connect(mapStateToProps, { SaveGoogleAuthDataAction })(
  Navigation
);
