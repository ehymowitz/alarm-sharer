import { useEffect, useState } from "react";
import { listFiles } from "../firebase/utilFunctions";

const useAlarmFiles = () => {
  const [alarms, setAlarms] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      setAlarms(await listFiles());
    })();
    setLoading(false);
  }, []);

  return { alarms, loading };
};

export default useAlarmFiles;
