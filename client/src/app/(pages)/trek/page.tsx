"use client";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import TrekCard from "@/components/ui/Card/TrekCard";
import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/Header/Header";
import SearchForm from "@/components/Forms/SearchForm";
import { TrekType } from "@/types/treksType";
import Loading from "@/components/Loading/Loading";
import ErrorPage from "@/components/Error/Error";

const fetchTreks = async (searchParams: URLSearchParams | null) => {
  // If no search params, return early
  if (
    !searchParams ||
    (!searchParams.get("location") && !searchParams.get("dateRange"))
  ) {
    const response = await fetch("http://localhost:5500/api/treks");
    if (!response.ok) throw new Error("Failed to fetch treks");
    return response.json();
  }

  // Construct the search URL with parameters
  const searchQuery = searchParams.toString();
  const response = await fetch(
    `http://localhost:5500/api/search-treks?${searchQuery}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch filtered treks");
  }
  return response.json();
};

const Trek = () => {
  const searchParams = useSearchParams();

  // Query for treks with search parameters
  const {
    data: treks,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["treks", searchParams.toString()],
    queryFn: () => fetchTreks(searchParams),
    staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
  });

  // Loading state
  if (isLoading) {
    return <Loading />;
  }

  // Error state
  if (isError) {
    return <ErrorPage />;
  }

  return (
    <section className="min-h-screen flex flex-col">
      <Header isDark={false} />

      <main className="flex-grow">
        {/* Hero Section with Search */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-7xl flex flex-col items-center gap-8 md:gap-12">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center tracking-tight">
              Find Your Trek
            </h1>

            {/* Search Container */}
            <SearchForm isDark={false} />
          </div>
        </section>

        {/* Available Packages Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Available Packages
              </h2>
              {searchParams.toString() && (
                <p className="text-gray-600">
                  {treks?.length} {treks?.length === 1 ? "trek" : "treks"} found
                </p>
              )}
            </div>

            {treks?.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No treks found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search criteria to find more options
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                {treks?.map((trek: TrekType, index: number) => (
                  <div
                    key={trek?.id}
                    className="transform hover:scale-[1.02] transition-transform"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <TrekCard trek={trek} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </section>
  );
};

export default Trek;
