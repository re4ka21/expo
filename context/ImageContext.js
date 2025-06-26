import React, { createContext, useState } from "react";
import { styleImages } from "../constants";
export const ImageContext = createContext();
export const ImageProvider = ({ children }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const addSelectedImage = (key) => {
    setSelectedImages((prev) => {
      if (prev.includes(key)) return prev;
      return [...prev, key];
    });
  };

  const clearSelectedImages = () => {
    setSelectedImages([]);
  };

  return (
    <ImageContext.Provider
      value={{
        selectedImages,
        addSelectedImage,
        clearSelectedImages,
        styleImages,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
