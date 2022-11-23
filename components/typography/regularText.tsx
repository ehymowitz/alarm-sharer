import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
import tw from "twrnc";

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
    <Text style={tw.style(bold && "font-bold", addtionalStyles)}>
      {children}
    </Text>
  );
};

export default RegularText;
