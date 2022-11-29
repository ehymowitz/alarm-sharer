import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Switch, TextInput, View } from "react-native";
import tw from "twrnc";
import { Time } from "../../screens/clock";
import Container from "../containers/container";
import RegularText from "../typography/regularText";

const MAX_HOUR = 11;
const MAX_MINUTE = 59;

interface TimePickerProps {
  time: { hour: Time; minute: Time };
  setTime: React.Dispatch<React.SetStateAction<{ hour: Time; minute: Time }>>;
  am: boolean;
  setAm: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimePicker = ({ time, setTime, am, setAm }: TimePickerProps) => {
  const changeTime = (value: Time, isMinutes: boolean = false) => {
    const MAX_VALUE = isMinutes ? MAX_MINUTE : MAX_HOUR;
    if (value <= MAX_VALUE || value === "") {
      const newTime = isMinutes
        ? { ...time, minute: value }
        : { ...time, hour: value };

      setTime(newTime);
    }
  };

  const incrementedTime = (
    value: Time,
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
          onChangeText={(text) => changeTime(parseInt(text) || "")}
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
          onChangeText={(text) => changeTime(parseInt(text) || "", true)}
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

        <RegularText>{am ? "AM" : "PM"}</RegularText>
        <Switch onValueChange={() => setAm(!am)} value={am} />
      </View>
    </Container>
  );
};

export default TimePicker;
