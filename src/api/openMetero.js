import { fetchWeatherApi } from 'openmeteo';

export async function getWeather(lat, lon) {
  const params = {
    latitude: lat,
    longitude: lon,
    current: 'temperature_2m,weather_code,wind_speed_10m,wind_direction_10m',
    hourly: 'temperature_2m',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min',
  };

  const url = 'https://api.open-meteo.com/v1/forecast';
  const responses = await fetchWeatherApi(url, params);
  const response = responses[0];

  const utcOffsetSeconds = response.utcOffsetSeconds();
  const hourly = response.hourly();
  const current = response.current();

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
      weatherCode: current.variables(1).value(),
      windSpeed: current.variables(2).value(),
      windDirection: current.variables(3).value(),
    },
    hourly: {
      time: [
        ...Array(
          (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval()
        ),
      ].map(
        (_, i) =>
          new Date(
            (Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) *
              1000
          )
      ),
      temperature_2m: hourly.variables(0).valuesArray(),
    },
  };

  return weatherData;
}
