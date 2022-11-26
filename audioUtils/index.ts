import { Audio } from "expo-av";

export const saveSound = async (source?: string) => {
  if (!source) return;

  const { sound } = await Audio.Sound.createAsync({ uri: source });

  await sound.playAsync();
};

export const playSound = async (player: Audio.Sound, source?: string) => {
  if (!source) return;
  await player.loadAsync({ uri: source });
  await player.playAsync();
};
