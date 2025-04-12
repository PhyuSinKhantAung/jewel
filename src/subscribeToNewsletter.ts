"use server";

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email")?.toString();

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    throw new Error("Invalid email format");
  }

  console.log(`Simulated email sent to ${process.env.EMAIL_ADDRESS}: ${email}`);

  return { success: true };
}
