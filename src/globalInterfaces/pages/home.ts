export interface IWeatherObject {
  temperature?: number;
  name?: string;
  descr?: string;
  feelsLike?: number;
  icon?: string;
  mainCondition?: string;
  id?: string;
  coord?: {};
  date?: string;
}

export interface ICoords {
  lat: number;
  lon: number;
}

export interface ICity {
  city?: string;
  countryCode?: string;
}

export interface ISetCoord {
  setCoord: (lat: number, lon: number, updateSearchHistory?: boolean) => void;
}

export type ISetNewCoord = (lat: number, lon: number, updateSearchHistory?: boolean) => void;
export type IFetchWheater = (lat: number, lon: number, updateSearchHistory?: boolean) => void;
