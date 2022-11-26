import React from "react";
import { Button, TouchableHighlight } from "react-native";
import tw from "twrnc";

interface PrimaryButtonProps {
  onPress?: () => void;
  title: string;
}

const PrimaryButton = ({ onPress, title }: PrimaryButtonProps) => (
  <TouchableHighlight style={tw`my-2 h-10 w-full`}>
    <Button onPress={onPress} title={title} />
  </TouchableHighlight>
);

export default PrimaryButton;
