import Link from "next/link";

import { useUserContext } from "@/context/userContext";

import { ItemContainer } from "./ItemContainer";

import { BookmarkIcon } from "./icons/BookmarkIcon";
import { ExploreIcon } from "./icons/ExploreIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { ListsIcon } from "./icons/ListsIcon";
import { MessagesIcon } from "./icons/MessagesIcon";
import { MoreIcon } from "./icons/MoreIcon";
import { NotificationsIcon } from "./icons/NotificationsIcon";
import { ProfileIcon } from "./icons/ProfileIcon";

export const LeftAsideItems = () => {
  const { username } = useUserContext();

  return (
    <section className="flex flex-col">
      <Link href="/home">
        <ItemContainer>
          <HomeIcon />
          <span>Home</span>
        </ItemContainer>
      </Link>

      <ItemContainer isDisabled>
        <ExploreIcon />
        <span>Explore</span>
      </ItemContainer>

      <ItemContainer isDisabled>
        <NotificationsIcon />
        <span>Notifications</span>
      </ItemContainer>

      <ItemContainer isDisabled>
        <MessagesIcon />
        <span>Messages</span>
      </ItemContainer>

      <ItemContainer isDisabled>
        <BookmarkIcon />
        <span>Bookmarks</span>
      </ItemContainer>

      <ItemContainer isDisabled>
        <ListsIcon />
        <span>Lists</span>
      </ItemContainer>

      <Link href={`/users/${username}`}>
        <ItemContainer>
          <ProfileIcon />
          <span>Profile</span>
        </ItemContainer>
      </Link>

      <ItemContainer isDisabled>
        <MoreIcon />
        <span>More</span>
      </ItemContainer>
    </section>
  );
};
