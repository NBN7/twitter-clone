interface IListItem {
  children: React.ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const ItemContainer = ({
  children,
  isDisabled = false,
  onClick,
}: IListItem) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 hover:bg-[#181818] p-4 rounded-full 
      ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
    >
      {children}
    </div>
  );
};
