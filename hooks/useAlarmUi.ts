import { useState } from "react";
import { Time } from "../screens/clock";

interface useAlarmUiProps {
  time: string;
}

const useAlarmUi = ({ time }: useAlarmUiProps) => {
  const [am, setAm] = useState<boolean>(true);

  const [selectedTime, setSelectedTime] = useState<{
    hour: Time;
    minute: Time;
  }>({
    hour: "",
    minute: "",
  });

  const handleTimeDisplay = (value: Time) => {
    if (value === 0) {
      return "00";
    } else if (value > 0 && value < 10) {
      return `0${value}`;
    } else if (value >= 10) {
      return `${value}`;
    } else {
      return "00";
    }
  };

  const displayTime = `${handleTimeDisplay(
    selectedTime.hour
  )}:${handleTimeDisplay(selectedTime.minute)} ${am ? "AM" : "PM"}`;

  console.log(time, displayTime);
  if (displayTime === time) {
    console.log("alarm should sound");
  }

  return {
    displayTime,
    am,
    setAm,
    selectedTime,
    setSelectedTime,
  };
};

export default useAlarmUi;
