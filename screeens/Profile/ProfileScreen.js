// screens/ProfileScreen.js
import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";

import Main from "../Main";
import History from "../History";
import Measure from "../Measure";

const Tab = createBottomTabNavigator();

/** --------------------------------------------------
 * 1. Кастомний TabBar, який використовує лише `options`
 * -------------------------------------------------*/
const CustomTabBar = ({ state, descriptors, navigation }) => (
  <View style={styles.tabBar}>
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const isFocused = state.index === index;
      const color = isFocused ? "#FC632B" : "#b3958e";

      const onPress = () => {
        const event = navigation.emit({
          type: "tabPress",
          target: route.key,
          canPreventDefault: true,
        });
        if (!isFocused && !event.defaultPrevented)
          navigation.navigate(route.name);
      };

      return (
        <TouchableOpacity
          key={route.key}
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          style={styles.tab}
          onPress={onPress}
          activeOpacity={0.8}
        >
          {options.tabBarIcon?.({ color, size: 24 })}
          <Text style={[styles.label, { color }]}>
            {options.title ?? route.name}
          </Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

/** --------------------------------------------------
 * 2. Основний Tab Navigator
 * -------------------------------------------------*/
const ProfileScreen = () => (
  <Tab.Navigator
    screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    tabBar={(props) => <CustomTabBar {...props} />}
  >
    <Tab.Screen
      name="Main"
      component={Main}
      options={{
        title: "Redesign",
        tabBarIcon: ({ color, size }) => (
          <Feather name="star" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="History"
      component={History}
      options={{
        title: "History",
        tabBarIcon: ({ color, size }) => (
          <Fontisto name="photograph" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Measure"
      component={Measure}
      options={{
        title: "Measure",
        tabBarIcon: ({ color, size }) => (
          <Entypo name="ruler" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

/** --------------------------------------------------
 * 3. Стилі
 * -------------------------------------------------*/
const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: Platform.OS === "ios" ? 24 : 12,
    paddingVertical: 12,
    borderRadius: 32,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  tab: {
    alignItems: "center",
    flex: 1,
  },
  label: {
    fontSize: 11,
    marginTop: 2,
    fontWeight: "600",
  },
});

export default ProfileScreen;
