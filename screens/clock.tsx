import { useAtom } from "jotai";
import React from "react";
import PrimaryButton from "../components/buttons/primaryButton";
import Container from "../components/containers/container";
import CheckboxComponent from "../components/inputs/checkboxComponent";
import TimePicker from "../components/inputs/timePicker";
import RegularText from "../components/typography/regularText";
import TitleText from "../components/typography/titleText";
import useAlarmTime from "../hooks/useAlarmTime";
import { alarmAtom } from "../jotai";

const Clock = () => {
  const {
    selectedTime,
    playAlarm,
    setPlayAlarm,
    setSelectedTime,
    alarmGoesOff,
  } = useAlarmTime();

  const [alarmData] = useAtom(alarmAtom);

  return (
    <Container>
      <TitleText>Clock</TitleText>
      <TimePicker time={selectedTime} setTime={setSelectedTime} />
      {alarmData.name ? (
        <>
          <TitleText>Play Alarm?</TitleText>
          <CheckboxComponent
            isChecked={playAlarm}
            setIsChecked={setPlayAlarm}
          />
          <RegularText>Alarm to play: {alarmData.name}</RegularText>
          {!alarmGoesOff && <PrimaryButton title="Snooze" onPress={() => {}} />}
        </>
      ) : (
        <TitleText>No Alarm Selected</TitleText>
      )}
    </Container>
  );
};

export default Clock;
