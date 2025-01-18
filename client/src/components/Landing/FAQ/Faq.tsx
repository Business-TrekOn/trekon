import AccordionClient from "../../ui/AccordionClient/AccordionClient";
import { faqs } from "@/utils/data/faqs";

const Faq = () => {
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
          FAQ
        </h2>
        <div className="flex flex-col gap-4">
          {faqs.map((item, index) => (
            <AccordionClient
              key={index}
              id={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default Faq;
