import { gql, useQuery } from '@apollo/client';


const fetchWeatherQuery = gql`
  query MyQuery   {
    $current_weather:String
    $daily:String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,
    apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    $hourly:String = "temperature_2m,relativehumidity_2m,apparent_temperature,percipitation_probability,percipitation,
    rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky"
    $latitude:String!
    $longitude:String!
    $timezone:String!
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      current_weather {
        interval
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      current_weather_units {
        interval
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weather_code
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        sunset
        sunrise
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weather_code
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        precipitation
        precipitation_probability
        rain
        relative_humidity_2m
        snow_depth
        showers
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        wind_gusts_10m
      }
      hourly_units {
        apparent_temperature
        precipitation
        precipitation_probability
        rain
        relative_humidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        wind_gusts_10m
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;


export default fetchWeatherQuery