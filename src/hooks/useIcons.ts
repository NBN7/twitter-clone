import { useState } from "react";

import { FOOTER_ICONS } from "@/constants/icons";

export const useIcons = () => {
  const [activeIcon, setActiveIcon] = useState(FOOTER_ICONS.HOME);

  const changeActiveIcon = (icon: string) => {
    setActiveIcon(icon);
  };

  return { activeIcon, changeActiveIcon };
};
