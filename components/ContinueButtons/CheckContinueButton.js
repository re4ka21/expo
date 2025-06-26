import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const CheckContinueButton = ({ onPress, disabled = false }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={disabled ? styles.buttonDisabled : styles.button}
      >
        <View style={styles.content}>
          <Text style={styles.text}>
            {disabled ? "Pick one or more" : "Continue"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 45, // 🔼 ВИЩЕ на екрані
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
  buttonDisabled: {
    backgroundColor: "#CCCBC6",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    width: "92%",
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

export default CheckContinueButton;
