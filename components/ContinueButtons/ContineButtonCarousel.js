import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const ContineButtonCarousel = ({ onPress, disabled, label = "Continue" }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={[styles.button, disabled && styles.disabled]}
        onPress={onPress}
        disabled={disabled}
      >
        <View style={styles.content}>
          <Text style={styles.text}>
            {disabled ? "Pick one or more" : label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: -120, // 🔺 Піднімає кнопку над навбаром
    left: 0,
    right: 0,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FC632B",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    width: "92%",
  },
  disabled: {
    backgroundColor: "#CCCBC6",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ContineButtonCarousel;
