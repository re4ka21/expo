import { createSlice } from "@reduxjs/toolkit";
import { styleImages } from "../constants";

const initialState = {
  selectedImages: [],
  styleImages,
};

const selectedImagesSlice = createSlice({
  name: "selectedImages",
  initialState,
  reducers: {
    addSelectedImage: (state, action) => {
      const key = action.payload;
      if (!state.selectedImages.includes(key)) {
        state.selectedImages.push(key);
      }
    },
    clearSelectedImages: (state) => {
      state.selectedImages = [];
    },
  },
});

export const { addSelectedImage, clearSelectedImages } =
  selectedImagesSlice.actions;

export const selectSelectedImages = (state) =>
  state.selectedImages.selectedImages;
export const selectStyleImages = (state) => state.selectedImages.styleImages;

export default selectedImagesSlice.reducer;
