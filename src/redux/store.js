import { configureStore, combineReducers } from "@reduxjs/toolkit";
import crewReducer from "./crewSlice";
import technologyReducer from "./technologySlice";
import destinationReducer from "./destinationsSlice";

const rootReducers = combineReducers({
  crewReducer,
  technologyReducer,
  destinationReducer,
});

const store = configureStore({ reducer: rootReducers });

export { store };
