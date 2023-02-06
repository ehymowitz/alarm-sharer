import React from "react";
import { TouchableHighlight } from "react-native";
import tw from "../../lib/tailwind";
import RegularText from "../typography/regularText";

interface PrimaryButtonProps {
  onPress?: () => void;
  title: string;
}

const PrimaryButton = ({ onPress, title }: PrimaryButtonProps) => (
  <TouchableHighlight
    style={tw`my-2 h-10 w-full bg-stone-800 rounded flex items-center justify-center`}
    onPress={onPress}
  >
    <RegularText bold>{title}</RegularText>
  </TouchableHighlight>
);

export default PrimaryButton;
