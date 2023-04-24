import { configureStore } from "@reduxjs/toolkit";
import { changeName, changeCost, formReducer } from "./Slices/formSlice";
import {
  changeSearchTerm,
  addCar,
  removeCar,
  carsReducer,
} from "./Slices/carsSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export { store };
export { changeCost, changeName, changeSearchTerm, addCar, removeCar };
