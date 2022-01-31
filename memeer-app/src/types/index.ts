export interface UserInterface {
  userId: number;
  thumbnail: string;
  username: string;
  name: string;
}

export interface CommentInterface {
  commentText: string;
  stats: StatsInterface;
  user: UserInterface;
}

export interface MemeCommentInterface {
  commentText: string;
  comments: CommentInterface[];
  stats: StatsInterface;
  user: UserInterface;
}

export interface StatsInterface {
  likes: number;
  reshares: number;
}

export interface MemeInterface {
  id: number;
  title: string;
  contentUrl: string;
  comments: MemeCommentInterface[];
  stats: StatsInterface;
  user: UserInterface;
}
