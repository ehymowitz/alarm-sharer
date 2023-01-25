import * as Device from "expo-device";
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

const CustomAlarmSounds = Device.brand ? require("custom-alarm-sounds") : null;

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
      {alarmData.name && selectedTime ? (
        <>
          {Device.brand ? (
            <PrimaryButton
              title="Set Alarm"
              onPress={() => {
                if (alarmData.location && Device.brand) {
                  CustomAlarmSounds.setAlarm(
                    selectedTime.hour(),
                    selectedTime.minute(),
                    alarmData.name || "",
                    alarmData.location
                  );
                }
              }}
            />
          ) : (
            <>
              <TitleText>Play Alarm?</TitleText>
              <CheckboxComponent
                isChecked={playAlarm}
                setIsChecked={setPlayAlarm}
              />
              <RegularText>Alarm to play: {alarmData.name}</RegularText>
            </>
          )}
        </>
      ) : (
        <TitleText>Select and alarm and a time</TitleText>
      )}
    </Container>
  );
};

export default Clock;
