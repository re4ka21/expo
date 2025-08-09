import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  ImageBackground,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { stylesList } from "../../constants/modalconstants";
import { ONBOARDING_SCREENS } from "../../constants/constants";
import OnboardingDots from "../../components/Dots";
const currentIndex = ONBOARDING_SCREENS.indexOf("ThirteenthScreen");
const ThirteenthScreen = ({ navigation }) => {
  const [searchQuery] = useState("");

  const filteredData = stylesList.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStyleSelect = (style) => {
    navigation.navigate("Carousel", {
      screenType: "StyleRecommendationScreen",
    });
  };

  return (
    <View style={styles.container}>
      <OnboardingDots
        currentIndex={currentIndex}
        total={ONBOARDING_SCREENS.length}
      />

      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-circle-left" size={32} color="#FC632B" />
        </TouchableOpacity>
        <Text style={styles.text}>
          Which style reflects your{"\n"}personality the most?
        </Text>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.name}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleStyleSelect(item.name)}
          >
            <ImageBackground
              source={item.image}
              style={styles.imageBackground}
              imageStyle={styles.image}
            >
              <View style={styles.overlayText}>
                <Text style={styles.itemName} numberOfLines={1}>
                  {item.name}
                </Text>
                {item.description && (
                  <Text style={styles.itemDesc} numberOfLines={2}>
                    {item.description}
                  </Text>
                )}
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCFC",
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
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 60,
    marginBottom: 36,
  },
  text: {
    fontSize: 32,
    fontFamily: "InstrumentSerif",
    marginLeft: 12,
    flexShrink: 1,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    paddingVertical: 8,
  },
  row: {
    flex: 1,
  },
  item: {
    width: "50%",
    aspectRatio: 1,
    paddingRight: 1.5,
    paddingVertical: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlayText: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 6,
    width: "100%",
  },
  itemName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
    width: "100%",
    flexShrink: 1,
  },
  itemDesc: {
    fontSize: 12,
    color: "#eee",
    marginTop: 2,
    width: "100%",
    flexShrink: 1,
  },
});
export default ThirteenthScreen;
