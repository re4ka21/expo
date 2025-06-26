// redux/ModalSelectionSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedStyle: null,
  selectedRoom: null,
  selectedAI: null,
};

const modalSelectionSlice = createSlice({
  name: "modalSelection",
  initialState,
  reducers: {
    setSelectedStyle(state, action) {
      state.selectedStyle = action.payload;
    },
    setSelectedRoom(state, action) {
      state.selectedRoom = action.payload;
    },
    setSelectedAI(state, action) {
      state.selectedAI = action.payload;
    },
  },
});

export const { setSelectedStyle, setSelectedRoom, setSelectedAI } =
  modalSelectionSlice.actions;
export default modalSelectionSlice.reducer;
