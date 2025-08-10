import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import UniversalButton from "../../components/ContinueButtons/UniversalButton";
import OnboardingDots from "../../components/Dots";

import {
  ONBOARDING_SCREENS,
  USER_GOALS_OPTIONS,
  ROOM_OPTIONS,
  DESIGN_UPGRADE_OPTIONS,
} from "./onBoardingQuestions";
const dataMap = {
  DesiredResultsScreen: {
    options: USER_GOALS_OPTIONS,
    question: "What results are you looking\nfor with Instant Remodel?",
    nextScreen: "SelectRoomsScreen",
    showBack: false,
  },
  SelectRoomsScreen: {
    options: ROOM_OPTIONS,
    question: "What rooms would you like\nto redesign?",
    nextScreen: (navigation) =>
      navigation.navigate("Carousel", { screenType: "LivingRoomStatsScreen" }),
    showBack: true,
  },
  FinalRoomsScreen: {
    options: DESIGN_UPGRADE_OPTIONS,
    question: "What rooms would you like\nto redesign?",
    nextScreen: "Thirteenth",
    showBack: true,
  },
};

const CheckCombinedScreen = ({ navigation, route }) => {
  const screenType = route?.params?.screenType || "DesiredResultsScreen";

  const { options, question, nextScreen, showBack } = dataMap[screenType];
  const handleContinue = () => {
    if (typeof nextScreen === "function") {
      nextScreen(navigation);
    } else if (dataMap[nextScreen]) {
      navigation.push("CheckCombined", { screenType: nextScreen });
    } else {
      navigation.navigate(nextScreen);
    }
  };
  const currentIndex = ONBOARDING_SCREENS.indexOf(screenType);

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

      {showBack && (
        <View style={styles.title}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome
              name="arrow-circle-left"
              size={32}
              color="#FC632B"
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{question}</Text>
        </View>
      )}

      {!showBack && <Text style={styles.text}>{question}</Text>}

      <FlatList
        data={options}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <UniversalButton
        onPress={handleContinue}
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
    fontSize: 32,
    fontFamily: "InstrumentSerif",
    marginLeft: 15,
    flexShrink: 1,
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
    justifyContent: "space-between",
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
  title: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 60,
  },
  arrow: {
    marginRight: 10,
  },
});

export default CheckCombinedScreen;
