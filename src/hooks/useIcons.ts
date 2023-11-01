import { useState } from "react";

import { ICONS } from "@/constants/icons";

export const useIcons = () => {
  const [activeIcon, setActiveIcon] = useState(ICONS.HOME);

  const changeActiveIcon = (icon: string) => {
    setActiveIcon(icon);
  };

  return { activeIcon, changeActiveIcon };
};
