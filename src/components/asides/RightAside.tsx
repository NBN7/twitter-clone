import { Input } from "@nextui-org/input";

import { AiOutlineSearch } from "react-icons/ai";

export const RightAside = () => {
  return (
    <aside className="lg:block hidden w-full min-h-screen ">
      <div className="sticky top-0 w-[300px] flex flex-col gap-10 p-4">
        <Input
          variant="flat"
          startContent={<AiOutlineSearch size="20px" />}
          radius="full"
          placeholder="Search Twitter"
        />
      </div>
    </aside>
  );
};
