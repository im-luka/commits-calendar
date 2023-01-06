import { DateTime } from "luxon";

export const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const CURRENT_DATE = DateTime.local({ locale: "en" });
