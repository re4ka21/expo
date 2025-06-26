// SixthScreen.js
import React from "react";
import QuestionScreen from "./QuestionScreen";

import { ONBOARDING_SCREENS } from "../../constants";
import { SixthOptions } from "../../constants";
const SixthScreen = ({ navigation }) => {
  const currentIndex = ONBOARDING_SCREENS.indexOf("SixthScreen");
  return (
    <QuestionScreen
      navigation={navigation}
      currentIndex={currentIndex}
      question={"How do you feel about the\ncurrent state of your home?"}
      options={SixthOptions}
      nextScreen="Seventh"
    />
  );
};

export default SixthScreen;
