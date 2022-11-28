import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import Home from "../screens/alarm";
import Clock from "../screens/clock";
import { RootStackParamList } from "./navigation";

const Navigation = () => (
  <NavigationContainer>
    <RootStackNavigator />
    <StatusBar />
  </NavigationContainer>
);

const RootStack = createBottomTabNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Alarm"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="musical-note-outline" size={24} color="black" />
          ),
        }}
      />
      <RootStack.Screen
        name="Clock"
        component={Clock}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="alarm-outline" size={24} color="black" />
          ),
        }}
      />
    </RootStack.Navigator>
  );
};

export default Navigation;
