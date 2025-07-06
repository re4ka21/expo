// ProfileScreen.js
import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from "react-native";

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

export default CustomTabBar;
