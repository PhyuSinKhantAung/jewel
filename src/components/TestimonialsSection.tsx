import { Testimonials } from "./Testimonials";

export type Testimonial = {
  name: string;
  email: string;
  image: string;
  quote: string;
};

type APIResponse = {
  results: {
    name: { first: string; last: string };
    email: string;
    phone: string;
    picture: { thumbnail: string };
  }[];
};

const getTestimonials = async (): Promise<Testimonial[]> => {
  const res = await fetch("https://randomuser.me/api/?results=4", {
    next: { revalidate: 300 },
  });

  if (!res.ok) throw new Error("Failed to fetch testimonials");

  const data: APIResponse = await res.json();

  return data.results.map((d) => ({
    name: `${d.name.first} ${d.name.last}`,
    email: d.email,
    image: d.picture.thumbnail,
    quote: d.phone, // Assuming quote = phone for demo purposes
  }));
};

export const TestimonialsSection = async () => {
  const testimonials = await getTestimonials();

  return (
    <section className="my-10">
      <h1 className="text-center text-3xl md:text-3xl mb-6 font-serif">
        Testimonials
      </h1>

      <Testimonials testmonialsData={testimonials} />
    </section>
  );
};
