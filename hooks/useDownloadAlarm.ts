import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { replaceDownloadedFile } from "../firebase/utilFunctions";
import { alarmAtom } from "../jotai";

const useDownloadAlarm = () => {
  const [alarm, setAlarmData] = useAtom(alarmAtom);
  const [downloadName, setDownloadName] = useState<string>();
  const [downloading, setDownloading] = useState(false);

  const { isFetching } = useQuery(
    ["alarm", downloadName],
    () => {
      setDownloading(true);
      setAlarmData({ ...alarm, name: "" });
      return replaceDownloadedFile(downloadName, alarm.name);
    },
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
        setDownloading(false);
      },
    }
  );

  useEffect(() => {
    setDownloading(isFetching);
  }, [isFetching]);

  return { downloadName, setDownloadName, downloading };
};

export default useDownloadAlarm;
