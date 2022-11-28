import React from "react";
import Container from "../components/containers/container";
import TimePicker from "../components/inputs/timePicker";
import RegularText from "../components/typography/regularText";
import TitleText from "../components/typography/titleText";
import useCurrentTime from "../hooks/useCurrentTime";

const Clock = () => {
  const time = useCurrentTime();

  return (
    <Container>
      <TitleText>Clock</TitleText>
      <RegularText>{time}</RegularText>
      <TimePicker />
    </Container>
  );
};

export default Clock;
