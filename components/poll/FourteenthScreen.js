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

const { width } = Dimensions.get("window");

const carouselData = [
  { id: "1", image: require("../../assets/images/Artdeco.png") },
  { id: "2", image: require("../../assets/images/Bauhaus.png") },
  { id: "3", image: require("../../assets/images/Japanese.png") },
  { id: "4", image: require("../../assets/images/Tropical.png") },
  { id: "5", image: require("../../assets/images/Scandinavian.png") },
];

const FourteenthScreen = ({ navigation }) => {
  const [currentIndex] = useState(9);

  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <View style={styles.dotsContainer}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((dotIndex) => (
          <View
            key={dotIndex}
            style={[styles.dot, currentIndex === dotIndex && styles.activeDot]}
          />
        ))}
      </View>

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
      <Animated.FlatList
        data={carouselData}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * (width * 0.75 + 20),
            index * (width * 0.75 + 20),
            (index + 1) * (width * 0.75 + 20),
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              style={[styles.carouselItem, { transform: [{ scale }] }]}
            >
              <Image source={item.image} style={styles.carouselImage} />
            </Animated.View>
          );
        }}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.75 + 20}
        decelerationRate="fast"
        snapToAlignment="start"
        pagingEnabled={false}
        style={styles.carousel}
        contentContainerStyle={{
          paddingHorizontal: (width - width * 0.75) / 2,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />
      <View style={styles.numbercontainer}>
        <Text style={styles.title}>You’ve got a taste!</Text>
        <Text style={styles.texttwo}>
          <Text style={styles.orange}>Scandinavian</Text> was one of the hottest
          {"\n"}styles last year! We offer it and
          <Text style={styles.orange}> 70 more{"\n"}unique styles</Text> to
          explore.
        </Text>
      </View>
      <View style={styles.bottomButtonWrapper}>
        <TouchableOpacity
          style={styles.buttonredesign}
          onPress={() => navigation.navigate("Fiveteenth")}
        >
          <View style={styles.buttonredesignContent}>
            <Text style={styles.buttonredesigntext}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
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
