
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingStack from "./OnboardingStack";
import MainTabNavigator from "./MainTabNavigator";
import { useSelector } from "react-redux";

const Root = createNativeStackNavigator();

export default function RootNavigator() {
  const finished = useSelector((state) => state.user.onboardingDone);

  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      {!finished ? (
        <Root.Screen name="Onboarding" component={OnboardingStack} />
      ) : (
        <Root.Screen name="Main" component={MainTabNavigator} />
      )}
    </Root.Navigator>
  );
}
