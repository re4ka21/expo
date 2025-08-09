import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ONBOARDING_SCREENS } from "../../constants/constants";
import OnboardingDots from "../../components/Dots";
import UniversalButton from "../../components/ContinueButtons/UniversalButton";
const EighthScreen = ({ navigation }) => {
  const currentIndex = ONBOARDING_SCREENS.indexOf("EighthScreen");

  return (
    <View style={styles.container}>
      <OnboardingDots
        currentIndex={currentIndex}
        total={ONBOARDING_SCREENS.length}
      />
      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome
            name="arrow-circle-left"
            size={32}
            color="#FC632B"
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Text style={styles.text}>It’s interesting that</Text>
        <Text style={styles.texttwo}>
          A Harvard study found that the quality of{"\n"}living conditions is{" "}
          <Text style={styles.orangetext}>
            directly linked to life{"\n"} satisfaction.
          </Text>
        </Text>
      </View>
      <View>
        <Image
          source={require("../../assets/images/Frame 73.png")}
          style={styles.photo}
          resizeMode="cover"
        />
      </View>
      <UniversalButton
        onPress={() =>
          navigation.navigate("Combined", {
            screenType: "RedesignExperienceScreen",
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCFC",
  },
  texttwo: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    marginHorizontal: 20,
    color: "#000",
  },
  orangetext: {
    color: "#FC632B",
  },

  text: {
    fontSize: 40,
    fontFamily: "InstrumentSerif",
    marginLeft: 52,
    flexShrink: 1,
    marginTop: 35,
  },
  photo: {
    width: "100%",
    height: 250,
    marginTop: 100,
  },

  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#444",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 70,
  },
  checkedCheckbox: {
    backgroundColor: "#FC632B",
    borderColor: "#FC632B",
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 60,
  },

  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 10,
  },
  activeDot: {
    backgroundColor: "#FC632B",
    width: 6,
    height: 6,
  },
});

export default EighthScreen;
