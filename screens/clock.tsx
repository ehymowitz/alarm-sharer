import React from "react";
import Container from "../components/containers/container";
import TimePicker from "../components/inputs/timePicker";
import RegularText from "../components/typography/regularText";
import TitleText from "../components/typography/titleText";
import useAlarmUi from "../hooks/useAlarmUi";
import useCurrentTime from "../hooks/useCurrentTime";

export type Time = number | "";

const Clock = () => {
  const time = useCurrentTime();
  const { displayTime, am, setAm, selectedTime, setSelectedTime } = useAlarmUi({
    time,
  });

  return (
    <Container>
      <TitleText>Clock</TitleText>
      <RegularText>{time}</RegularText>
      <TimePicker
        time={selectedTime}
        setTime={setSelectedTime}
        am={am}
        setAm={setAm}
      />
      <TitleText>{displayTime}</TitleText>
    </Container>
  );
};

export default Clock;
