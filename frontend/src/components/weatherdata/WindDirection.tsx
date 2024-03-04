import { useState, useEffect } from "react";

function WindDirection({ weatherData }) {
  const windDirection =
    weatherData.locations[Object.keys(weatherData.locations)[0]]
      .currentConditions;
  const [windDigit, setWindDigit] = useState("");
  const [windArrow, setWindArrow] = useState("");

  useEffect(() => {
    let direction = windDirection.wdir;
    switch (true) {
      case direction <= 20:
        setWindDigit("North");
        break;
      case direction <= 80:
        setWindDigit("Northeast");
        break;
      case direction <= 120:
        setWindDigit("East");
        break;
      case direction <= 160:
        setWindDigit("Southeast");
        break;
      case direction <= 200:
        setWindDigit("South");
        break;
      case direction <= 240:
        setWindDigit("Southwest");
        break;
      case direction <= 280:
        setWindDigit("West");
        break;
      case direction <= 320:
        setWindDigit("Northwest");
        break;
      default:
        setWindDigit("North");
    }
    setWindArrow(direction.toString());
  }, [weatherData]);

  return (
    <div className="flex flex-row gap-2 items-center">
      <img
        src="/images/gifs/wind-arrow.gif"
        style={{ transform: `rotate(${windArrow}deg)` }}
      />
      <h3>
        Wind Direction:
        <span className="text-orange-500 font-bold">
          <br />
          {windDirection.wdir}° {windDigit}
        </span>
      </h3>
    </div>
  );
}

export default WindDirection;
