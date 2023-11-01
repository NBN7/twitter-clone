import Link from "next/link";

import { BsTwitter } from "react-icons/bs";

export const TwitterIcon = () => {
  return (
    <Link href="/home">
      <BsTwitter size="30px" />
    </Link>
  );
};
