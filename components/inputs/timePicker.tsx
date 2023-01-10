import { ClockPicker, LocalizationProvider } from "@mui/x-date-pickers/";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import dayjs, { Dayjs } from "dayjs";
import * as Device from "expo-device";
import React, { useState } from "react";
import PrimaryButton from "../buttons/primaryButton";
import TitleText from "../typography/titleText";

interface TimePickerProps {
  time?: Dayjs;
  setTime: React.Dispatch<React.SetStateAction<Dayjs | undefined>>;
}

const TimePicker = ({ time, setTime }: TimePickerProps) => {
  const [viewHours, setViewHours] = useState(true);

  const handleChangeDevice = (time?: Date) => {
    setTime(dayjs(time));
  };

  const showTime = () => {
    DateTimePickerAndroid.open({
      value: (time || dayjs()).toDate(),
      onChange: (_e, date) => handleChangeDevice(date),
      mode: "time",
      is24Hour: true,
    });
  };

  return (
    <>
      <TitleText>Alarm Time: {time?.format("h:mm a")}</TitleText>
      {Device.brand ? (
        <PrimaryButton title="Select Time" onPress={showTime} />
      ) : (
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

          <PrimaryButton
            onPress={() => setViewHours(!viewHours)}
            title="Hours/Minutes"
          />
        </LocalizationProvider>
      )}
    </>
  );
};

export default TimePicker;
