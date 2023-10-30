import { HomePost } from "@/components/posts/HomePost";
import { TUser } from "@/types/user";

import { getAllUsers } from "@/utils/users/getAllUsers";

import { AddTweetButton } from "@/components/buttons/AddTweetButton";
import { HomeFooter } from "@/components/footers/HomeFooter";
import { TweetInput } from "@/components/TweetInput";

export default async function HomePage() {
  const users = await getAllUsers();

  return (
    <main id="home">
      <TweetInput />

      {users.map((user: TUser) => (
        <HomePost key={user.id} user={user} />
      ))}
      <AddTweetButton />

      <HomeFooter />
    </main>
  );
}
