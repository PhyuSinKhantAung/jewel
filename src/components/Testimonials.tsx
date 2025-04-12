"use client";
import Image from "next/image";
import React from "react";
import { Testimonial } from "./TestimonialsSection";

export const Testimonials = ({
  testmonialsData,
}: {
  testmonialsData: Testimonial[];
}) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 my-10 md:px-20 px-4">
      {testmonialsData?.map((item) => (
        <div className=" border-gray-200 border-2 py-5" key={item.name}>
          <Image
            src={item.image}
            alt={item.name}
            className="w-20 h-20 mx-auto mb-4 object-cover"
            width={200}
            height={200}
          ></Image>
          <div className="text-center">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.email}</p>
            <p className="mt-3 text-gray-700">{item.quote}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
