import { Suspense } from "react";
import { Testimonials } from "./Testimonials";

export type TestimonialType = {
  name: string;
  email: string;
  image: string;
  quote: string;
};

const getTestimonials = async () => {
  const res = await fetch("https://randomuser.me/api/?results=4", {
    next: { revalidate: 300 },
  });
  return res.json();
};

export const TestimonialsSection = async () => {
  const data = await getTestimonials();

  return (
    <div className="my-10">
      <h1 className="text-center text-3xl md:text-3xl mb-6 font-serif ">
        Testimonials
      </h1>

      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials
          testmonialsData={data?.results?.map((d: any) => {
            return {
              name: d.name.first + " " + d.name.last,
              email: d.email,
              image: d.picture.thumbnail,
              phone: d.phone,
            };
          })}
        />
      </Suspense>
    </div>
  );
};
