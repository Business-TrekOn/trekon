export const fetchLocations = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/locations`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch locations");
  }
  return response.json();
};
