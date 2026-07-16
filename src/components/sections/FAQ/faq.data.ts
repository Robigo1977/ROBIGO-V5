export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How long will my carpets take to dry?",
    answer:
      "Most carpets are dry within 4–8 hours, depending on the carpet type, room temperature and ventilation. We'll always advise you before we leave.",
  },
  {
    id: 2,
    question: "Is your cleaning safe for children and pets?",
    answer:
      "Yes. We use professional cleaning methods designed to be safe for families and pets when used correctly. Our chemical-free steam cleaning service is especially popular with households looking for a high-temperature cleaning solution.",
  },
  {
    id: 3,
    question: "Do you move furniture?",
    answer:
      "We can move light furniture where practical. For larger or delicate items, we'll discuss the best approach with you before starting the job.",
  },
  {
    id: 4,
    question: "Can you remove every stain?",
    answer:
      "We achieve excellent results on many common stains, but no professional cleaner can honestly guarantee the removal of every stain. We'll always assess the stain and explain what result you can realistically expect.",
  },
  {
    id: 5,
    question: "Do you charge a call-out fee?",
    answer:
      "No. We do not charge a call-out fee within our normal service area. You'll always receive a clear quotation before any work begins.",
  },
  {
    id: 6,
    question: "How do I get a quote?",
    answer:
      "The quickest way is to send us a WhatsApp message with a few photos and a short description of what you'd like cleaned. Robert will review everything and provide a free quotation.",
  },
];