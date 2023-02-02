import Ionicons from "@expo/vector-icons/Ionicons";
import { useAtom } from "jotai";
import React from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { useQuery } from "react-query";
import { listFiles } from "../firebase/utilFunctions";
import useDownloadAlarm from "../hooks/useDownloadAlarm";
import { alarmAtom } from "../jotai";
import { AlarmDisplayInfo } from "../types";
import { ShallowEqual } from "../utilFunctions";
import HorizontalContainer from "./containers/horizontalContainer";
import TextContainer from "./containers/textContainer";
import RegularText from "./typography/regularText";

const AlarmList = () => {
  const { data: alarms, isFetching } = useQuery("alarms", listFiles);
  const { setDownloadName, alarmDownloading } = useDownloadAlarm();
  const [storedAlarm] = useAtom(alarmAtom);

  if (isFetching) return <RegularText>Loading...</RegularText>;

  if (!alarms || alarms.length === 0) return <RegularText>None</RegularText>;

  return (
    <TextContainer>
      {alarms.map((alarm) => {
        const selected = ShallowEqual<AlarmDisplayInfo>(
          alarm,
          storedAlarm.displayValues
        );

        return (
          <TouchableOpacity
            key={`${alarm.name}${alarm.composer}`}
            onPress={() => setDownloadName(alarm)}
          >
            <HorizontalContainer>
              <Ionicons
                name={selected ? "checkmark" : "download-outline"}
                size={16}
                color="black"
              />
              <RegularText bold={selected}>{alarm.name}</RegularText>
              <RegularText bold={selected}>
                {" "}
                - by: {alarm.composer}{" "}
              </RegularText>
            </HorizontalContainer>
            {selected && alarmDownloading && <ActivityIndicator />}
          </TouchableOpacity>
        );
      })}
    </TextContainer>
  );
};

export default AlarmList;
