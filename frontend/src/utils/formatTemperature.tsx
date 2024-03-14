export const formatTemperature = (temperature: number) => {
  const fahrenheitToCelcius = ((Number(temperature) - 32) * 5) / 9;
  const celcius = fahrenheitToCelcius.toFixed(1);
  return celcius;
};
