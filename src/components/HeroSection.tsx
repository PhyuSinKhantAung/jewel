import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="flex justify-center">
      <Image
        src="/images/hero-image.png"
        alt="jewel"
        className="min-h-[15rem] md:w-full object-cover" // 95% of viewport width on mobile
        width={1440}
        height={420}
      />
    </section>
  );
};
