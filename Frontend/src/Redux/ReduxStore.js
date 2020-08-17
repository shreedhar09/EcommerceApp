import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import {
  SaveGoogleAuthDataReducer,
  registerReducer,
  loginReducer,
  getProductByCategoryReducer,
  getParticularProductReducer,
  FetchCartDataToEmailReducer,
  FetchInvoiceDataReducer,
  GetEmailForResetPassReducer
} from "../Redux/Reducer/AuthReducer";

import {
  getProductJeansReducer,
  getProductMobileReducer,
  getProductTShirtReducer,
  getProductTVReducer
} from "../Redux/Reducer/SpecificProduct";

import { addToCartReducer } from "../Redux/Cart/Reducer";

export const persistConfig = {
  key: "UserCart",
  storage,
  whitelist: ["cartDataProduct"]
};

const rootReducer = combineReducers({
  SigninData: SaveGoogleAuthDataReducer,
  ProductTV: getProductTVReducer,
  ProductMobile: getProductMobileReducer,
  ProductTShirt: getProductTShirtReducer,
  ProductJeans: getProductJeansReducer,
  registerUser: registerReducer,
  loginUserData: loginReducer,
  ProductByCategoryData: getProductByCategoryReducer,
  ProductSpecificData: getParticularProductReducer,
  cartDataProduct: addToCartReducer,
  CheckoutCartData: FetchCartDataToEmailReducer,
  invoiceData: FetchInvoiceDataReducer,
  resetTimeEmailPass: GetEmailForResetPassReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const reduxStore = createStore(persistedReducer, applyMiddleware(thunk));
export const PersistStore = persistStore(reduxStore);
