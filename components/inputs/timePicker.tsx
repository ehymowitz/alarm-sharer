import { TextField } from "@mui/material";
import {
  ClockPicker,
  LocalizationProvider,
  StaticTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import React, { useState } from "react";
import PrimaryButton from "../buttons/primaryButton";
import TitleText from "../typography/titleText";

interface TimePickerProps {
  time?: Dayjs;
  setTime: React.Dispatch<React.SetStateAction<Dayjs | undefined>>;
}

const TimePicker = ({ time, setTime }: TimePickerProps) => {
  const [viewHours, setViewHours] = useState(true);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ClockPicker
        date={time}
        onChange={(newValue) => {
          setTime(newValue || undefined);
          if (viewHours) {
            setViewHours(false);
          }
        }}
        views={["hours", "minutes"]}
        view={viewHours ? "hours" : "minutes"}
      />
      <TitleText>{time?.format("h:mm a")}</TitleText>

      <PrimaryButton
        onPress={() => setViewHours(!viewHours)}
        title="Hours/Minutes"
      />
    </LocalizationProvider>
  );
};

export default TimePicker;
