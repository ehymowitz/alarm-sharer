import { AlarmData } from "../types";
import { atomWithAsyncStorage } from "./utils";

export const alarmAtom = atomWithAsyncStorage<AlarmData>("@storage_Key", {});
