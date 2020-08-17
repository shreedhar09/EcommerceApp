import React, { useState } from "react";
import { Button, ButtonToolbar, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LogoutAction, sendCartDataToEmail } from "../Redux/AuthAction";
import { Navbar, Nav } from "react-bootstrap";
import MyVerticallyCenteredModal from "./ModalUI";
import { history } from "../History/History";
import addToCart from "../uploads/addToCart.png";

function NavingationUI(props) {
  const [modalShow, setModalShow] = useState(false);

  const selectTV = () => {
    history.push("/TV");
    window.location.reload();
  };
  const selectMobile = () => {
    history.push("/Mobile");
    window.location.reload();
  };
  const selectTShirt = () => {
    history.push("/TShirt");
    window.location.reload();
  };
  const selectJeans = () => {
    history.push("/Jeans");
    window.location.reload();
  };
  const LetsLogout = async () => {
    if (props.finalSendData.cartData.length === 0) {
      let CartDataArray = props.finalSendData.cartData.map(data => {
        return data;
      });

      let OrderSummary = {
        emailId: props.loggedInState.user.data.Data.userlogin.emailId,
        cartItem: [...CartDataArray]
      };
      console.log(OrderSummary);
      await props.sendCartDataToEmail(OrderSummary);
      await props.LogoutAction();
    } else {
      let CartDataArray = props.finalSendData.cartData.map(data => {
        return data;
      });

      let OrderSummary = {
        emailId: props.loggedInState.user.data.Data.userlogin.emailId,
        cartItem: [...CartDataArray]
      };
      console.log(OrderSummary);
      await props.sendCartDataToEmail(OrderSummary);
      await props.LogoutAction();
    }
  };
  return (
    <React.Fragment>
      {/* {console.log(props.isUserLoggedIn)} */}
      <Navbar bg="light" expand="lg">
        <Link className="navbar-brand" to="/home">
          Souled Out
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/home">
              Home <span className="sr-only">(current)</span>
            </Link>

            <Link className="nav-link" to="/category">
              Shop By Category
            </Link>
            <Dropdown>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                Products
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Header>Electronics</Dropdown.Header>
                <Dropdown.Item as="button" onClick={selectTV}>
                  TV
                </Dropdown.Item>
                <Dropdown.Item as="button" onClick={selectMobile}>
                  Mobile
                </Dropdown.Item>
                <Dropdown.Header>Clothing</Dropdown.Header>
                <Dropdown.Item as="button" onClick={selectTShirt}>
                  T-Shirt
                </Dropdown.Item>
                <Dropdown.Item as="button" onClick={selectJeans}>
                  Jeans
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <li className="nav-item">
              <ButtonToolbar>
                <Button
                  variant="transparent"
                  onClick={() => setModalShow(true)}
                >
                  Contact Us
                </Button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </ButtonToolbar>
            </li>

            {props.loggedInState.loggedIn ? (
              <React.Fragment>
                <Link className="nav-link" to="/category" onClick={LetsLogout}>
                  Logout
                </Link>

                <span className="nav-link text-primary">
                  {props.loggedInState.user.data.Data.firstname}
                </span>
              </React.Fragment>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <img
        onClick={() => {
          history.push("/cart");
          window.location.reload();
        }}
        src={addToCart}
        className="img-fluid fixed-bottom "
        alt="cart"
      ></img>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  console.log(state);

  return {
    loggedInState: state.loginUserData,
    finalSendData: state.cartDataProduct
  };
};

export default connect(mapStateToProps, { LogoutAction, sendCartDataToEmail })(
  NavingationUI
);
