import Container from "../../ui/Container";

const benefits = [
  {
    title: "Deep Cleaning",
    text: "Professional hot water extraction removes embedded dirt, allergens and everyday grime from deep within the carpet fibres.",
  },
  {
    title: "Family & Pet Friendly",
    text: "Ideal for homes with children and pets, helping create a cleaner, fresher indoor environment.",
  },
  {
    title: "Honest Pricing",
    text: "Clear fixed pricing, free quotations and no hidden call-out charges anywhere in our Winchester service area.",
  },
  {
    title: "Local Winchester Service",
    text: "Reliable appointments, friendly communication and professional results from a local independent business.",
  },
];

export default function Benefits() {
  return (
    <section>
      <Container>
        <h2>Why homeowners choose ROBIGO</h2>

        <p>
          We focus on delivering outstanding cleaning results together with an
          easy, stress-free customer experience from quotation to completion.
        </p>

        <div>
          {benefits.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}