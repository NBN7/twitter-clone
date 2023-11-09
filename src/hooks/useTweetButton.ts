import { useState, useEffect } from "react";
import { checkTweet } from "@/utils/checkTweet";

export const useTweetButton = (tweet: string) => {
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(checkTweet(tweet));
  }, [tweet]);

  return { isDisabled };
};
