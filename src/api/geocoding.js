export async function getCityFromCoords(lat, lon) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
  );

  if (!response.ok) throw new Error('Failed to reverse geocode');

  const data = await response.json();
  // Depending on location, this might be city, town, village, etc.
  return (
    data.address.city ||
    data.address.town ||
    data.address.village ||
    data.address.county
  );
}
