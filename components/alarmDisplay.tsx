import { useAtom } from "jotai";
import React from "react";
import { playSound } from "../audioUtils";
import { alarmAtom } from "../hooks/useDownloadAlarm";
import useSoundPlayer from "../hooks/useSoundPlayer";
import PrimaryButton from "./buttons/primaryButton";
import Container from "./containers/container";
import RegularText from "./typography/regularText";
import TitleText from "./typography/titleText";

const AlarmDisplay = () => {
  const [{ name, data }] = useAtom(alarmAtom);
  const soundPlayer = useSoundPlayer();

  return (
    <Container>
      <TitleText>Current Alarm</TitleText>
      {!data ? (
        <RegularText>No Alarm Selected</RegularText>
      ) : (
        <>
          <RegularText>{name}</RegularText>

          <PrimaryButton
            title={"Preview Alarm"}
            onPress={() => playSound(soundPlayer, data)}
          />
        </>
      )}
    </Container>
  );
};

export default AlarmDisplay;
