import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ONBOARDING_SCREENS } from "../../constants";
import OnboardingDots from "../../components/Dots";
import { testimonials } from "../../constants";
import ContinueButton from "../../components/ContinueButtons/ContinueButton";
const { width } = Dimensions.get("window");

const currentDotsIndex = ONBOARDING_SCREENS.indexOf("EleventhScreen");
const EleventhScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.round(event.nativeEvent.contentOffset.x / slideSize);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <OnboardingDots
        currentIndex={currentDotsIndex}
        total={ONBOARDING_SCREENS.length}
      />
      {/* Назва та стрілка */}
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.arrowContainer}
        >
          <FontAwesome name="arrow-circle-left" size={32} color="#FC632B" />
        </TouchableOpacity>

        <View style={styles.textBlock}>
          <Text style={styles.text}>Thanks for sharing your concerns!</Text>
          <Text style={styles.texttwo}>
            <Text style={styles.orangetext}> 83% of our users </Text>reported
            that Al Remodel{"\n"}helped them redesign their spaces and{"\n"}
            boosted their life satisfaction.
          </Text>
        </View>
      </View>

      {/* Карусель */}
      <View style={styles.carouselContainer}>
        <FlatList
          style={styles.list}
          data={testimonials}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          contentContainerStyle={{ paddingHorizontal: width * 0.075 }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.carouselSlide}>
              <View style={styles.starsContainer}>
                {[...Array(5)].map((_, i) => (
                  <FontAwesome
                    key={i}
                    name="star"
                    size={18}
                    color="#FC632B"
                    style={styles.starIcon}
                  />
                ))}
              </View>
              <Text style={styles.reviewText}>{item.text}</Text>
              <Text style={styles.maintext}>{item.maintext}</Text>
              <Text style={styles.authorText}>{item.name}</Text>
            </View>
          )}
        />

        {/* Індикатори відгуків */}
        <View style={styles.dots}>
          {testimonials.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === currentIndex && styles.activeDot]}
            />
          ))}
        </View>
      </View>
      <ContinueButton onPress={() => navigation.navigate("Twelfth")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  topDotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  dotSmall: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#ccc",
    marginHorizontal: 10,
  },
  activeDot: {
    backgroundColor: "#FC632B",
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 60,
  },
  carouselContainer: {
    marginTop: 40,
    alignItems: "center",
  },
  headerWrapper: {
    marginLeft: 15,
    marginTop: 60,
  },

  textBlock: {
    marginTop: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  starsContainer: {
    flexDirection: "row",

    marginBottom: 16,
  },

  starIcon: {
    marginHorizontal: 2,
  },

  text: {
    fontSize: 40,
    fontFamily: "InstrumentSerif",
    textAlign: "center",
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

  arrowContainer: {
    marginLeft: 15,
    zIndex: 2,
  },
  list: {
    marginTop: 40,
    height: 220,
  },
  carouselSlide: {
    width: width * 0.85,
    marginHorizontal: width * 0.0125,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    backgroundColor: "white",
    paddingVertical: 25,
    paddingHorizontal: 30,

    elevation: 2,
    height: 205, // 🧩 додаємо висоту
  },

  reviewText: {
    fontSize: 17,
    color: "#422508",
    marginBottom: 10,
    fontWeight: "bold",
  },
  authorText: {
    fontSize: 14,
    color: "#422508",
  },
  maintext: {
    fontSize: 14,
    color: "#422508",
    marginBottom: 10,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
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
  buttonredesign: {
    backgroundColor: "#FC632B",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    width: "92%",
  },
  bottomButtonWrapper: {
    position: "absolute",
    bottom: 60,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});

export default EleventhScreen;
