"use client";

import { subscribeToNewsletter } from "@/subscribeToNewsletter";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { VscSend } from "react-icons/vsc";

const formSchema = z.object({
  email: z.string().email("Invalid email format"),
});

type FormSchema = z.infer<typeof formSchema>;

export const NewsletterForm = () => {
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    setMessage("");
    const formData = new FormData();
    formData.append("email", data.email);

    startTransition(async () => {
      try {
        const result = await subscribeToNewsletter(formData);
        if (result?.success) {
          setMessage("Thank you for subscribing!");
          reset();
        }
      } catch (err: any) {
        setMessage(`${err.message}`);
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex mb-2">
        <input
          type="email"
          placeholder="Email Address"
          className={`w-full border px-3 py-2 rounded-l-md focus:outline-none ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          {...register("email")}
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-accent text-white px-4 py-2 rounded-r-md cursor-pointer"
        >
          <VscSend />
        </button>
      </form>

      <div className="flex flex-col text-sm text-red-500 mb-1">
        {errors.email && <small>{errors.email.message}</small>}
      </div>

      <div className="text-sm text-foreground">{message}</div>
    </>
  );
};
