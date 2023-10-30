import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { IoHome, IoNotificationsOutline } from "react-icons/io5";

export const HomeFooter = () => {
  return (
    <footer className="lg:hidden w-full flex justify-around py-4 px-6 items-center bg-black border-t border-t-[#2F3336] sticky bottom-0 z-50">
      <button>
        <IoHome size="30px" />
      </button>

      <button>
        <IoNotificationsOutline size="30px" />
      </button>

      <button>
        <HiOutlineMail size="30px" />
      </button>

      <button>
        <HiOutlineUser size="30px" />
      </button>
    </footer>
  );
};
