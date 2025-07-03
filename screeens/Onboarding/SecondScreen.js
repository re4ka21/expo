// LoadingScreen.js
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Frameone.png")}
        style={styles.photoone}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/images/Frametwo.png")}
        style={styles.phototwo}
        resizeMode="contain"
      />
      <View style={styles.text}>
        <Text style={styles.firsttext}>
          Let’s personalise your{"\n"} experience
        </Text>
        <Text style={styles.secondtext}>
          Complete this quick survery to {"\n"}customize the app just for you
        </Text>
      </View>
      <View style={styles.bottomButtonWrapper}>
        <TouchableOpacity
          style={styles.buttonredesign}
          onPress={() =>
            navigation.navigate("CheckCombined", { screenType: "ThirdScreen" })
          }
        >
          <View style={styles.buttonredesignContent}>
            <Text style={styles.buttonredesigntext}>Redesign interior</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.secondtext}>
        By clicking "Let's go", you confirm that you{"\n"} accept{" "}
        <Text style={styles.link}>Terms of Use</Text> and{" "}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF3EB",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    position: "absolute",
    marginTop: 200,
  },
  firsttext: {
    fontSize: 40,
    fontFamily: "InstrumentSerif",
    color: "black",
    textAlign: "center",
  },
  secondtext: {
    fontSize: 13,
    color: "#422508",
    textAlign: "center",
    marginTop: 15,
  },
  link: {
    color: "#007AFF", // або будь-який синій
    textDecorationLine: "underline",
  },
  photoone: {
    marginBottom: 230,
    zIndex: 2,
  },
  phototwo: {
    position: "absolute",
    top: 1,
    zIndex: 1,
  },
  buttonredesign: {
    backgroundColor: "#FC632B",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    width: "92%",
  },
  buttonredesignContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonredesigntext: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  bottomButtonWrapper: {
    position: "absolute",
    bottom: 120,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});

export default SecondScreen;
