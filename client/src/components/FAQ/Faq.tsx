"use client";
import React from "react";
import MyAccordion from "../MyAccordion/MyAccordion";

const Faq = () => {
  const data = [
    {
      id: 1,
      title: "What is the best time for trekking?",
      content:
        "Spring (March-May) and autumn (Sept-Nov) are ideal for most treks. Some are suitable for winter and monsoon as well.",
      ariaLabel: "What is the best time for trekking?",
    },
    {
      id: 2,
      title: "Do I need prior trekking experience?",
      content:
        "Not always! We offer treks for beginners and experienced trekkers. Check the difficulty level before booking.",
      ariaLabel: "Do I need prior trekking experience?",
    },
    {
      id: 3,
      title: "What should I pack for a trek?",
      content:
        "Essentials include trekking shoes, warm clothes, rain gear, first aid, water bottles, and sunscreen.",
      ariaLabel: "What should I pack for a trek?",
    },
    {
      id: 4,
      title: "How do I book a trek?",
      content:
        "Choose your trek on our website, check dates, and complete the payment online. A confirmation email will follow.",
      ariaLabel: "How do I book a trek?",
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
          FAQ
        </h2>
        <div className="flex flex-col gap-4">
          {data.map((item, index) => (
            <MyAccordion
              key={index}
              id={item.id}
              ariaLabel={item.ariaLabel}
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
export default React.memo(Faq);
