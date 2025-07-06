import React from "react";
import { View, StyleSheet } from "react-native";

const OnboardingDots = ({ currentIndex, total }) => {
  return (
    <View style={styles.dotsContainer}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[styles.dot, currentIndex === index && styles.activeDot]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: "#FC632B",
  },
});

export default OnboardingDots;
