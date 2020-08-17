export const SaveGoogleAuthDataReducer = (state = {}, action) => {
  switch (action.type) {
    case "google_auth":
      return action.payload;

    default:
      return state;
  }
};

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case "Send_Register_Data":
      return { error: "", success: action.payload };
    case "Error":
      return { error: action.payload, success: "" };
    default:
      return state;
  }
};
const initialStateForLoggedInUser = () => {
  let user = JSON.parse(localStorage.getItem("LoggedInUser"));
  return user ? { loggedIn: true, user } : {};
};

export const loginReducer = (state = initialStateForLoggedInUser(), action) => {
  switch (action.type) {
    case "Send_Login_Data":
      return { ...state, success: action.payload, error: "", loggedIn: false };
    case "Error":
      return { error: action.payload, loggedIn: false };
    case "Send_LoggedInUser_Data":
      return { current: action.payload, loggedIn: false };
    default:
      return state;
  }
};

let initialState = {
  loading: false,
  productByCategory: [],
  error: ""
};

export const getProductByCategoryReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "Fetch_Request":
      return { ...state, loading: true };
    case "Get_ProductByCategory_Info":
      return { loading: false, productByCategory: action.payload };

    case "Fetch_Request_Failure":
      return { loading: false, productByCategory: [] };
    default:
      return state;
  }
};

let initialStateForParticularProduct = {
  loading: false,
  productSpecific: [],
  error: ""
};

export const getParticularProductReducer = (
  state = initialStateForParticularProduct,
  action
) => {
  switch (action.type) {
    case "Fetch_Request":
      return { ...state, loading: true };
    case "Get_Particular_Product_Info":
      return { loading: false, productSpecific: action.payload };

    case "Fetch_Request_Failure":
      return { loading: false, productSpecific: [] };
    default:
      return state;
  }
};

export const FetchCartDataToEmailReducer = (state = {}, action) => {
  switch (action.type) {
    case "Fetch_Add_To_Cart":
      return action.payload;

    default:
      return state;
  }
};

// Invoice
export const sendInvoiceDataReducer = (state = {}, action) => {

  switch (action.type) {
    case "Send_Invoice_Data":
      return action.payload;

    default:
      return state;
  }
};

export const FetchInvoiceDataReducer = (state = {}, action) => {

  switch (action.type) {
    case "Fetch_Invoice_Data":
      return action.payload;

    default:
      return state;
  }
};

export const GetEmailForResetPassReducer = (state = {}, action) => {
  switch (action.type) {
    case "Get_Email_For_Reset_Pass":
      return action.payload;

    default:
      return state;
  }
};
