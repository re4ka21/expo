import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const options = [
  {
    id: 1,
    icon: <AntDesign name="star" size={24} color="black" />,
    text: "Get inspired by design ideas",
  },
  {
    id: 2,
    icon: <AntDesign name="cloud" size={24} color="black" />,
    text: "Just curious to see how my\nspace could look",
  },
  {
    id: 3,
    icon: <Entypo name="home" size={24} color="black" />,
    text: "Plan renovations",
  },
  {
    id: 4,
    icon: <MaterialCommunityIcons name="sofa" size={24} color="black" />,
    text: "Find and purchase products",
  },
  {
    id: 5,
    icon: <FontAwesome6 name="face-flushed" size={24} color="black" />,
    text: "Other",
  },
];

const ThirdScreen = ({ navigation }) => {
  const [currentIndex] = useState(0);
  const [checked, setChecked] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.saveButtonWrapper}
      onPress={() => setChecked(item.id)}
    >
      <View style={styles.leftContent}>
        {item.icon}
        <Text style={styles.saveButtonText}>{item.text}</Text>
      </View>
      <View
        style={[styles.checkbox, checked === item.id && styles.checkedCheckbox]}
      >
        {checked === item.id && <Entypo name="check" size={12} color="white" />}
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
    
      <Text style={styles.text}>
        What results are you looking{"\n"} for with Instant Remodel?
      </Text>
      

      <FlatList
        data={options}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <View style={styles.bottomButtonWrapper}>
        <TouchableOpacity
       disabled={checked == null}
       style={
         checked == null
           ? styles.buttonredesigninactive
           : styles.buttonredesign
       }
       onPress={() => navigation.navigate("Fourth")}
     >
       <View style={styles.buttonredesignContent}>
         <Text style={styles.buttonredesigntext}>
           {checked == null ? "Pick" : "Next"}
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
    fontSize: 32,
    fontFamily: "InstrumentSerif",
    marginTop: 60,
    marginLeft: 15,
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

export default ThirdScreen;
