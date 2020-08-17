import { oneProductAtaTime } from "../api";

//Request Loading Action.
export const requestWaiting = () => {
  return async dispatch => {
    dispatch({ type: "Fetch_Request_Wait" });
  };
};

//Request Failure Action
export const requestFailure = error => {
  return async dispatch => {
    dispatch({ type: "Fetch_Request_Fail", payload: error });
  };
};

//Add To Cart.
export const addToCartAction = productId => {
  return async dispatch => {
    try {
      dispatch(requestWaiting());
      let response = await oneProductAtaTime(productId);

      console.log(response);

      dispatch({
        type: "Fetch_Request_AddCart",
        payload: response.data
      });
    } catch (error) {
      dispatch(requestFailure(error));
    }
  };
};

//Remove From Cart.

export const removeFromCartAction = productId => {
  return async dispatch => {
    try {
      dispatch(requestWaiting());
      let response = await oneProductAtaTime(productId);

      console.log(response);

      dispatch({
        type: "Fetch_Request_RemoveCart",
        payload: response.data
      });
    } catch (error) {
      dispatch(requestFailure(error));
    }
  };
};

export const addQuantityAction = Product => {
  //console.log(Product)
  return async dispatch => {
    try {
      dispatch(requestWaiting());

      dispatch({
        type: "Add_Quantity",
        payload: Product
      });
    } catch (error) {
      dispatch(requestFailure(error));
    }
  };
};

export const removeQuantityAction = ProductData => {
  console.log(ProductData);

  return async dispatch => {
    try {
      dispatch(requestWaiting());
      dispatch({ type: "Remove_Quantity", payload: ProductData });
    } catch (error) {
      dispatch(requestFailure());
    }
  };
};
