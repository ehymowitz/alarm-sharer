import Ionicons from "@expo/vector-icons/Ionicons";
import { useAtom } from "jotai";
import React from "react";
import { useQuery } from "react-query";
import { listFiles } from "../firebase/utilFunctions";
import useDownloadAlarm, { alarmAtom } from "../hooks/useDownloadAlarm";
import HorizontalContainer from "./containers/horizontalContainer";
import TextContainer from "./containers/textContainer";
import RegularText from "./typography/regularText";

const AlarmList = () => {
  const { data, isFetching } = useQuery("alarms", listFiles);
  const setDownloadName = useDownloadAlarm();
  const [{ name }] = useAtom(alarmAtom);

  if (isFetching) return <RegularText>Loading...</RegularText>;

  if (!data || data.length === 0) return <RegularText>None</RegularText>;

  return (
    <TextContainer>
      {data.map((alarm) => {
        const selected = name === alarm.name;
        return (
          <HorizontalContainer key={`${alarm.name}${alarm.composer}`}>
            <Ionicons
              name={selected ? "checkmark" : "download-outline"}
              size={16}
              color="black"
              onPress={() => setDownloadName(alarm.name)}
            />
            <RegularText bold={selected}>{alarm.name}</RegularText>
            <RegularText bold={selected}> - by: {alarm.composer}</RegularText>
          </HorizontalContainer>
        );
      })}
    </TextContainer>
  );
};

export default AlarmList;
