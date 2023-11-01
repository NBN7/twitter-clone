import { ItemContainer } from "./ItemContainer";

import { useIcons } from "@/hooks/useIcons";
import { ICONS } from "@/constants/icons";

import { BookmarkIcon } from "./icons/BookmarkIcon";
import { ExploreIcon } from "./icons/ExploreIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { ListsIcon } from "./icons/ListsIcon";
import { MessagesIcon } from "./icons/MessagesIcon";
import { MoreIcon } from "./icons/MoreIcon";
import { NotificationsIcon } from "./icons/NotificationsIcon";
import { ProfileIcon } from "./icons/ProfileIcon";

export const LeftAsideItems = () => {
  const { activeIcon, changeActiveIcon } = useIcons();

  const handleHomeClick = () => {
    changeActiveIcon(ICONS.HOME);
  };

  const handleProfileClick = () => {
    changeActiveIcon(ICONS.PROFILE);
  };

  return (
    <section className="flex flex-col gap-6">
      <ItemContainer onClick={handleHomeClick}>
        <HomeIcon activeIcon={activeIcon} />
        <span>Home</span>
      </ItemContainer>

      <ItemContainer>
        <ExploreIcon />
        <span>Explore</span>
      </ItemContainer>

      <ItemContainer>
        <NotificationsIcon />
        <span>Notifications</span>
      </ItemContainer>

      <ItemContainer>
        <MessagesIcon />
        <span>Messages</span>
      </ItemContainer>

      <ItemContainer>
        <BookmarkIcon />
        <span>Bookmarks</span>
      </ItemContainer>

      <ItemContainer>
        <ListsIcon />
        <span>Lists</span>
      </ItemContainer>

      <ItemContainer onClick={handleProfileClick}>
        <ProfileIcon activeIcon={activeIcon} />
        <span>Profile</span>
      </ItemContainer>

      <ItemContainer>
        <MoreIcon />
        <span>More</span>
      </ItemContainer>
    </section>
  );
};
