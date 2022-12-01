import { useAtom } from "jotai";
import React, { useState } from "react";
import { playSound, snoozeSound } from "../audioUtils";
import PrimaryButton from "../components/buttons/primaryButton";
import Container from "../components/containers/container";
import CheckboxComponent from "../components/inputs/checkboxComponent";
import TimePicker from "../components/inputs/timePicker";
import RegularText from "../components/typography/regularText";
import TitleText from "../components/typography/titleText";
import useCurrentTime from "../hooks/useCurrentTime";
import { alarmAtom } from "../hooks/useDownloadAlarm";
import useSoundPlayer from "../hooks/useSoundPlayer";

export type Time = number | "";
export interface TimeObject {
  hour: Time;
  minute: Time;
  am: boolean;
}

const Clock = () => {
  const time = useCurrentTime();
  const [selectedTime, setSelectedTime] = useState<TimeObject>({
    hour: "",
    minute: "",
    am: true,
  });
  const [playAlarm, setPlayAlarm] = useState(true);
  const [alarmData] = useAtom(alarmAtom);
  const soundPlayer = useSoundPlayer();

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
  )}:${handleTimeDisplay(selectedTime.minute)} ${
    selectedTime.am ? "AM" : "PM"
  }`;

  const alarmGoesOff = displayTime === time && playAlarm;

  if (alarmGoesOff) {
    playSound(soundPlayer, alarmData.data);
  }

  return (
    <Container>
      <TitleText>Clock</TitleText>
      <RegularText>{time}</RegularText>
      <TimePicker time={selectedTime} setTime={setSelectedTime} />
      <TitleText>{displayTime}</TitleText>
      <CheckboxComponent isChecked={playAlarm} setIsChecked={setPlayAlarm} />
      <RegularText>Alarm to play: {alarmData.name}</RegularText>
      {!alarmGoesOff && <PrimaryButton title="Snooze" onPress={snoozeSound} />}
    </Container>
  );
};

export default Clock;
