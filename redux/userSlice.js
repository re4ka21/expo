import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onboardingDone: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setOnboardingDone(state, action) {
      state.onboardingDone = action.payload;
    },
    resetUser(state) {
      state.onboardingDone = false;
    },
  },
});

export const { setOnboardingDone, resetUser } = userSlice.actions;

export default userSlice.reducer;
