import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { downloadFile } from "../firebase/utilFunctions";

const useDownloadAlarm = () => {
  const [selectedAlarm, setSelectedAlarm] = useState<string | undefined>(
    undefined
  );

  const { data, isFetching } = useQuery(["alarm", selectedAlarm], () =>
    downloadFile(selectedAlarm)
  );

  return {
    selectedAlarm,
    setSelectedAlarm,
    alarmData: data,
    alarmFetching: isFetching,
  };
};

export default useDownloadAlarm;
