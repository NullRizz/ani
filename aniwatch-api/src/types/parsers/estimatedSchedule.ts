type EstimatedSchedule = {
  id: string | null;
  time: string | null;
  name: string | null;
  jname: string | null;
  airingTimestamp: number;
  secondsUntilAiring: number;
};

export type ScrapedEstimatedSchedule = {
  scheduledAnimes: Array<EstimatedSchedule>;
};
