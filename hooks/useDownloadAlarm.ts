import { useAtom } from "jotai";
import { useState } from "react";
import { useQuery } from "react-query";
import { replaceDownloadedFile } from "../firebase/utilFunctions";
import { alarmAtom } from "../jotai";

const useDownloadAlarm = () => {
  const [alarm, setAlarmData] = useAtom(alarmAtom);
  const [downloadName, setDownloadName] = useState<string>();
  const [downloadProgress, setDownloadProgress] = useState<number>();

  const {} = useQuery(
    ["alarm", downloadName],
    () => replaceDownloadedFile(setDownloadProgress, downloadName, alarm.name),
    {
      cacheTime: 0,
      onSuccess: (data) => {
        if (data) {
          setAlarmData({
            name: downloadName,
            url: data.url,
            location: data.location,
          });
        }
      },
    }
  );

  return { downloadName, setDownloadName, downloadProgress };
};

export default useDownloadAlarm;
