import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
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

const currentIndex = ONBOARDING_SCREENS.indexOf("FivethScreen");
const FivethScreen = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <OnboardingDots
        currentIndex={currentIndex}
        total={ONBOARDING_SCREENS.length}
      />

      <View style={styles.title}>
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
        <View style={styles.centeredTitle}>
          <Text style={styles.text}>Great choice</Text>
        </View>
      </View>

      {/* 🖼️ Карусель */}
      <Carousel data={carouselData} scrollX={scrollX} />
      <View style={styles.numbercontainer}>
        <Text style={styles.number}>806,345</Text>
        <Text style={styles.texttwo}>
          Living rooms have been redesigned by{"\n"} our users. Yours could be
          next
        </Text>
      </View>
      <ContineButtonCarousel onPress={() => navigation.navigate("Sixth")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEF3EB",
  },
  title: {
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

  arrowContainer: {
    marginLeft: 15,
    zIndex: 2,
  },
  centeredTitle: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomButtonWrapper: {
    marginTop: 100,
    alignItems: "center",
  },
  texttwo: {
    fontSize: 15,
    textAlign: "center",
  },
  text: {
    fontSize: 32,
    fontFamily: "InstrumentSerif",
  },
  numbercontainer: {
    alignItems: "center",
  },
  number: {
    fontFamily: "InstrumentSerif",
    fontSize: 64,
    marginTop: 80,
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
    marginTop: 80,
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

export default FivethScreen;
