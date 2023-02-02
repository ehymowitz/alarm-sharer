import { useAtom } from "jotai";
import { useState } from "react";
import { useQuery } from "react-query";
import { replaceDownloadedFile } from "../firebase/utilFunctions";
import { alarmAtom } from "../jotai";
import { AlarmDisplayInfo } from "../types";

const useDownloadAlarm = () => {
  const [alarm, setAlarmData] = useAtom(alarmAtom);
  const [downloadedAlarm, setDownloadName] = useState<AlarmDisplayInfo>();

  const { isFetching } = useQuery({
    queryKey: ["alarm", downloadedAlarm],
    queryFn: async () => {
      if (downloadedAlarm?.name) {
        const data = await replaceDownloadedFile(
          downloadedAlarm.name,
          alarm.displayValues?.name
        );

        setAlarmData({
          displayValues: downloadedAlarm,
          url: data.url,
          location: data.location,
        });
      }
    },
  });

  return { downloadedAlarm, setDownloadName, alarmDownloading: isFetching };
};

export default useDownloadAlarm;
