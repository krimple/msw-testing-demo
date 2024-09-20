import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { customerApi } from "../features/customers/customer-api";

const createStore = () => {
  return configureStore({
    reducer: combineReducers({
      // customerApi automatically creates these!
      [customerApi.reducerPath]: customerApi.reducer
      // more API or standard slice reducers here
    }),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(customerApi.middleware)
  });
}
const store = createStore();
export { createStore, store };