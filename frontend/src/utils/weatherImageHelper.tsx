// Main Images for Weather types
import { setIconData } from "../state/reducers/iconDataSlice";
import { useDispatch } from "react-redux";

export function getWeatherImages(icons: string) {
  const dispatch = useDispatch();
  switch (true) {
    case icons.includes("snow"):
      dispatch(setIconData("snow"));
      return "/images/gifs/snow.gif";
    case icons.includes("snow-showers-day"):
      dispatch(setIconData("Snow Showers"));
      return "/images/gifs/snow-showers-day-night.gif";
    case icons.includes("snow-showers-night"):
      dispatch(setIconData("Nightly Snow Showers"));
      return "/images/gifs/snow-showers-day-night.gif";
    case icons.includes("thunder-rain"):
      dispatch(setIconData("Thunderstorms"));
      return "/images/gifs/thunder-rain-day-night.gif";
    case icons.includes("thunder-showers-day"):
      dispatch(setIconData("Thundery Showers"));
      return "/images/gifs/thunder-showers-day-night.gif";
    case icons.includes("thunder-showers-night"):
      dispatch(setIconData("Thundery Night Showers"));
      return "/images/gifs/thunder-showers-day-night.gif";
    case icons.includes("rain"):
      dispatch(setIconData("Rain"));
      return "/images/gifs/rain.gif";
    case icons.includes("showers-day"):
      dispatch(setIconData("Showers"));
      return "/images/gifs/showers-day-night.gif";
    case icons.includes("showers-night"):
      dispatch(setIconData("Night Showers"));
      return "/images/gifs/showers-day-night.gif";
    case icons.includes("fog"):
      dispatch(setIconData("Fog"));
      return "/images/gifs/fog.gif";
    case icons.includes("cloudy"):
      dispatch(setIconData("Cloudy"));
      return "/images/gifs/day-cloudy.gif";
    case icons.includes("partly-cloudy-day"):
      dispatch(setIconData("Partly Cloudy Day"));
      return "/images/gifs/day-cloudy.gif";
    case icons.includes("partly-cloudy-night"):
      dispatch(setIconData("Partly Cloudy Night"));
      return "/images/gifs/night-cloudy-clear.gif";
    case icons.includes("clear-day"):
      dispatch(setIconData("Clear Skies"));
      return "/images/gifs/day-clear.gif";
    case icons.includes("clear-night"):
      dispatch(setIconData("Clear Night Skies"));
      return "/images/gifs/night-cloudy-clear.gif";
    default: {
      return "/images/placeholder-image.webp";
    }
  }
}
