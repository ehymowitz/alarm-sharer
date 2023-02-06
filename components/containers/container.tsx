import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "../../lib/tailwind";

interface ContainerProps {
  additionalStyles?: string;
  topLevel?: boolean;
}

const ChildrenView = ({
  children,
  additionalStyles,
}: PropsWithChildren<ContainerProps>) => (
  <View style={tw`py-4, ${additionalStyles || ""}`}>{children}</View>
);

const Container = ({
  children,
  additionalStyles,
  topLevel = false,
}: PropsWithChildren<ContainerProps>) => {
  return topLevel ? (
    <SafeAreaView style={tw`h-full`}>
      <ChildrenView children={children} additionalStyles={additionalStyles} />
    </SafeAreaView>
  ) : (
    <ChildrenView children={children} additionalStyles={additionalStyles} />
  );
};

export default Container;
