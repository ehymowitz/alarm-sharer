import React from "react";
import useAlarmFiles from "../hooks/useAlarmFiles";
import TextContainer from "./containers/textContainer";
import RegularText from "./typography/regularText";

const AlarmList = () => {
  const { alarms, loading } = useAlarmFiles();

  if (loading) return null;

  return (
    <TextContainer>
      {alarms.map((alarm) => (
        <RegularText key={alarm}>{alarm}</RegularText>
      ))}
    </TextContainer>
  );
};

export default AlarmList;
