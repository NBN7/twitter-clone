export const createUser = async (
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  image: string
) => {
  const response = await fetch(`https://localhost:7285/api/users`, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      image: image,
    }),
  });
  const data = await response.json();

  return data;
};
