import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStack from "./MainStack";
import History from "../screeens/History";
import Measure from "../screeens/Measure";
import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="MainStack"
        component={MainStack}
        options={{ title: "Redesign" }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{ title: "History" }}
      />
      <Tab.Screen
        name="Measure"
        component={Measure}
        options={{ title: "Measure" }}
      />
    </Tab.Navigator>
  );
}
