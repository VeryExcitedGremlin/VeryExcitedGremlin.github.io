import { createSlice } from "@reduxjs/toolkit";

//Initial state for our counter

const initialState = {
  value: 0,
  history: [],
};

// Create a slice with actions and reducer
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Action to increment the counter
    increment: (state) => {
      state.value += 1;
      state.history.push(`Incremented to ${state.value}`);
    },

    // Action to decrement the counter

    decrement: (state) => {
      state.value -= 1;
      state.history.push(`Decremented to ${state.value}`);
    },

    // Action to increment by a specific amount

    incrementByAmount: (state, action) => {
      const amount = action.payload;
      state.value += amount;
      state.history.push(`Incremented by ${amount} to ${state.value}`);
    },

    // Action to reset the counter

    reset: (state) => {
      state.value = 0;
      state.history.push("Counter reset to 0");
    },

    //Action to clear history

    clearHistory: (state) => {
      state.history = [];
    },
  },
});

// Export the action creators
export const { increment, decrement, incrementByAmount, reset, clearHistory } = counterSlice.actions

// Export the reducer
export default counterSlice.reducer