import React, { useState } from "react";
import Container from "../components/containers/container";
import TimePicker from "../components/inputs/timePicker";
import RegularText from "../components/typography/regularText";
import TitleText from "../components/typography/titleText";
import useCurrentTime from "../hooks/useCurrentTime";

export type Time = number | "";

const Clock = () => {
  const time = useCurrentTime();
  const [selectedTime, setSelectedTime] = useState<{
    hour: Time;
    minute: Time;
  }>({
    hour: "",
    minute: "",
  });

  return (
    <Container>
      <TitleText>Clock</TitleText>
      <RegularText>{time}</RegularText>
      <TimePicker time={selectedTime} setTime={setSelectedTime} />
    </Container>
  );
};

export default Clock;
