// SeventhScreen.js
import React from "react";
import QuestionScreen from "./QuestionScreen";
import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { ONBOARDING_SCREENS } from "../../constants";
import { SeventhOptions } from "../../constants";
const SeventhScreen = ({ navigation }) => {
  const currentIndex = ONBOARDING_SCREENS.indexOf("SeventhScreen");
  return (
    <QuestionScreen
      navigation={navigation}
      question={
        "Do you agree that the\nquality of your living space\naffects your mood?"
      }
      options={SeventhOptions}
      nextScreen="Eighth"
      currentIndex={currentIndex}
    />
  );
};

export default SeventhScreen;
