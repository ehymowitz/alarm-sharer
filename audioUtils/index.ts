import { Audio } from "expo-av";

export const playSound = async (player: Audio.Sound, source?: string) => {
  if (!source) return;
  await player.loadAsync({ uri: source });
  await player.playAsync();
};

export const snoozeSound = () => {
  console.log("Snooze");
};
