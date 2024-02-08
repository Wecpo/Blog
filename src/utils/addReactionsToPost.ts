import { getRandomNumber } from "./getRandomNumber";

export function addReactionsToPost(posts: Array): Array {
  return posts.map((post: object) => {
    const reactions = {
      likes: {
        count: getRandomNumber(50),
        isActive: false,
      },
      dislikes: {
        count: getRandomNumber(50),
        isActive: false,
      },
    };
    return { ...post, reactions };
  });
}
