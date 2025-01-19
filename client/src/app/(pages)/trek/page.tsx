"use client";
import TrekCard from "@/components/ui/Card/TrekCard";
import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/Header/Header";
import { treks } from "@/utils/data/treks";
import SearchForm from "@/components/Forms/SearchForm";

const Trek = () => {
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
            <h2
              id="available-packages"
              className="text-2xl md:text-3xl font-semibold mb-10 text-center"
            >
              Available Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
              {treks.map((trek, index) => (
                <div
                  key={trek.id || index}
                  className="transform hover:scale-[1.02] transition-transform"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <TrekCard trek={trek} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </section>
  );
};

export default Trek;
