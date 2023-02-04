import React from "react";
import AlarmDisplay from "../components/alarmDisplay";
import AlarmList from "../components/alarmList";
import AlarmUpload from "../components/alarmUpload";
import Container from "../components/containers/container";
import TitleText from "../components/typography/titleText";

const Home = () => {
  return (
    <Container topLevel additionalStyles="bg-slate-700 h-full px-5">
      <TitleText>Available Alarms</TitleText>
      <AlarmList />
      <AlarmUpload />
      <AlarmDisplay />
    </Container>
  );
};

export default Home;
