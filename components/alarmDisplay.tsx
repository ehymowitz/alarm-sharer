import { Audio } from "expo-av";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { alarmAtom } from "../hooks/useDownloadAlarm";
import PrimaryButton from "./buttons/primaryButton";
import Container from "./containers/container";
import RegularText from "./typography/regularText";
import TitleText from "./typography/titleText";

const AlarmDisplay = () => {
  const [{ name, data, isFetching }] = useAtom(alarmAtom);
  const soundPlayer = new Audio.Sound();

  async function playSound() {
    if (!data) return;
    await soundPlayer.loadAsync({ uri: data });
    await soundPlayer.playAsync();
  }

  useEffect(() => {
    return soundPlayer
      ? () => {
          soundPlayer.unloadAsync();
        }
      : undefined;
  }, [soundPlayer]);

  return (
    <Container>
      <TitleText>Current Alarm</TitleText>
      {isFetching ? (
        <RegularText>No Alarm Selected</RegularText>
      ) : (
        <>
          <RegularText>{name}</RegularText>

          <PrimaryButton title={"Play Alarm"} onPress={playSound} />
        </>
      )}
    </Container>
  );
};

export default AlarmDisplay;
