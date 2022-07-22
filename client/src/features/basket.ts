import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Basket, BasketItem } from "../types";

const INITIAL_BASKET: Basket = {
  ticketsInBasket: [],
};

export const basket = createSlice({
  name: "basket",
  initialState: INITIAL_BASKET,
  reducers: {
    addTo: (state, action: PayloadAction<BasketItem>) => {
      const itemAlreadyInBasket = state.ticketsInBasket.find(
        (ticket) => ticket.id === action.payload.id
      );
      if (itemAlreadyInBasket) itemAlreadyInBasket.value += 1;
      else state.ticketsInBasket.push(action.payload);
    },
    removeFrom: (state, action: PayloadAction<{ id: number }>) => {
      const itemAlreadyInBasket = state.ticketsInBasket.find(
        (ticket) => ticket.id === action.payload.id
      );
      if (itemAlreadyInBasket)
        state.ticketsInBasket.splice(
          state.ticketsInBasket.indexOf(itemAlreadyInBasket),
          1
        );
    },
    clear: (state) => {},
  },
});

export const { addTo, removeFrom, clear } = basket.actions;

export const basketState = (state: RootState) => state.basket;

export default basket.reducer;
