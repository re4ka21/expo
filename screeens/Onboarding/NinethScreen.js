import QuestionScreen from "./QuestionScreen";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ONBOARDING_SCREENS } from "../../constants";
import { NinethOptions } from "../../constants";

const currentIndex = ONBOARDING_SCREENS.indexOf("NinethScreen");
const NinethScreen = ({ navigation }) => {
  return (
    <QuestionScreen
      navigation={navigation}
      question={"Do you have any experience with redesigning your home?"}
      options={NinethOptions}
      nextScreen="Tenth"
      currentIndex={currentIndex}
    />
  );
};

export default NinethScreen;
