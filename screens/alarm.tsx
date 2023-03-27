import * as Device from "expo-device";
import React from "react";
import AlarmDisplay from "../components/alarmDisplay";
import AlarmList from "../components/alarmList";
import AlarmUpload from "../components/alarmUpload";
import Container from "../components/containers/container";
import LinkText from "../components/typography/linkText";
import TitleText from "../components/typography/titleText";

const APP_LINK =
  "https://drive.google.com/drive/folders/1RmF0a7G3APrRk7CB4eq6gBTBAkKrIBv0?usp=share_link";

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
