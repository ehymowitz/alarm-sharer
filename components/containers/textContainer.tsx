import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import tw from "twrnc";

interface TextContainerProps {
  additionalStyles?: string;
}

const TextContainer = ({
  children,
  additionalStyles,
}: PropsWithChildren<TextContainerProps>) => {
  return <View style={tw`my-3 ${additionalStyles || ""}`}>{children}</View>;
};

export default TextContainer;
