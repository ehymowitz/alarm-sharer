import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import tw from "twrnc";

const Container = ({ children }: PropsWithChildren) => {
  return <View style={tw`p-4`}>{children}</View>;
};

export default Container;
