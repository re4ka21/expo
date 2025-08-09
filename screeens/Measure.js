import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Measure = () => {
  const [message, setMessage] = useState("Привіт, світ!");

  const handlePress = () => {
    setMessage("Ти натиснув кнопку!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button title="Натисни мене" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Measure;
