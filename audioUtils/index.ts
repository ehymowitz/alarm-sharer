import AsyncStorage from "@react-native-async-storage/async-storage";
import { Audio } from "expo-av";

export const saveSound = async (source?: string) => {
  if (!source) return;

  try {
    await AsyncStorage.setItem("@storage_Key", source);
  } catch (e) {
    console.log("saving error:", e);
  }
};

export const playSound = async (player: Audio.Sound, source?: string) => {
  if (!source) return;
  await player.loadAsync({ uri: source });
  await player.playAsync();
};
