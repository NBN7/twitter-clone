import { Input } from "@nextui-org/input";

import { AiOutlineSearch } from "react-icons/ai";

export const RightAside = () => {
  return (
    <aside className="lg:block hidden w-full min-h-screen border-l border-l-[#2F3336]">
      <div className="sticky top-0 max-w-xs flex flex-col gap-10 p-4">
        <Input
          id="search"
          variant="flat"
          startContent={<AiOutlineSearch size="20px" />}
          radius="full"
          placeholder="Search Twitter"
          label=""
          aria-labelledby="search"
        />
      </div>
    </aside>
  );
};
