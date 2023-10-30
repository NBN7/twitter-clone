import { TAnchorVariant } from "@/types/anchorVariant";
import { ANCHOR_VARIANTS } from "@/constants/anchorVariants";

interface IAnchor {
  href?: string;
  text: string;
  variant?: TAnchorVariant;
}

export const Anchor = ({ href, text, variant }: IAnchor) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`${variant === ANCHOR_VARIANTS.DEFAULT ? "text-[#71767B]" : ""}
                  ${variant === ANCHOR_VARIANTS.PRIMARY ? "text-[#1D9BF0]" : ""}
      cursor-pointer hover:underline truncate`}
    >
      {text}
    </a>
  );
};
