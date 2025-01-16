import React from "react";
import ProcessCard from "../Card/ProcessCard";

const SafetyAndTrust = () => {
  const processes = [
    {
      icon: "/verified.png",
      title: "Verified Sherpas",
      description:
        "All our Sherpas undergo thorough background checks and certification verification.",
      ariaLabel: "Verified Sherpas",
    },
    {
      icon: "/safety.png",
      title: "Safety Floremirst",
      description:
        "Comprehensive safety protocols and emergency response plans for every trek",
      ariaLabel: "Safety Floremirst",
    },
    {
      icon: "/insurance.png",
      title: "Insurance Coverage",
      description:
        "All treks include comprehensive travel and medical insurance coverage",
      ariaLabel: "Insurance Coverage",
    },
  ];

  return (
    <section
      className="py-16 px-4 bg-white"
      aria-labelledby="how-it-works-title"
    >
      <div className="container mx-auto max-w-7xl flex flex-col gap-10">
        <h2
          id="how-it-works-title"
          className="text-2xl sm:text-3xl font-semibold text-center"
        >
          Safety & Trust
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 justify-items-center"
          role="list"
        >
          {processes.map((process, index) => (
            <div
              key={process.title}
              className="w-full"
              role="listitem"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ProcessCard
                icon={process.icon}
                title={process.title}
                description={process.description}
                ariaLabel={process.ariaLabel}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(SafetyAndTrust);
