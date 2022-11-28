import React, { useState } from "react";
import { Switch, TextInput, View } from "react-native";
import tw from "twrnc";
import RegularText from "../typography/regularText";

const TimePicker = () => {
  const [time, setTime] = useState<{
    hour?: number;
    minute?: number;
  }>();

  const [am, setAm] = useState<boolean>(true);

  return (
    <View style={tw`flex-row`}>
      <TextInput
        style={tw`h-10 bg-white p-2 my-2`}
        onChangeText={() => {}}
        value={time?.hour?.toString()}
        placeholder="Hours"
      />
      <TextInput
        style={tw`h-10 bg-white p-2 my-2`}
        onChangeText={() => {}}
        value={time?.minute?.toString()}
        placeholder="Minute"
      />
      <RegularText>{am ? "am" : "pm"}</RegularText>
      <Switch onValueChange={() => setAm(!am)} value={am} />
    </View>
  );
};

export default TimePicker;
