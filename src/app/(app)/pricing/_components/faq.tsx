import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faq } from '@/config/faq';

const Faq = () => {
  return (
    <div className="md:px-20 px-2 mt-8">
      <Accordion type="single" collapsible>
        {faq.map((item, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="py-4 px-2">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="mt-4 px-2">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
