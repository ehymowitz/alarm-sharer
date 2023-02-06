import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as Device from "expo-device";
import { StatusBar } from "expo-status-bar";
import React from "react";
import tw from "../lib/tailwind";
import Home from "../screens/alarm";
import Clock from "../screens/clock";
import { RootStackParamList } from "./navigation";

const Navigation = () => (
  <NavigationContainer>
    <RootStackNavigator />
    <StatusBar style="dark" />
  </NavigationContainer>
);

const tabBarOptions = (icon: any) => ({
  tabBarInactiveBackgroundColor: "#292524",
  tabBarActiveBackgroundColor: "#94a3b8",
  tabBarActiveTintColor: "#f9fafb",
  tabBarInactiveTintColor: "#f9fafb",
  headerShown: false,
  tabBarIcon: () => <Ionicons name={icon} size={24} color="#f9fafb" />,
});

const RootStack = createBottomTabNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{ tabBarStyle: tw.style(Device.brand ? `` : `hidden`) }}
    >
      <RootStack.Screen
        name="Alarm"
        component={Home}
        options={tabBarOptions("musical-note-outline")}
      />
      {Device.brand && (
        <RootStack.Screen
          name="Clock"
          component={Clock}
          options={tabBarOptions("alarm-outline")}
        />
      )}
    </RootStack.Navigator>
  );
};

export default Navigation;
