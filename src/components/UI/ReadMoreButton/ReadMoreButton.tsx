import { Link } from "react-router-dom";
import styles from "./ReadMoreButton.module.scss";
import { FC } from "react";

interface ReadMoreButtonProps {
  postId: number;
}

const ReadMoreButton: FC<ReadMoreButtonProps> = ({ postId }) => {
  return (
    <Link to={`post/${postId}`} className={styles.button}>
      Читать далее
    </Link>
  );
};

export default ReadMoreButton;
