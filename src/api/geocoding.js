export async function getCoordsFromCity(city) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
  );

  if (!response.ok) throw new Error('Failed to reverse geocode');

  const data = await response.json();
  // Depending on location, this might be city, town, village, etc.
  return (
    data.results[0]
  );
}
