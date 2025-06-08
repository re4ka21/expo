import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const testimonials = [
  { id: "1", text: "This app changed my life!", name: "Anna" },
  { id: "2", text: "Very useful and easy to use.", name: "John" },
  { id: "3", text: "Highly recommended!", name: "Maria" },
];
const EleventhScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

const handleScroll = (event) => {
  const slideSize = event.nativeEvent.layoutMeasurement.width;
  const index = Math.round(event.nativeEvent.contentOffset.x / slideSize); 
  setCurrentIndex(index);
};


  return (
    <View style={styles.carouselContainer}>
      <FlatList
  data={testimonials}
  onScroll={handleScroll}
scrollEventThrottle={16}
  horizontal
  pagingEnabled
    snapToAlignment="center"
     contentContainerStyle={{ paddingHorizontal: (width * 0.075) }}
  showsHorizontalScrollIndicator={false}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.carouselSlide}>
      <Text style={styles.reviewText}>"{item.text}"</Text>
      <Text style={styles.authorText}>— {item.name}</Text>
    </View>
  )}
/>
      <View style={styles.dots}>
        {testimonials.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === currentIndex ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  carouselSlide: {
    width: width * 0.85, // кожен слайд займає 85% ширини екрану
  marginHorizontal: width * 0.0125, // відступи по краях
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    backgroundColor: "white",
    paddingVertical: 25,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  reviewText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  authorText: {
    fontSize: 14,
    color: "#FC632B",
    fontStyle: "italic",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    fontStyle: "italic",
    color: "#333",
  },
  author: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
    color: "#FC632B",
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#FC632B",
  },
});

export default EleventhScreen;
