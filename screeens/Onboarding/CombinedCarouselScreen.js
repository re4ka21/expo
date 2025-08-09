import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ONBOARDING_SCREENS, carouselData } from "../../constants/different";
import OnboardingDots from "../../components/Dots";
import Carousel from "../../components/Carousel";
import UniversalButton from "../../components/ContinueButtons/UniversalButton";
const { width } = Dimensions.get("window");
const dataMap = {
  LivingRoomStatsScreen: {
    title: "Great choice",
    number: "806,345",
    description:
      "Living rooms have been redesigned by\nour users. Yours could be next",
    nextScreen: (navigation) =>
      navigation.navigate("Combined", { screenType: "CurrentHomeFeelScreen" }),
    backgroundColor: "#FEF3EB",
  },
  StyleRecommendationScreen: {
    title: null,
    number: "You’ve got a taste!",
    description:
      "Scandinavian was one of the hottest\nstyles last year! We offer it and\n70 more unique styles to explore.",
    nextScreen: "Fiveteenth",
    backgroundColor: "#FEF3EB",
  },
};

const CombinedCarouselScreen = ({ navigation, route }) => {
  const screenType = route?.params?.screenType || "LivingRoomStatsScreen";
  const { title, number, description, nextScreen, backgroundColor } =
    dataMap[screenType];
  const currentIndex = ONBOARDING_SCREENS.indexOf(screenType);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleContinue = () => {
    if (typeof nextScreen === "function") {
      nextScreen(navigation);
    } else {
      navigation.navigate(nextScreen);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <OnboardingDots
        currentIndex={currentIndex}
        total={ONBOARDING_SCREENS.length}
      />

      <View style={styles.titleContainer}>
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
        {screenType === "LivingRoomStatsScreen" ? (
          <View style={styles.centeredTitle}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        ) : (
          <Text style={styles.titleText}>{title}</Text>
        )}
      </View>
      <Carousel data={carouselData} scrollX={scrollX} style={styles.carousel} />

      <View style={styles.textContainer}>
        {number && (
          <Text
            style={[
              styles.numberText,
              screenType === "StyleRecommendationScreen" && { fontSize: 40 },
            ]}
          >
            {number}
          </Text>
        )}
        <Text style={[styles.descriptionText, !number && { marginTop: 20 }]}>
          {description}
        </Text>
      </View>

      <UniversalButton onPress={handleContinue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF3EB",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    height: 40,
    position: "relative",
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
  titleText: {
    fontSize: 32,
    fontFamily: "InstrumentSerif",
    textAlign: "center",
    marginLeft: 15,
    flexShrink: 1,
  },
  textContainer: {
    alignItems: "center",
    marginTop: 80,
    paddingHorizontal: 20,
    marginBottom: 200,
  },
  numberText: {
    fontFamily: "InstrumentSerif",
    fontSize: 64,
  },
  descriptionText: {
    fontSize: 15,
    textAlign: "center",
  },
});

export default CombinedCarouselScreen;
