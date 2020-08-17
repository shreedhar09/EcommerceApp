import React, { Component } from "react";
import {
  userSignInAction,
  registerAction,
  loginAction,
  FetchAndStoreAction
} from "../Redux/AuthAction";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { Link } from "react-router-dom";
export class LoginUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginPopUP: true,
      registerPopUP: false,
      userloginSignIn: {
        emailIdSignIn: "",
        passwordSignIn: ""
      },
      firstname: "",
      userlogin: {
        emailId: "",
        password: ""
      },
      termsPasswordCheck: false
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    this.validators = new SimpleReactValidator({ autoForceUpdate: this });
  }

  registerPop = () => {
    this.setState({ loginPopUP: false, registerPopUP: true });
  };

  loginPop = () => {
    this.setState({ registerPopUP: false, loginPopUP: true });
  };

  userSignInEvent = () => {
    this.props.userSignInAction();
  };

  getInputEmailSignUp = e => {
    let tempObjToStoreEmail = Object.assign({}, this.state.userlogin);
    tempObjToStoreEmail.emailId = e.target.value;
    this.setState({ userlogin: tempObjToStoreEmail });
    //console.log(tempObjToStoreEmail.emailId)
  };

  getInputNameSignUp = e => {
    this.setState({ firstname: e.target.value });
  };

  getInputPasswordSignUp = e => {
    let tempObjectToStorePassword = Object.assign({}, this.state.userlogin);
    tempObjectToStorePassword.password = e.target.value;
    this.setState({
      userlogin: tempObjectToStorePassword
    });
  };

  getInputTermsPasswordCheck = e => {
    let isChecked = e.target.checked;
    this.setState({ termsPasswordCheck: isChecked });
  };

  getInputEmailSignIn = e => {
    let tempObjToStoreEmailSignIn = Object.assign(
      {},
      this.state.userloginSignIn
    );
    tempObjToStoreEmailSignIn.emailIdSignIn = e.target.value;
    this.setState({ userloginSignIn: tempObjToStoreEmailSignIn });
    //console.log(tempObjToStoreEmailSignIn.emailIdSignIn);
  };

  getInputPasswordSignIn = e => {
    let tempObjectToStorePasswordSignIn = Object.assign(
      {},
      this.state.userloginSignIn
    );
    tempObjectToStorePasswordSignIn.passwordSignIn = e.target.value;
    this.setState({
      userloginSignIn: tempObjectToStorePasswordSignIn
    });
    //console.log(tempObjectToStorePasswordSignIn.passwordSignIn);
  };

  store = () => {
    return {
      firstname: this.state.firstname,
      userlogin: {
        emailId: this.state.userlogin.emailId,
        password: this.state.userlogin.password
      },

      termsPasswordCheck: this.state.termsPasswordCheck
    };
  };
  sendRegisterData = () => {
    if (this.validator.allValid()) {
      let sendData = this.store();
      this.props.registerAction(sendData);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  storeSignInData = () => {
    return {
      userloginSignIn: {
        emailIdSignIn: this.state.userloginSignIn.emailIdSignIn,
        passwordSignIn: this.state.userloginSignIn.passwordSignIn
      }
    };
  };
  sendSignInData = async () => {
    debugger
    console.log("Login UI");
    if (this.validators.allValid()) {
      let sendData = this.storeSignInData();
      await this.props.loginAction(sendData);
      await this.props.FetchAndStoreAction(
        this.state.userloginSignIn.emailIdSignIn
      );
    } else {
      this.validators.showMessages();
      this.forceUpdate();
    }
  };
  render() {
    return (
      <div className="backLogin">
        <div className="container">
          <div className="row auth">
            <div className="col-lg-4">
              {this.state.loginPopUP ? (
                <div>
                  {this.props.afterLoginMessage.error ? (
                    <div
                      class="alert alert-info cardAuthOutline mt-2"
                      role="alert"
                    >
                      {this.props.afterLoginMessage.error.data.Message}
                    </div>
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
                  <div className="card cardAuthOutline">
                    <div className="card-header head">Sign in</div>
                    <article className="card-body">
                      <button
                        onClick={this.registerPop}
                        className="float-right btn btn-outline-primary mb-1"
                      >
                        Sign Up
                      </button>

                      <form>
                        <div className="form-group">
                          <label className="float-left head">Emailhhhh</label>
                          <input
                            className="form-control"
                            value={this.state.userloginSignIn.emailIdSignIn}
                            onChange={this.getInputEmailSignIn}
                            type="email"
                            autoComplete="off"
                          />
                          {this.validators.message(
                            "Email",
                            this.state.userloginSignIn.emailIdSignIn,
                            "email|required"
                          )}
                        </div>
                        <div className="form-group">
                          <Link
                            className="float-right text-primary head"
                            to="/forgot"
                          >
                            Forgot?
                          </Link>
                          <label className="float-left head">Password</label>
                          <input
                            className="form-control"
                            value={this.state.userloginSignIn.passwordSignIn}
                            onChange={this.getInputPasswordSignIn}
                            type="password"
                            autoComplete="off"
                          />
                          {this.validators.message(
                            "Password",
                            this.state.userloginSignIn.passwordSignIn,
                            "required|min:3"
                          )}
                        </div>
                      </form>
                    </article>
                    <div className="card-footer text-muted">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          onClick={this.sendSignInData}
                        >
                          Login
                        </button>
                        <button
                          type="submit"
                          className="btn btn-outline-primary btn-block"
                          onClick={this.userSignInEvent}
                        >
                          Sign-in with Google
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {this.state.registerPopUP ? (
                <React.Fragment>
                  <div className="card cardAuthOutline">
                    <div className="card-header head">Sign up</div>

                    <article className="card-body">
                      <button
                        onClick={this.loginPop}
                        className="float-right btn btn-outline-primary mb-1"
                      >
                        Sign in
                      </button>

                      <form>
                        <div className="form-group">
                          <label className="float-left head">Email</label>
                          <input
                            name=""
                            className="form-control"
                            value={this.state.userlogin.emailId}
                            onChange={this.getInputEmailSignUp}
                            type="email"
                            autoComplete="off"
                          />
                          {this.validator.message(
                            "Email",
                            this.state.userlogin.emailId,
                            "email|required"
                          )}
                        </div>
                        <div className="form-group">
                          <label className="float-left head">Name</label>
                          <input
                            name=""
                            className="form-control"
                            value={this.state.firstname}
                            onChange={this.getInputNameSignUp}
                            type="text"
                          />
                          {this.validator.message(
                            "Name",
                            this.state.firstname,
                            "required|min:3"
                          )}
                        </div>

                        <div className="form-group">
                          <label className="float-left head">Password</label>
                          <input
                            className="form-control"
                            value={this.state.userlogin.password}
                            onChange={this.getInputPasswordSignUp}
                            type="password"
                            autoComplete="off"
                          />
                          {this.validator.message(
                            "Password",
                            this.state.userlogin.password,
                            "required|min:6"
                          )}
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            value={this.state.termsPasswordCheck}
                            onChange={e => this.getInputTermsPasswordCheck(e)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Accept Terms and Policy
                          </label>
                        </div>
                      </form>
                    </article>

                    <div className="card-footer text-muted ">
                      <div className="form-group">
                        <button
                          type="button"
                          className="btn btn-primary btn-block"
                          onClick={this.sendRegisterData}
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ) : null}
            </div>
            {this.props.afterRegisterMessage.success ? (
              <div className="col-lg-4">
                <div className="alert alert-info" role="alert">
                  {this.props.afterRegisterMessage.success.Message}
                  {window.location.reload()}
                </div>
              </div>
            ) : (
              <div className="col-lg-4"></div>
            )}
            {!this.props.afterRegisterMessage.error ? (
              <div className="col-lg-4"></div>
            ) : (
              <div className="col-lg-4">
                <div className="alert alert-info" role="alert">
                  {this.props.afterRegisterMessage.error.data.Message}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    afterRegisterMessage: state.registerUser,
    afterLoginMessage: state.loginUserData
  };
};
export default connect(mapStateToProps, {
  userSignInAction,
  registerAction,
  loginAction,

  FetchAndStoreAction
})(LoginUI);
