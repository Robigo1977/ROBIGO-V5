import Container from "../../ui/Container";

const questions = [
  {
    question: "How much does carpet cleaning cost in Winchester?",
    answer:
      "ROBIGO prices carpet cleaning by the measured area. The minimum charge is £60, and larger areas receive a lower price per square metre. Quotations are free, with no call-out charge within our regular service area.",
  },
  {
    question: "How long do carpets take to dry after cleaning?",
    answer:
      "Drying time depends on the carpet fibre, ventilation, room temperature and the level of cleaning required. We use professional extraction equipment to remove as much moisture as possible and provide practical after-care advice.",
  },
  {
    question: "Can you remove stains and pet odours?",
    answer:
      "We treat many common stains and pet-related odours using appropriate professional products. Results depend on the substance, carpet fibre and how long the contamination has been present, so complete removal cannot always be guaranteed.",
  },
  {
    question: "Do I need to move my furniture?",
    answer:
      "Please remove small and fragile belongings before the appointment. We can discuss larger furniture during your quotation and agree on the safest practical approach.",
  },
  {
    question: "Which areas around Winchester do you serve?",
    answer:
      "We serve Winchester, Eastleigh, Chandler’s Ford, Shawford, Compton, Otterbourne, Twyford, King’s Worthy and Hursley.",
  },
  {
    question: "How can I request a free quotation?",
    answer:
      "Send ROBIGO a WhatsApp message with a few photographs and a short description of the areas you would like cleaned. Robert will personally review your message and respond with the next steps.",
  },
];

export default function FAQ() {
  return (
    <section aria-labelledby="carpet-cleaning-faq">
      <Container>
        <h2 id="carpet-cleaning-faq">Carpet Cleaning Questions</h2>

        <p>
          Helpful answers about professional carpet cleaning in Winchester and
          the surrounding Hampshire area.
        </p>

        <div>
          {questions.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
