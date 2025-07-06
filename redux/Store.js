import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./userSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import selectedImagesReducer from "./SelectedImagesSlice";
import modalSelectionReducer from "./ModalSelectionSlice";

const rootReducer = combineReducers({
  modalSelection: modalSelectionReducer,
  selectedImages: selectedImagesReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["modalSelection", "selectedImages", "user"], // 👈 додай user
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
