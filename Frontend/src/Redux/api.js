import axios from "axios";
import { LoggedInReqHeader } from "../ReqHeader/LoggedIn";

let config = {
  headers: {
    "Content-type": "application/json"
  }
  
};

export const getProduct = (category, subcategory) => {
  return axios.get(
    `http://localhost:4000/api/category/${category}/subcategory/${subcategory}`,
    config
  );
};

export const register = data => {
  
  return axios.post(
    `http://localhost:4000/api/newuser`,
    JSON.stringify(data),
    config
  );
};

export const login = data => {
  return axios.post(
    `http://localhost:4000/api/login`,
    JSON.stringify(data),
    config
  );
};

//Api For Current logged in user.
export const currentUserLoggedIn = () => {
  return axios.get(
    `http://localhost:4000/api/currentUser`,
    { headers: LoggedInReqHeader() },
    config
  );
};

//Add To Cart By User.
export const addToCartByUser = data => {
  return axios.post(
    `http://localhost:4000/api/cartbyuser`,
    JSON.stringify(data),
    config
  );
};

//Fetch Add To Cart By User Data.

export const fetchAddToCartByUser = emailId => {
  return axios.get(
    `http://localhost:4000/api/fetchCartByUser/UserCart/${emailId}`,
    config
  );
};

export const getProductByCategory = category => {
  debugger
  return axios.get(`http://localhost:4000/api/category/${category}`, config);
};

export const getParticularProduct = productid => {
  return axios.get(
    `http://localhost:4000/api/ParticularProduct/${productid}`,
    config
  );
};

export const oneProductAtaTime = productid => {
  return axios.get(`http://localhost:4000/api/OneProduct/${productid}`, config);
};

//Invoice APi For Sending Data.

export const sendInvoiceData = invoiceData => {
  return axios.post(
    `http://localhost:4000/api/sendInvoiceData`,
    JSON.stringify(invoiceData),
    config
  );
};

// Invoice Api for fetching API.

export const FetchInvoiceData = email => {
  return axios.get(`http://localhost:4000/api/getInvoiceData/${email}`, config);
};

export const deleteCart = email => {
  return axios.delete(`http://localhost:4000/api/deleteCart/${email}`, config);
};

export const deleteInvoice = email => {
  return axios.delete(
    `http://localhost:4000/api/deleteInvoice/${email}`,
    config
  );
};

//Forgot Password API
//Send reset password link to concern user.

export const resetPassword = dataEmail => {
  return axios.post(
    `http://localhost:4000/api/mail`,
    JSON.stringify(dataEmail),
    config
  );
};

export const resetPasswordNextStep = (token, dataPassword) => {
  return axios.post(
    `http://localhost:4000/api/reset/${token}`,
    JSON.stringify(dataPassword),
    config
  );
};

export const GetEmailForResetPass = email => {
  return axios.get(`http://localhost:4000/api/OneUserData/${email}`, config);
};
