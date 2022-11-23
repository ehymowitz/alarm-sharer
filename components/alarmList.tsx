import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { useQuery } from "react-query";
import { listFiles } from "../firebase/utilFunctions";
import useDownloadAlarm from "../hooks/useDownloadAlarm";
import HorizontalContainer from "./containers/horizontalContainer";
import TextContainer from "./containers/textContainer";
import RegularText from "./typography/regularText";

const AlarmList = () => {
  const { data, isFetching } = useQuery("alarms", listFiles);
  const { selectedAlarm, setSelectedAlarm } = useDownloadAlarm();

  if (isFetching) return <RegularText>Loading...</RegularText>;

  if (!data || data.length === 0) return <RegularText>None</RegularText>;

  return (
    <TextContainer>
      {data.map((alarm, i) => {
        const selected = selectedAlarm === alarm;
        return (
          <HorizontalContainer key={alarm}>
            <Ionicons
              name={selected ? "checkmark" : "download-outline"}
              size={16}
              color="black"
              onPress={() => setSelectedAlarm(alarm)}
            />
            <RegularText bold={selected}>{alarm}</RegularText>
          </HorizontalContainer>
        );
      })}
    </TextContainer>
  );
};

export default AlarmList;
