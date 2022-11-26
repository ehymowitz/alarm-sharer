import { Audio } from "expo-av";
import { useEffect } from "react";

const useSoundPlayer = () => {
  const soundPlayer = new Audio.Sound();

  useEffect(() => {
    return soundPlayer
      ? () => {
          soundPlayer.unloadAsync();
        }
      : undefined;
  }, [soundPlayer]);

  return soundPlayer;
};

export default useSoundPlayer;
