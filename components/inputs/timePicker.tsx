import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Switch, TextInput, View } from "react-native";
import tw from "twrnc";
import { TimeObject } from "../../types";
import Container from "../containers/container";
import RegularText from "../typography/regularText";

const MAX_HOUR = 11;
const MAX_MINUTE = 59;

interface TimePickerProps {
  time: TimeObject;
  setTime: React.Dispatch<React.SetStateAction<TimeObject>>;
}

const TimePicker = ({ time, setTime }: TimePickerProps) => {
  const changeTime = (value: number, isMinutes: boolean = false) => {
    const MAX_VALUE = isMinutes ? MAX_MINUTE : MAX_HOUR;
    if (value <= MAX_VALUE) {
      const newTime = isMinutes
        ? { ...time, minute: value }
        : { ...time, hour: value };

      setTime(newTime);
    }
  };

  const incrementedTime = (
    value: number,
    max_value: number,
    increment: boolean = true
  ) => {
    if (increment) {
      if (typeof value !== "number") {
        return 1;
      } else if (value >= max_value) {
        return 0;
      } else {
        return value + 1;
      }
    } else {
      if (typeof value !== "number") {
        return 0;
      } else if (value === 0) {
        return max_value;
      } else {
        return value - 1;
      }
    }
  };

  return (
    <Container>
      <View style={tw`flex-row`}>
        <TextInput
          style={tw`h-10 bg-white p-2 my-2`}
          onChangeText={(text) => changeTime(parseInt(text))}
          value={time?.hour.toString()}
          placeholder="Hours"
        />
        <View>
          <Ionicons
            name="add"
            size={24}
            color="black"
            onPress={() => {
              setTime({ ...time, hour: incrementedTime(time.hour, MAX_HOUR) });
            }}
          />
          <Ionicons
            name="remove"
            size={24}
            color="black"
            onPress={() => {
              setTime({
                ...time,
                hour: incrementedTime(time.hour, MAX_HOUR, false),
              });
            }}
          />
        </View>

        <TextInput
          style={tw`h-10 bg-white p-2 my-2`}
          onChangeText={(text) => changeTime(parseInt(text), true)}
          value={time?.minute.toString()}
          placeholder="Minutes"
        />
        <View>
          <Ionicons
            name="add"
            size={24}
            color="black"
            onPress={() => {
              setTime({
                ...time,
                minute: incrementedTime(time.minute, MAX_MINUTE),
              });
            }}
          />
          <Ionicons
            name="remove"
            size={24}
            color="black"
            onPress={() => {
              setTime({
                ...time,
                minute: incrementedTime(time.minute, MAX_MINUTE, false),
              });
            }}
          />
        </View>

        <RegularText>{time.am ? "AM" : "PM"}</RegularText>
        <Switch
          onValueChange={() => setTime({ ...time, am: !time.am })}
          value={time.am}
        />
      </View>
    </Container>
  );
};

export default TimePicker;
