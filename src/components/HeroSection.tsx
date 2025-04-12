import Image from "next/image";

export const HeroSection = () => {
  return (
    <section>
      <Image
        src="/images/hero-image.png"
        alt="jewel"
        className="w-full"
        width={1440}
        height={420}
      />
    </section>
  );
};
