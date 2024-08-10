import weatherByPredictor from "/public/images/icons/weather-by-predictor.svg";
import weatherByDay from "/public/images/icons/weather-by-day.svg";
import weatherByHour from "/public/images/icons/weather-by-hour.svg";
import weatherByFortnight from "/public/images/icons/weather-by-fortnight.svg";
import weatherByHistory from "/public/images/icons/weather-by-history.svg";

export const sidebarButtonsObj = [
  {
    text: "Weather By Day",
    image: weatherByDay,
    stateText: "daily",
  },
  {
    text: "Weather By Hour",
    image: weatherByHour,
    stateText: "hourly",
  },
  {
    text: "14 Day Weather Forecast",
    image: weatherByFortnight,
    stateText: "fortnight",
  },
  {
    text: "Historic Weather Forecasts",
    image: weatherByHistory,
    stateText: "historic",
  },
  {
    text: "*NEW* AI Weather Predictor",
    image: weatherByPredictor,
    stateText: "predictor",
    AIOutline: true,
  },
];
