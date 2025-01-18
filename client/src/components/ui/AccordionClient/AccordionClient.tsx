"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

interface MyAccordionTypes {
  id: number;
  title: string;
  content: string;
}

const AccordionClient = ({ id, title, content }: MyAccordionTypes) => {
  return (
    <Accordion variant="bordered">
      <AccordionItem key={id} title={title} className="font-semibold">
        <p className="font-normal text-sm tracking-wide">{content}</p>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionClient;
