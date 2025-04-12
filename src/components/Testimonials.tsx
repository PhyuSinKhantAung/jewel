"use client";
import Image from "next/image";
import React from "react";

export const Testimonials = ({
  testmonialsData,
}: {
  testmonialsData: {
    name: string;
    email: string;
    image: string;
    phone: string;
  }[];
}) => {
  return (
    <div className="grid md:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 my-10 md:px-20 px-4">
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
            <p className="mt-3 text-gray-700">{item.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
