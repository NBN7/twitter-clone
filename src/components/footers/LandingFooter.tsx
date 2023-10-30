import { Anchor } from "../Anchor";
import { LANDING_FOOTER_ITEMS } from "@/constants/landingFooterItems";

export const LandingFooter = () => {
  return (
    <footer className="hidden lg:flex flex-wrap items-center justify-center fixed bottom-0 w-full p-4 gap-4 text-sm bg-black overflow-hidden">
      {LANDING_FOOTER_ITEMS.map((item) => (
        <Anchor text={item.name} href={item.url} variant="default" />
      ))}
    </footer>
  );
};