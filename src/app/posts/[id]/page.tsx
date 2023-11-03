import { TweetPost } from "@/components/posts/TweetPost";

import { getOneUser } from "@/services/getOneUser";

import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";

interface IPostPage {
  params: Params;
}

export default async function PostPage({ params }: IPostPage) {
  const { id } = params;

  const user = await getOneUser(id);

  return <TweetPost user={user} />;
}
