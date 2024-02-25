// Main Images for Weather types
import { setIconData } from "../state/reducers/iconDataSlice";
import { useDispatch } from "react-redux";

export function getWeatherImages(icons: string[]) {
  const dispatch = useDispatch();
  switch (true) {
    case icons.includes("snow"):
      dispatch(setIconData("snow"));
      return "../../public/images/gifs/snow.gif";
    case icons.includes("snow-showers-day"):
      dispatch(setIconData("Snow Showers"));
      return "../../public/images/gifs/snow-showers-day-night.gif";
    case icons.includes("snow-showers-night"):
      dispatch(setIconData("Nightly Snow Showers"));
      return "../../public/images/gifs/snow-showers-day-night.gif";
    case icons.includes("thunder-rain"):
      dispatch(setIconData("Thunderstorms"));
      return "../../public/images/gifs/thunder-rain-day-night.gif";
    case icons.includes("thunder-showers-day"):
      dispatch(setIconData("Thundery Showers"));
      return "../../public/images/gifs/thunder-showers-day-night.gif";
    case icons.includes("thunder-showers-night"):
      dispatch(setIconData("Thundery Night Showers"));
      return "../../public/images/gifs/thunder-showers-day-night.gif";
    case icons.includes("rain"):
      dispatch(setIconData("Rain"));
      return "../../public/images/gifs/rain.gif";
    case icons.includes("showers-day"):
      dispatch(setIconData("Showers"));
      return "../../public/images/gifs/showers-day-night.gif";
    case icons.includes("showers-night"):
      dispatch(setIconData("Night Showers"));
      return "../../public/images/gifs/showers-day-night.gif";
    case icons.includes("fog"):
      dispatch(setIconData("Fog"));
      return "../../public/images/gifs/fog.gif";
    case icons.includes("cloudy"):
      dispatch(setIconData("Cloudy"));
      return "../../public/images/gifs/day-cloudy.gif";
    case icons.includes("partly-cloudy-day"):
      dispatch(setIconData("Partly Cloudy Day"));
      return "../../public/images/gifs/day-cloudy.gif";
    case icons.includes("partly-cloudy-night"):
      dispatch(setIconData("Partly Cloudy Night"));
      return "../../public/images/gifs/night-cloudy-clear.gif";
    case icons.includes("clear-day"):
      dispatch(setIconData("Clear Skies"));
      return "../../public/images/gifs/day-clear.gif";
    case icons.includes("clear-night"):
      dispatch(setIconData("Clear Night Skies"));
      return "../../public/images/gifs/night-cloudy-clear.gif";
    default: {
      return "../../public/images/placeholder-image.webp";
    }
  }
}

// Main Images for Wind Speed/Directions

// Main Images for Temperature

// Main Images for Humidity
