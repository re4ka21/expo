import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/Store";
import RootNavigator from "./navigation/RootNavigator";
import { useFonts } from "expo-font";

enableScreens();

export default function App() {
  const [fontsLoaded] = useFonts({
    InstrumentSerif: require("./assets/fonts/InstrumentSerif-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
