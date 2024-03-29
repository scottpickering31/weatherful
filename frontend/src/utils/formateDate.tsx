import { fromUnixTime } from "date-fns";

export const formatDate = (timestamp: number) =>
  new Date(fromUnixTime(timestamp / 1000)).toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
