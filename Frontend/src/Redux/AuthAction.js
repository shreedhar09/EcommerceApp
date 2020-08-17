import { auth, googleProvider } from "../Firebase/Firebase";
import { history } from "../History/History";
import {
  getProduct,
  register,
  login,
  getProductByCategory,
  getParticularProduct,
  currentUserLoggedIn,
  addToCartByUser,
  fetchAddToCartByUser,
  sendInvoiceData,
  FetchInvoiceData,
  deleteCart,
  deleteInvoice,
  resetPassword,
  resetPasswordNextStep,
  GetEmailForResetPass
} from "./api";

//User Sign in Action.
export const userSignInAction = () => {
  return async dispatch => {
    await auth.signInWithPopup(googleProvider);
    history.push("/category");
    window.location.reload();
  };
};

//Saving the State Of Athentication.
export const SaveGoogleAuthDataAction = () => {
  return async dispatch => {
    await auth.onAuthStateChanged(response => {
      dispatch({ type: "google_auth", payload: response });
    });
  };
};

//Sign Out Action

export const signOut = () => {
  return async dispatch => {
    await auth.signOut();
    history.push("/home");
    window.location.reload();
  };
};

//Register New User.

export const registerAction = data => {
  return async dispatch => {
    try {
      let sendData = await register(data);
      console.log(sendData);

      dispatch({ type: "Send_Register_Data", payload: sendData.data });
    } catch (ex) {
      dispatch({ type: "Error", payload: ex.response });
    }
  };
};

//Login User

export const loginAction = data => {
  return async dispatch => {
    try {
      let sendData = await login(data);

      localStorage.setItem("LoggedInUser", JSON.stringify(sendData));

      await dispatch({
        type: "Send_Login_Data",
        payload: sendData.data
      });
      history.push("/category");
      window.location.reload();
    } catch (ex) {
      dispatch({ type: "Error", payload: ex.response });
    }
  };
};

// Action For Current User Logged In.

export const currentUserAction = () => {
  return async dispatch => {
    try {
      let loggedInData = await currentUserLoggedIn();
      dispatch({ type: "Send_LoggedInUser_Data", payload: loggedInData.data });
    } catch (ex) {
      dispatch({ type: "Error", payload: ex.response });
    }
  };
};

//For Logout
export const LogoutAction = () => {
  return async dispatch => {
    localStorage.removeItem("LoggedInUser");
    localStorage.removeItem("persist:UserCart");
    dispatch({ type: "Logout" });
    history.push("/login");
    window.location.reload();
  };
};

//Action For Loading and For Error.

export const getProductByCategoryRequestAction = () => {
  return async dispatch => {
    dispatch({ type: "Fetch_Request" });
  };
  
};

export const getProductByCategoryFailureAction = error => {
  return async dispatch => {
    dispatch({ type: "Fetch_Request_Failure", payload: error });
  };
};

//Get Product By Category

export const getProductByCategoryAction = cat => { 
  return async dispatch => {
    try {
    
      dispatch(getProductByCategoryRequestAction());
      let FetchData = await getProductByCategory(cat);
    
      dispatch({ type: "Get_ProductByCategory_Info", payload: FetchData.data });
    } catch (error) {
      getProductByCategoryFailureAction(error);
    }
  };
};

//Get Specific Product TV

export const getProductTVAction = (cat, subcat) => {
  return async dispatch => {
    try {
      dispatch(getProductByCategoryRequestAction());
      let FetchData = await getProduct(cat, subcat);
      console.log(FetchData);

      dispatch({ type: "Get_Product_Info", payload: FetchData.data });
    } catch (error) {
      getProductByCategoryFailureAction(error);
    }
  };
};

//Get Specific Product Mobile

export const getProductMobileAction = (cat, subcat) => {
  return async dispatch => {
    try {
      dispatch(getProductByCategoryRequestAction());
      let FetchData = await getProduct(cat, subcat);
      console.log(FetchData);

      dispatch({ type: "Get_Product_Mobile_Info", payload: FetchData.data });
    } catch (error) {
      getProductByCategoryFailureAction(error);
    }
  };
};

//Get Specific Product T-shirt

export const getProductTShirtAction = (cat, subcat) => {
  return async dispatch => {
    try {
      dispatch(getProductByCategoryRequestAction());
      let FetchData = await getProduct(cat, subcat);
      //console.log(FetchData);

      dispatch({ type: "Get_Product_TShirt_Info", payload: FetchData.data });
    } catch (error) {
      getProductByCategoryFailureAction(error);
    }
  };
};

//Get Specific Product Jeans

export const getProductJeansAction = (cat, subcat) => {
  return async dispatch => {
    try {
      dispatch(getProductByCategoryRequestAction());
      let FetchData = await getProduct(cat, subcat);
      console.log(FetchData);

      dispatch({ type: "Get_Product_Jeans_Info", payload: FetchData.data });
    } catch (error) {
      getProductByCategoryFailureAction(error);
    }
  };
};

// Get Particular Product

export const getParticularProductAction = productid => {
  return async dispatch => {
    try {
      dispatch(getProductByCategoryRequestAction());
      let FetchData = await getParticularProduct(productid);

      dispatch({
        type: "Get_Particular_Product_Info",
        payload: FetchData.data
      });
    } catch (error) {
      getProductByCategoryFailureAction(error);
    } 
  };
};

export const sendCartDataToEmail = data => {
  return async () => {
    try {
      await addToCartByUser(data);
    } catch (error) {
      return error.message;
    }
  };
};

export const fetchCartDataToEmail = emailId => {
  return async dispatch => {
    try {
      let fetchCartData = await fetchAddToCartByUser(emailId);
      console.log(fetchCartData);

      dispatch({ type: "Fetch_Add_To_Cart", payload: fetchCartData.data });
    } catch (error) {
      dispatch({ type: "Error", payload: error });
    }
  };
};

//Invoice

export const sendInvoiceDataAction = (data, email) => {
  return async dispatch => {
    let sendDataInvoice = await sendInvoiceData(data);
    await deleteCart(email);
    localStorage.removeItem("persist:UserCart");

    dispatch({ type: "Send_Invoice_Data", payload: sendDataInvoice.data });
  };
};

export const FetchInvoiceDataAction = email => {
  return async dispatch => {
    let FetchDataInvoice = await FetchInvoiceData(email);
    dispatch({ type: "Fetch_Invoice_Data", payload: FetchDataInvoice.data });
  };
};

export const deleteInvoiceAction = email => {
  return async () => {
    await deleteInvoice(email);

    history.push("/category");
    window.location.reload();
  };
};

//[sendCartDataToEmail] Action For Storing USER CART DATA On The LOGOUT Button [Because Of Latest CART STATE]
// Means Logout is the last Action in website thats why i assign This action
// It will give an ARRAY in response [Payload]

//When i click on login it will trigger this action and fetch the related data and will store data in CART REDUCER'S cartData:[]
export const FetchAndStoreAction = email => {
  return async dispatch => {
    let DataFetch = await fetchAddToCartByUser(email);
    //console.log(DataFetch.data)

    dispatch({
      type: "Store_Present_Data",
      payload: DataFetch.data.userCartData
    });
  };
};

//Action For sending mail to user

export const sendMailAction = data => {
  return async dispatch => {
    let sendData = await resetPassword(data);
    console.log(sendData);

    dispatch({ type: "Send_Mail", payload: sendData.data });
  };
};

export const resetPasswordAction = (token, data) => {
  return async dispatch => {
    let sendPassword = await resetPasswordNextStep(token, data);
    console.log(sendPassword);
    dispatch({ type: "Reset_The_Password", payload: sendPassword.data });
  };
};

export const GetEmailForResetPassAction = email => {
  return async dispatch => {
    let DataFetch = await GetEmailForResetPass(email);
    //console.log(DataFetch.data)

    dispatch({
      type: "Get_Email_For_Reset_Pass",
      payload: DataFetch.data
    });
  };
};
