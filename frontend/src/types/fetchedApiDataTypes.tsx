export interface fetchWeatherDataResponse {
  columns: { [key: string]: Column };
  remainingCost: number;
  queryCost: number;
  messages: null;
  locations: Locations;
}

export interface Locations {
  stationContributions: null;
  values: Value[];
  id: string;
  address: string;
  name: string;
  index: number;
  latitude: number;
  longitude: number;
  distance: number;
  time: number;
  tz: string;
  currentConditions: CurrentConditions;
  alerts: null;
}

export interface Value {
  wdir: number;
  uvindex: number;
  datetimeStr: Date;
  preciptype: string;
  cin: number;
  cloudcover: number;
  pop: number;
  mint: number;
  datetime: number;
  precip: number;
  solarradiation: number;
  dew: number;
  humidity: number;
  temp: number;
  maxt: number;
  visibility: number;
  wspd: number;
  severerisk: number;
  solarenergy: number;
  heatindex: null;
  snowdepth: number;
  sealevelpressure: number;
  snow: number;
  wgust: number;
  conditions: string;
  windchill: number;
  cape: number;
}

export interface Column {
  id: string;
  name: string;
  type: number;
  unit: null | string;
}

export interface CurrentConditions {
  wdir: number;
  temp: number;
  sunrise: Date;
  visibility: number;
  wspd: number;
  icon: string;
  stations: string;
  heatindex: null;
  cloudcover: null;
  datetime: Date;
  precip: number;
  moonphase: number;
  snowdepth: null;
  sealevelpressure: number;
  dew: number;
  sunset: Date;
  humidity: number;
  wgust: number;
  windchill: null;
}