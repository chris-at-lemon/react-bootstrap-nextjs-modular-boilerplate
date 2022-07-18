export interface IWeatherObject {
  temperature?: number;
  name?: string;
  descr?: string;
  feelsLike?: number;
  icon?: string;
  mainCondition?: string;
  id?: string;
  coord?: {};
  date?: any;
}

export interface ICoords {
  lat: number;
  lon: number;
}
