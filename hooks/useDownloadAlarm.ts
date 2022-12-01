import { useAtom } from "jotai";
import { useState } from "react";
import { useQuery } from "react-query";
import { downloadFile } from "../firebase/utilFunctions";
import { atomWithAsyncStorage } from "../jotaiUtils";
import { AlarmData } from "./hookTypes";

export const alarmAtom = atomWithAsyncStorage<AlarmData>("@storage_Key", {});

const useDownloadAlarm = () => {
  const [, setAlarmData] = useAtom(alarmAtom);
  const [downloadName, setDownloadName] = useState<string>();

  const {} = useQuery(
    ["alarm", downloadName],
    () => downloadFile(downloadName),
    {
      cacheTime: 0,
      onSuccess: (data) => {
        if (data) {
          setAlarmData({ name: downloadName, data });
        }
      },
    }
  );

  return setDownloadName;
};

export default useDownloadAlarm;
