import * as Device from "expo-device";
import { useAtom } from "jotai";
import { useState } from "react";
import { playSound } from "../audioUtils";
import { alarmAtom } from "../jotai";
import { TimeObject } from "../types";
import useCurrentTime from "./useCurrentTime";
import useSoundPlayer from "./useSoundPlayer";

export const TimeToDisplay = (time: TimeObject): string => {
  const handleTimeDisplay = (value: number | string) => {
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

  return `${handleTimeDisplay(time.hour)}:${handleTimeDisplay(time.minute)} ${
    time.am ? "AM" : "PM"
  }`;
};

const useAlarmTime = () => {
  const currentTime = useCurrentTime();
  const [selectedTime, setSelectedTime] = useState<TimeObject>({
    ...currentTime,
    minute: currentTime.minute === 0 ? 59 : currentTime.minute - 1,
  });
  const [playAlarm, setPlayAlarm] = useState(false);
  const soundPlayer = useSoundPlayer();

  const alarmGoesOff =
    JSON.stringify(currentTime) === JSON.stringify(selectedTime) && playAlarm;
  const [alarmData] = useAtom(alarmAtom);

  if (alarmGoesOff) {
    if (!Device.brand) {
      playSound(soundPlayer, alarmData.url);
      setPlayAlarm(false);
    } else {
      // If device play from local
    }
  }

  return {
    currentTimeDisplay: TimeToDisplay(currentTime),
    selectedTime,
    playAlarm,
    setPlayAlarm,
    setSelectedTime,
    alarmGoesOff,
  };
};

export default useAlarmTime;
