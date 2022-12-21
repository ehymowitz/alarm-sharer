import { useEffect, useState } from "react";

const getTimeObject = () => {
  const date = new Date();
  const hours = date.getHours();
  return { hour: hours % 12, minute: date.getMinutes(), am: hours < 12 };
};
const useCurrentTime = () => {
  const [time, setTime] = useState(getTimeObject());

  useEffect(() => {
    let id = setInterval(() => {
      setTime(getTimeObject());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return time;
};

export default useCurrentTime;
