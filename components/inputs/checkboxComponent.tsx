import React, { useState } from "react";
import { View } from "react-native";
import Checkbox from "expo-checkbox";

interface CheckboxComponentProps {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckboxComponent = ({
  isChecked,
  setIsChecked,
}: CheckboxComponentProps) => {
  return (
    <View>
      <Checkbox value={isChecked} onValueChange={setIsChecked} />
    </View>
  );
};

export default CheckboxComponent;
