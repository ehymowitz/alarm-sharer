export interface AlarmData {
  displayValues?: AlarmDisplayInfo;
  location?: string;
  url?: string;
}

export interface AlarmDisplayInfo {
  name?: string;
  composer: string;
}
