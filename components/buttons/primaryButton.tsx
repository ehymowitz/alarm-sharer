import React, { PropsWithChildren } from "react";
import { Button } from "react-native";

interface PrimaryButtonProps {
  onPress?: () => void;
  title: string;
}

const PrimaryButton = ({ onPress, title }: PrimaryButtonProps) => {
  return <Button onPress={onPress} title={title} />;
};

export default PrimaryButton;
