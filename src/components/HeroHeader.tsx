import { HiOutlineCalendarDays, HiOutlineUserCircle } from "react-icons/hi2";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";

export const HeroHeader = () => {
  return (
    <header className="border-b border-gray-200 flex justify-between h-9 items-center md:px-10">
      <div className="hidden md:flex flex-row items-center gap-2">
        <HiOutlineCalendarDays className="text-accent" size={"20px"} />
        <span className="uppercase text-sm">Book an appointment</span>
      </div>

      <p className="mx-auto md:mx-0 md:text-sm block text-accent text-[0.5rem]">
        • Exclusive Collection Launch: Discover Timeless Elegance Today •
      </p>

      <div className="hidden md:flex flex-row items-center gap-2">
        <HiOutlineUserCircle className="text-accent" />
        <IoIosHeartEmpty className="text-accent" />
        <IoBagOutline className="text-accent" />
      </div>
    </header>
  );
};
