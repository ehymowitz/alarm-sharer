import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { downloadFile } from "../firebase/utilFunctions";

const useDownloadAlarm = () => {
  const [selectedAlarm, setSelectedAlarm] = useState<string | undefined>(
    undefined
  );
  // const { data, isFetching } = useQuery("alarm", () =>
  //   downloadFile(selectedAlarm || "")
  // );

  useEffect(() => {
    console.log(selectedAlarm);
  }, [selectedAlarm]);

  return { selectedAlarm, setSelectedAlarm };
};

export default useDownloadAlarm;
