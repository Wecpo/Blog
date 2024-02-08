import { useAppDispatch } from "../../../hook";
import styles from "./ReactionBar.module.scss";
import ThumpUp from "../../../assets/svgs/thumbup.svg?react";
import ThumpDown from "../../../assets/svgs/thumbdown.svg?react";
import {
  addDislike,
  addLike,
  removeDislike,
  removeLike,
} from "../../../store/postSlice";
import { FC } from "react";

type Reactions = {
  likes: {
    count: number;
    isActive: boolean;
  };
  dislikes: {
    count: number;
    isActive: boolean;
  };
};

type ReactionBarProps = {
  post: {
    body: string;
    id: number;
    title: string;
    userId: number;
    reactions: Reactions;
  };
};

const ReactionBar: FC<ReactionBarProps> = ({ post }) => {
  const dispatch = useAppDispatch();
  const { likes, dislikes } = post.reactions;

  const toggleLike = () => {
    if (likes.isActive) {
      dispatch(removeLike(post.id));
    }

    if (!likes.isActive) {
      dispatch(addLike(post.id));
    }

    if (dislikes.isActive) {
      dispatch(removeDislike(post.id));
    }
  };

  const toggleDislike = () => {
    if (dislikes.isActive) {
      dispatch(removeDislike(post.id));
    }

    if (!dislikes.isActive) {
      dispatch(addDislike(post.id));
    }

    if (likes.isActive) {
      dispatch(removeLike(post.id));
    }
  };

  const toggleReaction = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = event.target as HTMLTextAreaElement;

    const reactionType = target.className.includes(`dislikes`)
      ? "dislike"
      : "like";

    if (reactionType === "like") {
      toggleLike();
    }

    if (reactionType === "dislike") {
      toggleDislike();
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div
          className={likes.isActive ? styles.likesOn : styles.likes}
          onClick={(event) => toggleReaction(event)}
        >
          <ThumpUp />
        </div>
        <p className={styles.counter}>{likes.count}</p>
        <div
          className={dislikes.isActive ? styles.dislikesOn : styles.dislikes}
          onClick={(event) => toggleReaction(event)}
        >
          <ThumpDown />
        </div>
        <p className={styles.counter}>{dislikes.count}</p>
      </div>
    </>
  );
};

export default ReactionBar;
