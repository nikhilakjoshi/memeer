import { MemeInterface } from "./types";

export const DB: MemeInterface[] = [
  {
    id: 1,
    user: {
      thumbnail: "https://randomuser.me/api/portraits/med/men/75.jpg",
      userId: 2,
      username: "@johndoe",
      name: "John edfjhwedfhwuehfuiwheuhfuwefh Doe",
    },
    comments: [
      {
        commentText: "hello comment",
        comments: [
          {
            commentText: "Yeah thats good",
            stats: {
              likes: 22,
              reshares: 144,
            },
            user: {
              thumbnail: "https://randomuser.me/api/portraits/med/men/55.jpg",
              userId: 2,
              username: "@johndoe",
              name: "John Doe",
            },
          },
        ],
        stats: {
          likes: 3226,
          reshares: 54,
        },
        user: {
          thumbnail: "https://randomuser.me/api/portraits/med/men/37.jpg",
          userId: 2,
          username: "@johndoe",
          name: "John Doe",
        },
      },
    ],
    contentUrl: "https://source.unsplash.com/random/400x400",
    stats: {
      likes: 26,
      reshares: 23,
    },
    title: "Meme Title",
  },
  {
    id: 2,
    user: {
      thumbnail: "https://randomuser.me/api/portraits/med/men/37.jpg",
      userId: 2,
      username: "@johndsdfwoeowejoifwoiejfiwjepfjwoeknfownefjnwoe",
      name: "John Doe",
    },
    comments: [
      {
        commentText: "Hey hey he",
        comments: [
          {
            commentText: "Isn't it",
            stats: {
              likes: 2,
              reshares: 1,
            },
            user: {
              thumbnail: "https://randomuser.me/api/portraits/med/men/37.jpg",
              userId: 2,
              username: "@johndodhjfowihjefowheouhfwouehofhe",
              name: "John Doe",
            },
          },
        ],
        stats: {
          likes: 23,
          reshares: 44,
        },
        user: {
          thumbnail: "https://randomuser.me/api/portraits/med/men/37.jpg",
          userId: 2,
          username: "@johndoe",
          name: "John Doe",
        },
      },
    ],
    contentUrl: "https://source.unsplash.com/random/401X401",
    stats: {
      likes: 123,
      reshares: 2323,
    },
    title: "Meme Title 2",
  },
];
