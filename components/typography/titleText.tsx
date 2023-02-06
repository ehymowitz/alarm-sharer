import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
import tw from "../../lib/tailwind";

interface TitleTextProps {
  additionalStyles?: string;
}

const TitleText = ({
  children,
  additionalStyles,
}: PropsWithChildren<TitleTextProps>) => {
  return (
    <Text
      style={tw.style(`text-gray-50 font-title text-4xl`, additionalStyles)}
    >
      {children}
    </Text>
  );
};

export default TitleText;
