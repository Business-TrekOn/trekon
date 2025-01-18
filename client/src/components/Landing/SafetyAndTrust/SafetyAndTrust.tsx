import ProcessCard from "../../ui/Card/ProcessCard";
import { safety } from "@/utils/data/safety";

const SafetyAndTrust = () => {
  return (
    <section className="py-16 px-4 bg-white">
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
          {safety.map((process, index) => (
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
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default SafetyAndTrust;
