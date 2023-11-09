import { AiOutlineRetweet } from "react-icons/ai";

interface IRetweetButton {
  userName: string;
  tweetId: number;
}

export const RetweetButton = ({ userName, tweetId }: IRetweetButton) => {
  const handleClick = async () => {
    fetch("https://localhost:7285/api/tweets/Repost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        tweetId,
      }),
    });
  };

  return (
    <button onClick={handleClick}>
      <AiOutlineRetweet size="20px" />
    </button>
  );
};
