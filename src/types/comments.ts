export type TComment = {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  image: string;
  createdAt: Date;
  tweetText: string;
  numLikes: number;
  numReposts: number;
  numComments: number;
  comments: [];
};
