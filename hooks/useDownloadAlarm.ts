import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { downloadFile } from "../firebase/utilFunctions";
import { AlarmData } from "./hookTypes";

export const alarmAtom = atom<AlarmData>({});

const useDownloadAlarm = () => {
  const [, setAlarmData] = useAtom(alarmAtom);
  const [selectedAlarm, setSelectedAlarm] = useState<string | undefined>(
    undefined
  );

  const { data, isFetching } = useQuery(
    ["alarm", selectedAlarm],
    () => downloadFile(selectedAlarm),
    { cacheTime: 0 }
  );

  useEffect(() => {
    setAlarmData({ name: selectedAlarm, data, isFetching });
  }, [data]);

  return {
    setSelectedAlarm,
  };
};

export default useDownloadAlarm;
