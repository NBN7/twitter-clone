import { GoBackButton } from "../buttons/GoBackButton";

export const TweetNavbar = () => {
  return (
    <nav className="w-full flex py-4 px-6 gap-6 items-center backdrop-blur-lg sticky top-0">
      <GoBackButton />

      <h2>Post</h2>
    </nav>
  );
};
