import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
import tw from "../../lib/tailwind";

interface RegularTextProps {
  bold?: boolean;
  addtionalStyles?: string;
}

const RegularText = ({
  children,
  bold = false,
  addtionalStyles = "",
}: PropsWithChildren<RegularTextProps>) => {
  return (
    <Text
      style={tw.style(
        `font-body font-2xl text-gray-50`,
        bold && "font-bodyBold",
        addtionalStyles
      )}
    >
      {children}
    </Text>
  );
};

export default RegularText;
