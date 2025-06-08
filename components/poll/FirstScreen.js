// LoadingScreen.js
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const FirstScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Second");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Instant Remodel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FC632B",
  },
  text: {
    fontSize: 40,
    fontFamily: "InstrumentSerif",
    color: "white",
  },
});

export default FirstScreen;
