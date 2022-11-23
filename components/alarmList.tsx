import React from "react";
import { useQuery } from "react-query";
import { listFiles } from "../firebase/utilFunctions";
import TextContainer from "./containers/textContainer";
import RegularText from "./typography/regularText";

const AlarmList = () => {
  const { data, isFetching } = useQuery("alarms", listFiles);

  if (isFetching) return <RegularText>Loading...</RegularText>;

  if (!data || data.length === 0) return <RegularText>None</RegularText>;

  return (
    <TextContainer>
      {data.map((alarm) => (
        <RegularText key={alarm}>{alarm}</RegularText>
      ))}
    </TextContainer>
  );
};

export default AlarmList;
