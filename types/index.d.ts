export interface AlarmData {
  name?: string;
  location?: string;
  url?: string;
  isFetching?: boolean;
}

export interface TimeObject {
  hour: number;
  minute: number;
  am: boolean;
}
