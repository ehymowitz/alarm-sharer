import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StatusBar } from "react-native";
import Home from "../screens/home";
import { RootStackParamList } from "./navigation";

const Navigation = () => (
  <NavigationContainer>
    <RootStackNavigator />
    <StatusBar />
  </NavigationContainer>
);

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
};

export default Navigation;
