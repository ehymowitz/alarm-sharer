import React from "react";
import { useQuery } from "react-query";
import { listFiles } from "../firebase/utilFunctions";
import TextContainer from "./containers/textContainer";
import RegularText from "./typography/regularText";

const AlarmList = () => {
  const { isLoading, data } = useQuery("alarms", listFiles);

  if (isLoading || !data) return null;

  return (
    <TextContainer>
      {data.map((alarm) => (
        <RegularText key={alarm}>{alarm}</RegularText>
      ))}
    </TextContainer>
  );
};

export default AlarmList;
