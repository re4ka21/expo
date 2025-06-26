import { ONBOARDING_SCREENS } from "../../constants";
import QuestionScreen from "./QuestionScreen";
import { TenthOptions } from "../../constants";

const currentIndex = ONBOARDING_SCREENS.indexOf("TenthScreen");
const TenthScreen = ({ navigation }) => {
  return (
    <QuestionScreen
      navigation={navigation}
      question={"What do you think could make redesigning your home difficult?"}
      options={TenthOptions}
      nextScreen="Eleventh"
      currentIndex={currentIndex}
    />
  );
};

export default TenthScreen;
