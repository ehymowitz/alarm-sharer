import React from "react";
import AlarmList from "../components/alarmList";
import Container from "../components/containers/container";
import TitleText from "../components/typography/titleText";

const Home = () => {
  return (
    <Container>
      <TitleText>Available Alarms</TitleText>
      <AlarmList />
    </Container>
  );
};

export default Home;
