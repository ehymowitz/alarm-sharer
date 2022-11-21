import React, { Suspense } from "react";
import AlarmList from "../components/alarmList";
import Container from "../components/containers/container";
import RegularText from "../components/typography/regularText";
import TitleText from "../components/typography/titleText";

const Home = () => {
  return (
    <Container>
      <TitleText>Available Alarms</TitleText>
      <Suspense fallback={<RegularText>Loading...</RegularText>}>
        <AlarmList />
      </Suspense>
    </Container>
  );
};

export default Home;
