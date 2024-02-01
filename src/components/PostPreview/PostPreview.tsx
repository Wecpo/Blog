import ReactionBar from "../UI/ReactionBar/ReactionBar";
import ReadMoreButton from "../UI/ReadMoreButton/ReadMoreButton";
import styles from "./PostPreview.module.scss";

const PostsPreview = ({ post }) => {
  return (
    <div className={styles.child}>
      <img src={"Image.jpg"} alt="Здесь должно быть изображение к посту" />
      <h1 className={styles.postTitle}>A{post.title}</h1>
      <div className={styles.reactions}>
        <ReactionBar />
      </div>
      <span>{post.body}</span>
      <div className={styles.readMore}>
        <ReadMoreButton />
      </div>
    </div>
  );
};

export default PostsPreview;
