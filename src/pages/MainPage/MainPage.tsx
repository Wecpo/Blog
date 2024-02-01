import SearchString from "../../components/SearchString/SearchString";
import styles from "./MainPage.module.scss";
import PostsPreview from "../../components/PostPreview/PostPreview";
import { useAppDispatch, useAppSelector } from "../../hook";
import postSlice, { getPosts, postsLoaded } from "../../store/postSlice";
import { useEffect } from "react";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector(getPosts);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => dispatch(postsLoaded(json)));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Блог</h1>
      <p className={styles.about}>
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
        также переводим зарубежные статьи
      </p>
      <SearchString />
      <div className={styles.postsContainer}>
        {posts.slice(0, 5).map((post) => (
          <PostsPreview post={post} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
