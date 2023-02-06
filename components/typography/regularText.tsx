import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
import tw from "../../lib/tailwind";

interface RegularTextProps {
  bold?: boolean;
  additionalStyles?: string;
}

const RegularText = ({
  children,
  bold = false,
  additionalStyles = "",
}: PropsWithChildren<RegularTextProps>) => {
  return (
    <Text
      style={tw.style(
        `font-body text-gray-50`,
        bold && "font-bodyBold",
        additionalStyles
      )}
    >
      {children}
    </Text>
  );
};

export default RegularText;
