export const fetchFeaturedTreks = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/treks/featured-treks`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch featured treks");
  }
  return response.json();
};
