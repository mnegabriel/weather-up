import { CurrentWeather } from "./current-weather"
import { Location } from "./location"

export interface CurrentResponse {
  location: Location,
  current: CurrentWeather
}
