export const createPost = async (userName: string, tweetText: string) => {
  const response = await fetch(`https://localhost:7285/api/posts`, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: userName,
      tweetText: tweetText,
    }),
  });
  const data = await response.json();

  return data;
};
