import Image from "next/image";
import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";

export const ExploreMoreSection = () => {
  return (
    <div className="flex-col md:flex md:flex-row">
      <div className="xl:w-[60%] relative">
        <div className="xl:m-20 my-20 mx-10">
          <h1 className="font-serif text-3xl my-2">Explore More</h1>
          <p className="text-muted text-sm py-2">
            Looking for more diamond guides, buying tips or details about the
            4Cs? Explore more of our diamond education pages:
          </p>
          <div className="grid xl:grid-cols-2 grid-cols-1">
            <div className="flex items-center space-x-4 py-2">
              <Link className="" href={""}>
                Lab Grown Diamond Guide
              </Link>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-foreground">
                <BsBoxArrowUpRight className="text-sm" />
              </div>
            </div>

            <div className="flex items-center space-x-4 py-2">
              <Link className="" href={""}>
                Lab Grown Diamond Guide
              </Link>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-foreground">
                <BsBoxArrowUpRight className="text-sm" />
              </div>
            </div>
            <div className="flex items-center space-x-4 py-2">
              <Link className="" href={""}>
                Lab Grown Diamond Guide
              </Link>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-foreground">
                <BsBoxArrowUpRight className="text-sm" />
              </div>
            </div>
            <div className="flex items-center space-x-4 py-2">
              <Link className="" href={""}>
                Lab Grown Diamond Guide
              </Link>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-foreground">
                <BsBoxArrowUpRight className="text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:w-[40%]">
        <Image
          src="/images/person-wearing-necklace.png"
          alt="diamond"
          className="w-full"
          width={1440}
          height={419}
        ></Image>
      </div>
    </div>
  );
};
