import * as Device from "expo-device";
import React from "react";
import AlarmDisplay from "../components/alarmDisplay";
import AlarmList from "../components/alarmList";
import AlarmUpload from "../components/alarmUpload";
import Container from "../components/containers/container";
import LinkText from "../components/typography/linkText";
import TitleText from "../components/typography/titleText";

const APP_LINK =
  "https://expo.dev/accounts/ehymowitz/projects/alarm-sharer/builds/887dd32a-e985-4d95-b318-ccf61b7fd501";

const Home = () => {
  return (
    <Container topLevel additionalStyles="bg-slate-700 h-full px-5">
      <TitleText>Available Alarms</TitleText>
      {!Device.brand && <LinkText link={APP_LINK}>Download App</LinkText>}
      <AlarmList />
      <AlarmUpload />
      <AlarmDisplay />
    </Container>
  );
};

export default Home;
