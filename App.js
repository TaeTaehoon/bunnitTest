import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CallenderScreen from "./pages/CallenderScreen";
import LibraryScreen from "./pages/LibraryScreen";
import MypageScreen from "./pages/MypageScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./pages/HomeScreen";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Callender") {
              iconName = focused ? "calendar" : "calendar-outline";
            } else if (route.name === "Library") {
              iconName = focused ? "library" : "library-outline";
            } else if (route.name === "Mypage") {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <BottomTab.Screen name="Home" component={HomeScreen} />
        <BottomTab.Screen name="Callender" component={CallenderScreen} />
        <BottomTab.Screen name="Library" component={LibraryScreen} />
        <BottomTab.Screen name="Mypage" component={MypageScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12ef44",
    alignItems: "center",
    justifyContent: "center",
  },
});
// const BottomNavigator = createBottomTabNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   Callender: {
//     screen: CallenderScreen,
//   },
//   Library: {
//     screen: LibraryScreen,
//   },
//   Mypage: {
//     screen: MypageScreen,
//   },
// });

// export default createAppContainer(BottomNavigator);
