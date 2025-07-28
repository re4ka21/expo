import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screeens/Main";
import LoadingScreen from "../screeens/Loading/LoadingScreen";
import Result from "../screeens/Result/Result";
import PayScreen from "../screeens/PayScreen";
const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="Pay" component={PayScreen} />
    </Stack.Navigator>
  );
}
