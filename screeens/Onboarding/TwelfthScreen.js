import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { ONBOARDING_SCREENS } from "../../constants";
import OnboardingDots from "../../components/Dots";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TwelfthOptions } from "../../constants";
import CheckContinueButton from "../../components/ContinueButtons/CheckContinueButton";
const currentIndex = ONBOARDING_SCREENS.indexOf("TwelfthScreen");
const TwelfthScreen = ({ navigation }) => {
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
      <OnboardingDots
        currentIndex={currentIndex}
        total={ONBOARDING_SCREENS.length}
      />
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
        data={TwelfthOptions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <CheckContinueButton
        onPress={() => navigation.navigate("Thirteenth")}
        disabled={checked.length === 0}
      />
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
});
export default TwelfthScreen;
