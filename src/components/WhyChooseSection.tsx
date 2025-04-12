import { BsPersonCheck } from "react-icons/bs";

export const WhyChooseSection = () => {
  return (
    <section
      className="bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bg-frame.png')",
      }}
    >
      <div className="md:mx-20 py-25 mx-10">
        <h1 className="text-center text-3xl md:text-3xl mb-6 font-serif ">
          Why Choose MyJewel?
        </h1>
        <div className="flex-col flex md:flex-row justify-between items-center gap-10 md:gap-x-10 text-center">
          {[
            {
              id: "1",
              title: "Personal Design Consultation",
              desc: "Work with our designers to create your perfect piece.",
              icon: <BsPersonCheck className="text-3xl text-accent" />,
            },
            {
              id: "2",
              title: "Crafted with Luxury Materials",
              desc: "Only the finest diamonds, gemstones, and precious metals used.",
              icon: <BsPersonCheck className="text-3xl text-accent" />,
            },
            {
              id: "3",
              title: "Lifetime Warranty",
              desc: "Lifetime warranty on every piece, ensuring quality and lasting beauty.",
              icon: <BsPersonCheck className="text-3xl text-accent" />,
            },
          ].map((item) => (
            <div className="bg-white shadow-sm p-6" key={item.id}>
              <BsPersonCheck className="text-3xl text-accent mx-auto mb-4" />
              <h3 className="text-lg text-accent font-serif">{item.title}</h3>
              <p className="text-sm text-muted mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
