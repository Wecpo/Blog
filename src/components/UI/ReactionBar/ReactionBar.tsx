import { useAppDispatch, useAppSelector } from "../../../hook";
// import { addDislike, addLike } from "../../store/reactionSlice";
import styles from "./ReactionBar.module.scss";

const ReactionBar = () => {
  const { reaction } = useAppSelector((state) => state.reactions);
  // const dispatch = useAppDispatch();

  return (
    <>
      <div className={styles.container}>
        <object className={styles.thumbUp} type="image/svg" data="thumbup.svg">
          <img className={styles.thumbUp} src="thumbup.svg" alt="Палец вверх" />
        </object>
        <p className={styles.counter}>{reaction.likes}</p>
        <object
          className={styles.thumbDown}
          type="image/svg"
          data="thumdown.svg"
        >
          <img src="thumbdown.svg" alt="Палец вниз" />
        </object>
        <p className={styles.counter}>{reaction.dislikes}</p>
      </div>
    </>
  );
};

export default ReactionBar;
