import { HomePost } from "@/components/posts/HomePost";
import { TUser } from "@/types/User";

import { getAllUsers } from "@/utils/users/getAllUsers";

export default async function HomePage() {
  const users = await getAllUsers();

  return (
    <main id="home">
      {users.map((user: TUser) => (
        <HomePost key={user.id} user={user} />
      ))}
    </main>
  );
}