import {
  AddParticularProductToCart,
  addQuantity,
  removeQuantity
} from "../../CartManager/Manager";

//Storage For Cart... Results of all 4 actions eventually will store here.
//1)AddOneProductToCart.
//2)RemoveOneProductFromCart.
//3)AddQuantityOfProductinCard.
//4)RemoveQuantityOfProductinCard.

//Storage[Initial State].
const initialState = {
  loading: false,
  cartData: [],
  error: ""
};
//console.log(initialState.cartData);

//1)AddOneProductToCart.

export const addToCartReducer = (state = initialState, action) => {
  //console.log(action.payload);

  switch (action.type) {
    case "Fetch_Request_Wait":
      return { ...state, loading: true };

    // When This case will trigger it will store the payload of the "FetchAndStoreAction" in cartData
    case "Store_Present_Data":
      return { ...state, cartData: [...action.payload] };

    case "Fetch_Request_AddCart":
      return {
        ...state,
        cartData: AddParticularProductToCart(state.cartData, action.payload),
        loading: false
      };
    case "Fetch_Request_RemoveCart":
      return {
        ...state,
        loading: false,
        cartData: state.cartData.filter(
          data => data.Data._id !== action.payload.Data._id
        )
      };
    case "Add_Quantity":
      return {
        ...state,
        loading: false,
        cartData: addQuantity(state.cartData, action.payload)
      };
    case "Remove_Quantity":
      return {
        ...state,
        loading: false,
        cartData: removeQuantity(state.cartData, action.payload)
      };
    default:
      return state;
  }
};
