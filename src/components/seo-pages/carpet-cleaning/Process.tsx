import Container from "../../ui/Container";

const steps = [
  {
    number: "01",
    title: "Inspection",
    text: "Every carpet is assessed before cleaning so we can identify fibres, stains and the most effective cleaning method.",
  },
  {
    number: "02",
    title: "Pre-Treatment",
    text: "Traffic lanes and visible stains receive specialist pre-treatment to loosen embedded dirt before extraction.",
  },
  {
    number: "03",
    title: "Deep Extraction",
    text: "Professional hot water extraction removes dirt, allergens and odours from deep inside the carpet pile.",
  },
  {
    number: "04",
    title: "Final Check",
    text: "We inspect the finished result together, provide after-care advice and ensure you are completely satisfied.",
  },
];

export default function Process() {
  return (
    <section>
      <Container>
        <h2>Our Professional Cleaning Process</h2>

        <p>
          A proven step-by-step system designed to achieve outstanding cleaning
          results while protecting your carpets.
        </p>

        <div>
          {steps.map((step) => (
            <article key={step.number}>
              <strong>{step.number}</strong>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}