interface IListItem {
  children: React.ReactNode;
  isDisabled?: boolean;
}

export const AsideItem = ({ children, isDisabled = false }: IListItem) => {
  return (
    <div
      className={`flex items-center gap-4 ${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {children}
    </div>
  );
};
