import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "./components/poll/FirstScreen.js";
import ProfileScreen from "./components/ProfileScreen.js";
import { enableScreens } from "react-native-screens";
import { ImageProvider } from "./components/context/ImageContext.js";
import LoadingScreen from "./components/screens/LoadingScreen.js";
import ResultScreen from "./components/screens/Result.js";
import SecondScreen from "./components/poll/SecondScreen.js";
import ThirdScreen from "./components/poll/ThirdScreen.js";
import FourthScreen from "./components/poll/FourthScreen.js";
import FivethScreen from "./components/poll/FivethScreen.js";
import SixthScreen from "./components/poll/SixthScreen.js";
import SeventhScreen from "./components/poll/SeventhScreen.js";
import EighthScreen from "./components/poll/EighthScreen.js";
import NinethScreen from "./components/poll/NinethScreen.js";
import TenthScreen from "./components/poll/TenthScreen.js";
import EleventhScreen from "./components/poll/EleventhScreen.js";
import TwelfthScreen from "./components/poll/TwelfthScreen.js";
import ThirteenthScreen from "./components/poll/ThirteenthScreen.js";
import FourteenthScreen from "./components/poll/FourteenthScreen.js";
import FiveteenthScreen from "./components/poll/FiveteenthScreen.js";
enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ImageProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={FirstScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Result"
            component={ResultScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Second"
            component={SecondScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Third"
            component={ThirdScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Fourth"
            component={FourthScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Fiveth"
            component={FivethScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sixth"
            component={SixthScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Seventh"
            component={SeventhScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Eighth"
            component={EighthScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Nineth"
            component={NinethScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tenth"
            component={TenthScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Eleventh"
            component={EleventhScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Twelfth"
            component={TwelfthScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Thirteenth"
            component={ThirteenthScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Fourteenth"
            component={FourteenthScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Fiveteenth"
            component={FiveteenthScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageProvider>
  );
}
