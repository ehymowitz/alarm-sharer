import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import tw from "twrnc";

const HorizontalContainer = ({ children }: PropsWithChildren) => {
  return <View style={tw`p-4 flex-row`}>{children}</View>;
};

export default HorizontalContainer;
