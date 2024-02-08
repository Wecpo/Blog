import { FC } from "react";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import ReactionBar from "../UI/ReactionBar/ReactionBar";
import ReadMoreButton from "../UI/ReadMoreButton/ReadMoreButton";
import styles from "./PostPreview.module.scss";
import { Post } from "../../store/postSlice";

interface PostPreviewProps {
  post: Post;
}

const PostsPreview: FC<PostPreviewProps> = ({ post }) => {
  if (post)
    return (
      post.id && (
        <div className={styles.child}>
          <img src={"Image.jpg"} alt="Здесь должно быть изображение к посту" />
          <h1 className={styles.postTitle}>
            {capitalizeFirstLetter(post.title)}
          </h1>
          <div className={styles.reactions}>
            <ReactionBar post={post} />
          </div>
          <span>{post.body}</span>
          <div className={styles.readMore}>
            <ReadMoreButton postId={post.id} />
          </div>
        </div>
      )
    );
  else {
    return "По вашему запросу ничего не найдено";
  }
};

export default PostsPreview;
