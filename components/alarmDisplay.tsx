import { useAtom } from "jotai";
import React from "react";
import { playSound, saveSound } from "../audioUtils";
import { alarmAtom } from "../hooks/useDownloadAlarm";
import useSoundPlayer from "../hooks/useSoundPlayer";
import PrimaryButton from "./buttons/primaryButton";
import Container from "./containers/container";
import RegularText from "./typography/regularText";
import TitleText from "./typography/titleText";

const AlarmDisplay = () => {
  const [{ name, data, isFetching }] = useAtom(alarmAtom);
  const soundPlayer = useSoundPlayer();

  return (
    <Container>
      <TitleText>Current Alarm</TitleText>
      {isFetching ? (
        <RegularText>No Alarm Selected</RegularText>
      ) : (
        <>
          <RegularText>{name}</RegularText>

          <PrimaryButton
            title={"Preview Alarm"}
            onPress={() => playSound(soundPlayer, data)}
          />
          <PrimaryButton title={"Use Alarm"} onPress={() => saveSound(data)} />
        </>
      )}
    </Container>
  );
};

export default AlarmDisplay;
