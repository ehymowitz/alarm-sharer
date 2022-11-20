import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import tw from "twrnc";

interface TextContainerProps {}

const TextContainer = ({ children }: PropsWithChildren<TextContainerProps>) => {
  return <View style={tw``}>{children}</View>;
};

export default TextContainer;
