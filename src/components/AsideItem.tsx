interface IListItem {
  children: React.ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const AsideItem = ({
  children,
  isDisabled = false,
  onClick,
}: IListItem) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 ${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {children}
    </div>
  );
};
