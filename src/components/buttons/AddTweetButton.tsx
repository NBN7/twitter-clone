import { AiOutlinePlus } from "react-icons/ai";

export const AddTweetButton = () => {
  return (
    <button className="lg:hidden fixed rounded-full bg-sky-500 bottom-0 right-0 p-3 mr-4 mb-20 z-50">
      <AiOutlinePlus size="25px" />
    </button>
  );
};
