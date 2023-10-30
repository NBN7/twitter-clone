import { HomePost } from "@/components/posts/HomePost";
import { TUser } from "@/types/user";

import { getAllUsers } from "@/utils/users/getAllUsers";

import { AddTweetButton } from "@/components/buttons/AddTweetButton";
import { HomeFooter } from "@/components/footers/HomeFooter";

export default async function HomePage() {
  const users = await getAllUsers();

  return (
    <main id="home">
      
      {users.map((user: TUser) => (
        <HomePost key={user.id} user={user} />
      ))}
      <AddTweetButton />

      <HomeFooter />
    </main>
  );
}
