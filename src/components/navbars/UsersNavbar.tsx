import { GoBackButton } from "../buttons/GoBackButton";

interface IUserNavbar {
  firstName: string;
  lastName: string;
}

export const UserNavbar = ({ firstName, lastName }: IUserNavbar) => {
  return (
    <div className="w-full flex items-center gap-6 px-4 py-2 cursor-pointer overflow-hidden sticky top-0 backdrop-blur-md bg-[#00000099]">
      <div className="p-2">
        <GoBackButton />
      </div>
      <div className="flex-col h-9">
        <a>
          <h2 className="font-bold">{`${firstName} ${lastName}`}</h2>
        </a>
        <p className="text-[12px] text-[#71767B]">No Tweet</p>
      </div>
    </div>
  );
};
