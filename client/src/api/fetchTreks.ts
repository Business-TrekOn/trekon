export const fetchTreks = async (searchParams: URLSearchParams | null) => {
  // If no search params, return early
  if (
    !searchParams ||
    (!searchParams.get("location") && !searchParams.get("dateRange"))
  ) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/treks`
    );
    if (!response.ok) throw new Error("Failed to fetch treks");
    return response.json();
  }

  // Construct the search URL with parameters
  const searchQuery = searchParams.toString();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/search-treks?${searchQuery}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch filtered treks");
  }
  return response.json();
};
