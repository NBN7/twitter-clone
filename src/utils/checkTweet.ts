export const checkTweet = (tweet: string) => {
  if (!tweet.trim() || tweet.length >= 280) {
    return true;
  }
  return false;
};
