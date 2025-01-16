import { Accordion, AccordionItem } from "@nextui-org/react";

type MyAccordionTypes = {
  id: number;
  ariaLabel: string;
  title: string;
  content: string;
};

export default function MyAccordion({
  id,
  ariaLabel,
  title,
  content,
}: MyAccordionTypes) {
  return (
    <Accordion variant="bordered">
      <AccordionItem
        key={id}
        aria-label={ariaLabel}
        title={title}
        className="font-semibold"
      >
        <p className="font-normal">{content}</p>
      </AccordionItem>
    </Accordion>
  );
}
