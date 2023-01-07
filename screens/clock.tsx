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
import { schedulePushNotification } from "../notifications";

const Clock = () => {
  const {
    selectedTime,
    playAlarm,
    setPlayAlarm,
    setSelectedTime,
    alarmGoesOff,
  } = useAlarmTime();

  const [alarmData] = useAtom(alarmAtom);
  // const setSound = useSoundPlayer();

  // Notifications.setNotificationHandler({
  //   handleNotification: async () => {
  //     if (alarmData.location) {
  //       setSound(alarmData.location);
  //     }
  //     return {
  //       shouldShowAlert: true,
  //       shouldPlaySound: false,
  //       shouldSetBadge: true,
  //     };
  //   },
  // });

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
          {!alarmGoesOff && (
            <PrimaryButton
              title="Snooze"
              onPress={() => schedulePushNotification()}
            />
          )}
        </>
      ) : (
        <TitleText>No Alarm Selected</TitleText>
      )}
    </Container>
  );
};

export default Clock;
