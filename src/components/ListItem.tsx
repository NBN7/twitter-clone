interface IListItem {
  children: React.ReactNode;
  isDisabled?: boolean;
}

export const ListItem = ({ children, isDisabled = false }: IListItem) => {
  return (
    <li
      className={`flex items-center gap-4 ${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {children}
    </li>
  );
};
