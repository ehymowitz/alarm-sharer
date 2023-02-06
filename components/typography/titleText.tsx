import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
import tw from "../../lib/tailwind";

const TitleText = ({ children }: PropsWithChildren) => {
  return <Text style={tw`text-gray-50 font-title text-4xl`}>{children}</Text>;
};

export default TitleText;
