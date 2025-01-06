import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import cardsReducer from "./slices/cardsSlice";
import sortReducer from "./slices/sortSlice";
import createCardReducer from "./slices/createCardSlice";
import detailReducer from "./slices/detailSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    cards: cardsReducer,
    sort: sortReducer,
    createCard: createCardReducer,
    detail: detailReducer,
  },
});

export default store;
