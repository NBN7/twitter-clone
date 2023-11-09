import { BiMessageRounded } from "react-icons/bi";

interface ICommentButton {
  onClick?: () => void;
}

export const CommentButton = ({ onClick }: ICommentButton) => {
  return (
    <button onClick={onClick}>
      <BiMessageRounded size="20px" />
    </button>
  );
};
