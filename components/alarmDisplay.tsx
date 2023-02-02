import { useAtom } from "jotai";
import React from "react";
import useSoundPlayer from "../hooks/useSoundPlayer";
import { alarmAtom } from "../jotai";
import PrimaryButton from "./buttons/primaryButton";
import Container from "./containers/container";
import RegularText from "./typography/regularText";
import TitleText from "./typography/titleText";

const AlarmDisplay = () => {
  const [{ displayValues, url }] = useAtom(alarmAtom);
  const setSound = useSoundPlayer();

  return (
    <Container>
      <TitleText>Current Alarm</TitleText>
      {!url ? (
        <RegularText>No Alarm Selected</RegularText>
      ) : (
        <>
          <RegularText>
            {displayValues?.name} - {displayValues?.composer}
          </RegularText>

          <PrimaryButton
            title={"Preview Alarm"}
            onPress={() => setSound(url)}
          />
        </>
      )}
    </Container>
  );
};

export default AlarmDisplay;
