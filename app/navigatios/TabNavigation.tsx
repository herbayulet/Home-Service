import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/Home";
import BookingScreen from "../screens/BookingScreen/Booking";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import { Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import color from "../utils/color";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: color.PRIMARY,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Beranda
            </Text>
          ),
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="booking"
        component={BookingScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Booking
            </Text>
          ),
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Profil
            </Text>
          ),
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
