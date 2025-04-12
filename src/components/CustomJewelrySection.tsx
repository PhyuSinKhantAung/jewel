import Image from "next/image";

export default function CustomJewelry() {
  return (
    <section className="py-12 grid md:grid-cols-2 gap-10 p-3">
      <div>
        <div className="mb-6">
          <p className="text-muted text-sm">Home / Custom Jewelry</p>
          <h2 className="text-3xl font-serif mt-2">Custom Jewelry</h2>
          <p className="text-muted mt-1">
            Create Your Masterpiece: Bespoke Jewelry Crafted for You
          </p>
        </div>

        <div className="relative w-full h-[500px]">
          <div className="absolute top-0 left-0 w-[70%] h-[70%]">
            <Image
              src="/images/ring-1.png"
              alt="Ring 1"
              objectFit="cover"
              layout="fill"
              className="rounded shadow"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%]">
            <Image
              src="/images/ring-2.png"
              alt="Ring 2"
              objectFit="cover"
              layout="fill"
              className="rounded shadow"
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-muted mb-6 max-w-md">
          Exquisite design, flawless craftsmanship, and timeless elegance—your
          vision, perfectly crafted.
        </p>

        <ul className="space-y-6 text-sm">
          {[
            {
              title: "Consultation",
              desc: "We discuss your vision and preferences to craft a unique design.",
            },
            {
              title: "Selecting Materials",
              desc: "Choose from exquisite diamonds, precious metals, and gemstones.",
            },
            {
              title: "Creating a 3D Model",
              desc: "Visualize your design with a precise 3D model before production.",
            },
            {
              title: "Manufacturing",
              desc: "Expert artisans bring your piece to life with precision and care.",
            },
            {
              title: "Quality Assurance",
              desc: "Every detail is inspected to ensure flawless craftsmanship.",
            },
            {
              title: "Delivery",
              desc: "Your custom jewelry is elegantly packaged and delivered to you.",
            },
          ].map((item, index) => (
            <li key={index}>
              <div className="flex space-x-4 items-start">
                <span className="text-muted text-sm font-medium w-6">
                  {`0${index + 1}`}
                </span>
                <div className="flex-1 border-b border-gray-200 pb-4">
                  <h4 className="uppercase font-semibold mb-1">{item.title}</h4>
                  <p className="text-muted text-sm">{item.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
