import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const UniversalButton = ({
  onPress,
  disabled = false,
  label = "Continue",
  disabledLabel = "Pick one or more",
  bottom = 50,
  wrapperStyle,
  buttonStyle,
  disabledButtonStyle,
  textStyle,
}) => {
  return (
    <View style={[styles.wrapper, { bottom }, wrapperStyle]}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.button,
          buttonStyle,
          disabled && [styles.disabled, disabledButtonStyle],
        ]}
      >
        <View style={styles.content}>
          <Text style={[styles.text, textStyle]}>
            {disabled ? disabledLabel : label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
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

export default UniversalButton;
