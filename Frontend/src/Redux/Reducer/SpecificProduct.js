//Mobile

let initialStateForProductMobile = {
  loading: false,
  productDataSpecific: [],
  error: ""
};

export const getProductMobileReducer = (
  state = initialStateForProductMobile,
  action
) => {

  switch (action.type) {
    case "Fetch_Request":
      return { ...state, loading: true };
    case "Get_Product_Mobile_Info":
      return { loading: false, productDataSpecific: action.payload };

    case "Fetch_Request_Failure":
      return { loading: false, productDataSpecific: [] };
    default:
      return state;
  }
};

//T-Shirt

let initialStateForProductTShirt = {
  loading: false,
  productDataSpecific: [],
  error: ""
};

export const getProductTShirtReducer = (
  state = initialStateForProductTShirt,
  action
) => {

  switch (action.type) {
    case "Fetch_Request":
      return { ...state, loading: true };
    case "Get_Product_TShirt_Info":
      return { loading: false, productDataSpecific: action.payload };

    case "Fetch_Request_Failure":
      return { loading: false, productDataSpecific: [] };
    default:
      return state;
  }
};

//Jeans

let initialStateForProductJeans = {
  loading: false,
  productDataSpecific: [],
  error: ""
};

export const getProductJeansReducer = (
  state = initialStateForProductJeans,
  action
) => {
  switch (action.type) {
    case "Fetch_Request":
      return { ...state, loading: true };
    case "Get_Product_Jeans_Info":
      return { loading: false, productDataSpecific: action.payload };

    case "Fetch_Request_Failure":
      return { loading: false, productDataSpecific: [] };
    default:
      return state;
  }
};

//TV

let initialStateForProductTV = {
  loading: false,
  productDataSpecific: [],
  error: ""
};

export const getProductTVReducer = (
  state = initialStateForProductTV,
  action
) => {

  switch (action.type) {
    case "Fetch_Request":
      return { ...state, loading: true };
    case "Get_Product_Info":
      return { loading: false, productDataSpecific: action.payload };

    case "Fetch_Request_Failure":
      return { loading: false, productDataSpecific: [] };
    default:
      return state;
  }
};
