import React, { PropsWithChildren } from "react";
import { View } from "react-native";

const Container = ({ children }: PropsWithChildren) => {
  return <View>{children}</View>;
};

export default Container;
