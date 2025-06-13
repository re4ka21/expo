import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const options = [
  {
    id: 1,
    icon: <MaterialCommunityIcons name="sofa" size={24} color="black" />,
    text: "Living room",
  },
  {
    id: 2,
    icon: <MaterialCommunityIcons name="chef-hat" size={24} color="black" />,
    text: "kitchen",
  },
  {
    id: 3,
    icon: <MaterialIcons name="dining" size={24} color="black" />,
    text: "Dining room",
  },
  {
    id: 4,
    icon: <FontAwesome5 name="bath" size={24} color="black" />,
    text: "Bathroom",
  },
  {
    id: 5,
    icon: <FontAwesome name="bed" size={24} color="black" />,
    text: "Bedromm",
  },
  {
    id: 6,
    icon: <FontAwesome6 name="face-flushed" size={24} color="black" />,
    text: "other",
  },
];

const FourthSceen = ({ navigation }) => {
  const [currentIndex] = useState(1);
  const [checked, setChecked] = useState([]);

  const toggleCheck = (id) => {
    if (checked.includes(id)) {
      setChecked(checked.filter((item) => item !== id));
    } else {
      setChecked([...checked, id]);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.saveButtonWrapper}
      onPress={() => toggleCheck(item.id)}
    >
      <View style={styles.leftContent}>
        {item.icon}
        <Text style={styles.saveButtonText}>{item.text}</Text>
      </View>
      <View
        style={[
          styles.checkbox,
          checked.includes(item.id) && styles.checkedCheckbox,
        ]}
      >
        {checked.includes(item.id) && (
          <Entypo name="check" size={12} color="white" />
        )}
      </View>
    </TouchableOpacity>
  );

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
        <Text style={styles.text}>
          What rooms would you like{"\n"} to redesign?
        </Text>
      </View>
      <FlatList
        data={options}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <View style={styles.bottomButtonWrapper}>
        <TouchableOpacity
          disabled={checked.length === 0}
          style={
            checked.length === 0
              ? styles.buttonredesigninactive
              : styles.buttonredesign
          }
          onPress={() => navigation.navigate("Fiveth")}
        >
          <View style={styles.buttonredesignContent}>
            <Text style={styles.buttonredesigntext}>
              {checked.length === 0 ? "Pick one or more" : "Continue"}
            </Text>
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
  text: {
    fontSize: 24,
    fontFamily: "InstrumentSerif",
    marginLeft: 12, // Відступ між іконкою та текстом
    flexShrink: 1, // Дозволяє тексту не виходити за межі
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

export default FourthSceen;
