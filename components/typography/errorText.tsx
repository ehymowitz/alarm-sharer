import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
import tw from "../../lib/tailwind";

interface ErrorTextProps {}

const ErrorText = ({ children }: PropsWithChildren<ErrorTextProps>) => {
  return <Text style={tw`font-body text-red-400`}>{children}</Text>;
};

export default ErrorText;
