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

  const setSound = useSoundPlayer();

  const alarmGoesOff =
    JSON.stringify(currentTime) === JSON.stringify(selectedTime) && playAlarm;
  const [alarmData] = useAtom(alarmAtom);

  // Should only play here if on web - otherwise want to set notification
  if (alarmGoesOff && playAlarm) {
    if (!Device.brand && alarmData.url) {
      setSound(alarmData.url);
      setPlayAlarm(false);
    } else {
      // If device play from local - SET NOTIFICATION TRIGGER
    }
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
