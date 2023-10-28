interface IAnchor {
  href?: string;
  text: string;
}

export const Anchor = ({ href, text }: IAnchor) => {
  return (
    <a href={href} className="text-[#1D9BF0] cursor-pointer hover:underline">
      {text}
    </a>
  );
};
