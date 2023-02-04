import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
import tw from "twrnc";

const TitleText = ({ children }: PropsWithChildren) => {
  return <Text style={tw`text-gray-50 font-bold text-xl`}>{children}</Text>;
};

export default TitleText;
