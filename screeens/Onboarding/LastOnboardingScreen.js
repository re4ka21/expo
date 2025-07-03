// LoadingScreen.js
import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

const FiveteenthScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Profile");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>We are almost ready{"\n"}to start!</Text>
      <ActivityIndicator
        size="large"
        color="#FC632B"
        style={styles.ActivityIndicator}
      />
      <Text style={styles.secondtext}>
        Analysing your answers to{"\n"}personalise your experience
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF3EB",
  },
  text: {
    fontSize: 40,
    fontFamily: "InstrumentSerif",
    marginTop: 384,

    textAlign: "center",
  },
  secondtext: {
    position: "absolute",
    textAlign: "center",
    bottom: 52,
    left: 0,
    right: 0,
    height: 60,
    alignItems: "center",
  },
  ActivityIndicator: {
    marginTop: 300,
  },
});

export default FiveteenthScreen;
