import React from "react";
import AlarmDisplay from "../components/alarmDisplay";
import AlarmList from "../components/alarmList";
import AlarmUpload from "../components/alarmUpload";
import Container from "../components/containers/container";
import TitleText from "../components/typography/titleText";

const Home = () => {
  return (
    <Container>
      <TitleText>Available Alarms</TitleText>
      <AlarmList />
      <AlarmUpload />
      <AlarmDisplay />
    </Container>
  );
};

export default Home;
