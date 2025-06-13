import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const EighthScreen = ({ navigation }) => {
  const [currentIndex] = useState(4);

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
      <View style={styles.bottomButtonWrapper}>
        <TouchableOpacity
          style={styles.buttonredesign}
          onPress={() => navigation.navigate("Nineth")}
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
    marginLeft: 52, // Відступ між іконкою та текстом
    flexShrink: 1, // Дозволяє тексту не виходити за межі
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
  saveButtonWrapper: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    backgroundColor: "white",
    paddingVertical: 25,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // важливо
    elevation: 1,
    width: "90%",
    marginRight: 16,
    marginLeft: 16,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 16,
    marginLeft: 8,
    color: "#000",
    fontWeight: "bold",
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
  buttonredesign: {
    backgroundColor: "#FC632B",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    width: "92%",
  },
  buttonredesigninactive: {
    backgroundColor: "#CCCBC6",
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
    bottom: 70,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});

export default EighthScreen;
