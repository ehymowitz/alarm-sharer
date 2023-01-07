import { Audio } from "expo-av";
import { useEffect, useState } from "react";

const useSoundPlayer = () => {
  const soundPlayer = new Audio.Sound();
  const [sound, setSound] = useState<string>();

  const playSound = async (soundLocation: string) => {
    try {
      await soundPlayer.loadAsync({ uri: soundLocation });
      await soundPlayer.playAsync();
      setSound(undefined);
    } catch (e) {
      console.error(e);
    }
  };

  const unloadSound = async () => {
    await soundPlayer.unloadAsync();
  };

  useEffect(() => {
    if (sound) {
      playSound(sound);
    } else {
      unloadSound();
    }
  }, [sound]);

  return setSound;
};

export default useSoundPlayer;
