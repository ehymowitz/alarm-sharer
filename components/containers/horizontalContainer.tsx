import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import tw from "twrnc";

const HorizontalContainer = ({ children }: PropsWithChildren) => {
  return <View style={tw`py-4 flex-row justify-center`}>{children}</View>;
};

export default HorizontalContainer;
