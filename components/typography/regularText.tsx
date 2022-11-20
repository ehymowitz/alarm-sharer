import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
import tw from "twrnc";

interface RegularTextProps {}

const RegularText = ({ children }: PropsWithChildren<RegularTextProps>) => {
  return <Text style={tw``}>{children}</Text>;
};

export default RegularText;
