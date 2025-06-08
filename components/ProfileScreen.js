import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./screens/Main.js";
import History from "./screens/History.js";
import Measure from "./screens/Measure.js";
import { Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
enableScreens();
const Tab = createBottomTabNavigator();

// Іконки у вигляді emoji або можна підключити кастомні картинки
const TabBarIcon = ({ icon, color }) => (
  <Text style={{ fontSize: 24, color }}>{icon}</Text>
);

const ProfileScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#fde3df", // світло-рожевий фон
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarActiveTintColor: "#ff4500", // помаранчевий
        tabBarInactiveTintColor: "#b3958e", // сіро-коричневий
        tabBarIcon: ({ color }) => {
          let icon = "";
          if (route.name === "Main")
            icon = <Feather name="star" size={24} color="black" />;
          if (route.name === "History")
            icon = <Fontisto name="photograph" size={24} color="black" />;
          if (route.name === "Measure")
            icon = <Entypo name="ruler" size={24} color="black" />;
          return <TabBarIcon icon={icon} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{ title: "Redesign" }}
      />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Measure" component={Measure} />
    </Tab.Navigator>
  );
};

export default ProfileScreen;
