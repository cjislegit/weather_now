import { fetchWeatherApi } from 'openmeteo';

export async function getWeather(lat, lon, unit) {
  const params = {
    latitude: lat,
    longitude: lon,
    daily: ['temperature_2m_max', 'temperature_2m_min', 'weather_code'],
    current: [
      'temperature_2m',
      'apparent_temperature',
      'relative_humidity_2m',
      'precipitation',
      'wind_speed_10m',
      'weather_code',
    ],
    hourly: ['weather_code', 'temperature_2m'],
  };

  if (unit != 'metric') {
    params.wind_speed_unit = 'mph';
    params.temperature_unit = 'fahrenheit';
    params.precipitation_unit = 'inch';
  }

  const url = 'https://api.open-meteo.com/v1/forecast';
  const responses = await fetchWeatherApi(url, params);
  const response = responses[0];

  const utcOffsetSeconds = response.utcOffsetSeconds();
  const current = response.current();
  const daily = response.daily();
  const hourly = response.hourly();

  const weatherData = {
    location: {
      latitude: response.latitude(),
      longitude: response.longitude(),
      elevation: response.elevation(),
      utcOffsetSeconds,
    },
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature: current.variables(0).value(), // Current is only 1 value, therefore `.value()`
      apparent_temperature: current.variables(1).value(),
      relative_humidity_2m: current.variables(2).value(),
      precipitation: current.variables(3).value(),
      wind_speed_10m: current.variables(4).value(),
      weather_code: current.variables(5).value(),
    },
    daily: {
      time: Array.from(
        {
          length:
            (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval(),
        },
        (_, i) =>
          new Date(
            (Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) *
              1000
          )
      ),
      temperature_2m_max: daily.variables(0).valuesArray(),
      temperature_2m_min: daily.variables(1).valuesArray(),
      weather_code: daily.variables(2).valuesArray(),
    },
    hourly: {
      time: Array.from(
        {
          length:
            (Number(hourly.timeEnd()) - Number(hourly.time())) /
            hourly.interval(),
        },
        (_, i) =>
          new Date(
            (Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) *
              1000
          )
      ),
      weather_code: hourly.variables(0).valuesArray(),
      temperature_2m: hourly.variables(1).valuesArray(),
    },
  };
  return weatherData;
}
