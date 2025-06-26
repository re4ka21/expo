import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ONBOARDING_SCREENS } from "../../constants";
import OnboardingDots from "../../components/Dots";
import { carouselData } from "../../constants";
import Carousel from "../../components/Carousel";
import ContineButtonCarousel from "../../components/ContinueButtons/ContineButtonCarousel";
const { width } = Dimensions.get("window");

const currentIndex = ONBOARDING_SCREENS.indexOf("FourteenthScreen");
const FourteenthScreen = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <OnboardingDots
        currentIndex={currentIndex}
        total={ONBOARDING_SCREENS.length}
      />

      <View style={styles.arrowback}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.arrowContainer}
        >
          <FontAwesome
            name="arrow-circle-left"
            size={32}
            color="#FC632B"
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>

      {/* 🖼️ Карусель */}
      <Carousel data={carouselData} scrollX={scrollX} />
      <View style={styles.numbercontainer}>
        <Text style={styles.title}>You’ve got a taste!</Text>
        <Text style={styles.texttwo}>
          <Text style={styles.orange}>Scandinavian</Text> was one of the hottest
          {"\n"}styles last year! We offer it and
          <Text style={styles.orange}> 70 more{"\n"}unique styles</Text> to
          explore.
        </Text>
      </View>
      <ContineButtonCarousel
        onPress={() => navigation.navigate("Fiveteenth")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEF3EB",
  },
  arrowback: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    height: 40,
    position: "relative",
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
  arrowContainer: {
    marginLeft: 15,
    zIndex: 2,
  },

  bottomButtonWrapper: {
    marginTop: 100,
    alignItems: "center",
  },
  texttwo: {
    fontSize: 15,
    textAlign: "center",
  },
  orange: { color: "#FC632B" },
  numbercontainer: {
    alignItems: "center",
  },
  title: {
    fontFamily: "InstrumentSerif",
    fontSize: 32,
    marginTop: 80,
    marginBottom: 24,
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
    marginHorizontal: 10,
  },
  activeDot: {
    backgroundColor: "#FC632B",
    width: 6,
    height: 6,
  },

  // 🖼️ Стилі каруселі
  carousel: {
    marginTop: 50,
  },
  carouselItem: {
    width: width * 0.75, // 75% ширини екрану
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderRadius: 10,
  },
});

export default FourteenthScreen;
