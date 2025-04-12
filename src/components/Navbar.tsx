import { FiChevronDown } from "react-icons/fi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";

export const Navbar = () => {
  return (
    <section className="border-b border-gray-200  flex justify-between items-center h-20 md:px-20 px-4">
      <div className="flex items-center space-x-4 md:hidden">
        <TbMenu2 />

        <HiOutlineCalendarDays />
      </div>

      <div className="text-2xl font-serif text-accent pl-8">MyJewel</div>

      <nav className="hidden md:flex space-x-6 items-center text-sm uppercase">
        <div className="flex items-center space-x-1 cursor-pointer">
          <span>Jewelry</span>
          <FiChevronDown />
        </div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <span>Love and Engagement</span>
          <FiChevronDown />
        </div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <span>Gifts</span>
          <FiChevronDown />
        </div>
        <span className="cursor-pointer">Custom Jewelry</span>
        <span className="cursor-pointer">About</span>
        <span className="cursor-pointer">Contact Us</span>
      </nav>

      <div className="flex items-center space-x-4">
        <IoIosHeartEmpty className="md:hidden" />
        <div className="relative md:hidden">
          <IoBagOutline />
          <span className="absolute -top-2 -right-2 text-xs bg-foreground text-white rounded-full w-4 h-4 flex items-center justify-center">
            1
          </span>
        </div>

        <IoSearchOutline className="text-xl" />
      </div>
    </section>
  );
};
