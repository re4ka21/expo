// navigation/OnboardingStack.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../screeens/Onboarding/FirstLoadingScreen";
import SecondScreen from "../screeens/Onboarding/SecondScreen";
import CheckCombinedScreen from "../screeens/Onboarding/CheckCombinedScreen";
import CombinedScreen from "../screeens/Onboarding/CombinedScreen";
import EighthScreen from "../screeens/Onboarding/InterestingFactScreen";
import CombinedCarouselScreen from "../screeens/Onboarding/CombinedCarouselScreen";
import EleventhScreen from "../screeens/Onboarding/ResponseScreen";
import ThirteenthScreen from "../screeens/Onboarding/SelectStyleScreen";
import FiveteenthScreen from "../screeens/Onboarding/LastOnboardingScreen";

const Stack = createNativeStackNavigator();

export default function OnboardingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="First" component={FirstScreen} />
      <Stack.Screen name="Second" component={SecondScreen} />
      <Stack.Screen name="CheckCombined" component={CheckCombinedScreen} />
      <Stack.Screen name="Combined" component={CombinedScreen} />
      <Stack.Screen name="Eighth" component={EighthScreen} />
      <Stack.Screen name="Carousel" component={CombinedCarouselScreen} />
      <Stack.Screen name="Eleventh" component={EleventhScreen} />
      <Stack.Screen name="Thirteenth" component={ThirteenthScreen} />
      <Stack.Screen
        name="Fiveteenth"
        component={FiveteenthScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
