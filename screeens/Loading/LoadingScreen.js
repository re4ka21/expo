import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Result");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        “The best rooms have{"\n"} something to say{"\n"} about the people who
        {"\n"}
        live in them.“
      </Text>
      <ActivityIndicator
        size="large"
        color="#FC632B"
        style={styles.ActivityIndicator}
      />
      <Text style={styles.secondtext}>
        Please don’t lock your phone{"\n"} while your design is generating
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
    marginTop: 140,
    marginLeft: 32,
  },
  secondtext: {
    position: "absolute",
    textAlign: "center",
    bottom: 34,
    left: 0,
    right: 0,
    height: 60,
    alignItems: "center",
  },
  ActivityIndicator: {
    marginTop: 465,
  },
});

export default LoadingScreen;
