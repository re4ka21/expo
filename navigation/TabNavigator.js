import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FirstScreen from "../screeens/Onboarding/FirstScreen";
import SecondScreen from "../screeens/Onboarding/SecondScreen";
import ThirdScreen from "../screeens/Onboarding/ThirdScreen";
import FourthScreen from "../screeens/Onboarding/FourthScreen";
import FivethScreen from "../screeens/Onboarding/FivethScreen";
import SixthScreen from "../screeens/Onboarding/SixthScreen";
import SeventhScreen from "../screeens/Onboarding/SeventhScreen";
import EighthScreen from "../screeens/Onboarding/EighthScreen";
import NinethScreen from "../screeens/Onboarding/NinethScreen";
import TenthScreen from "../screeens/Onboarding/TenthScreen";
import EleventhScreen from "../screeens/Onboarding/EleventhScreen";
import TwelfthScreen from "../screeens/Onboarding/TwelfthScreen";
import ThirteenthScreen from "../screeens/Onboarding/ThirteenthScreen";
import FourteenthScreen from "../screeens/Onboarding/FourteenthScreen";
import FiveteenthScreen from "../screeens/Onboarding/FiveteenthScreen";

import ProfileScreen from "../screeens/Profile/ProfileScreen";
import ResultScreen from "../screeens/Result/Result";
import LoadingScreen from "../screeens/Loading/LoadingScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="First" component={FirstScreen} />
    <Stack.Screen name="Second" component={SecondScreen} />
    <Stack.Screen name="Third" component={ThirdScreen} />
    <Stack.Screen name="Fourth" component={FourthScreen} />
    <Stack.Screen name="Fiveth" component={FivethScreen} />
    <Stack.Screen name="Sixth" component={SixthScreen} />
    <Stack.Screen name="Seventh" component={SeventhScreen} />
    <Stack.Screen name="Eighth" component={EighthScreen} />
    <Stack.Screen name="Nineth" component={NinethScreen} />
    <Stack.Screen name="Tenth" component={TenthScreen} />
    <Stack.Screen name="Eleventh" component={EleventhScreen} />
    <Stack.Screen name="Twelfth" component={TwelfthScreen} />
    <Stack.Screen name="Thirteenth" component={ThirteenthScreen} />
    <Stack.Screen name="Fourteenth" component={FourteenthScreen} />
    <Stack.Screen name="Fiveteenth" component={FiveteenthScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Loading" component={LoadingScreen} />
    <Stack.Screen name="Result" component={ResultScreen} />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarStyle: { display: "none" },
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
