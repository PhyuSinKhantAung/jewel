"use server";

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email")?.toString();

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    throw new Error("Invalid email format");
  }

  console.log("Email Sent Successfully!", { email });

  return { success: true };
}
