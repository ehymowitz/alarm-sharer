import dayjs, { Dayjs } from "dayjs";
import * as Device from "expo-device";
import { useAtom } from "jotai";
import { useState } from "react";
import { alarmAtom } from "../jotai";
import useSoundPlayer from "./useSoundPlayer";

const useAlarmTime = () => {
  const currentTime = dayjs();
  const [selectedTime, setSelectedTime] = useState<Dayjs | undefined>();
  const [playAlarm, setPlayAlarm] = useState(false);
  const [alarmData] = useAtom(alarmAtom);

  const setSound = useSoundPlayer();

  const alarmGoesOff =
    JSON.stringify(currentTime) === JSON.stringify(selectedTime) &&
    playAlarm &&
    alarmData.url;

  if (alarmGoesOff) {
    setSound(alarmData.url);
    setPlayAlarm(false);
  }

  return {
    selectedTime,
    playAlarm,
    setPlayAlarm,
    setSelectedTime,
    alarmGoesOff,
  };
};

export default useAlarmTime;
