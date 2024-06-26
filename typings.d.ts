interface CurrentWeather {
    interval: number;
    is_day: number;
    temperature: number
    time: string;
    weathercode: number;
    winddirection: number;
    windspeed: number;
  }

  interface CurrentWeatherUnits {
    interval: string;
    is_day: string;
    temperature: string;
    time: string;
    weathercode: string;
    winddirection: string;
    windspeed: string;
  }

  interface Daily {
    apparent_temperature_max: [number];
    apparent_temperature_min: [number]
    sunrise: [string];
    sunset: [string];
    temperature_2m_max: [number];
    temperature_2m_min: [number];
    time: [string];
    uv_index_clear_sky_max: [number];
    uv_index_max: [number];
    weather_code: [number];
  }


  interface DailyUnits {
    apparent_temperature_max: string;
    apparent_temperature_min: string;
    sunrise: string;
    sunset:string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    time: string;
    uv_index_clear_sky_max: string;
    uv_index_max: string;
    weather_code: string;
  }


  interface Hourly {
    apparent_temperature: [number];
    precipitation: [number];
    precipitation_probability: [number];
    rain: [number];
    relative_humidity_2m: [number];
    showers: [number];
    snow_depth: [number];
    snowfall: [number];
    temperature_2m: [number];
    time: [string];
    uv_index: [number];
    uv_index_clear_sky: [number];
    wind_gusts_10m: [number];
  }


  interface HourlyUnits {
    apparent_temperature: string;
    precipitation: string;
    precipitation_probability: string;
    rain: string;
    relative_humidity_2m: string;
    showers: string;
    snow_depth: string;
    snowfall: string;
    temperature_2m: string;
    time: string;
    uv_index: string;
    uv_index_clear_sky: string;
    wind_gusts_10m: string;
  }


  interface Root {
    current_weather: CurrentWeather;
    current_weather_units: CurrentWeatherUnits;
    daily: Daily;
    daily_units: DailyUnits;
    elevation: Int;
    generationtime_ms: Float;
    hourly: Hourly;
    hourly_units: HourlyUnits;
    latitude: number;
    longitude: number;
    timezone: string;
    timezone_abbreviation: string;
    utc_offset_seconds: number;
  }