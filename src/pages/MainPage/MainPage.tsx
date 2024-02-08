import SearchString from "../../components/SearchString/SearchString";
import styles from "./MainPage.module.scss";
import PostsPreview from "../../components/PostPreview/PostPreview";
import { useAppSelector } from "../../hook";
import { Post, getPosts } from "../../store/postSlice";
import { FC, useCallback, useEffect, useState } from "react";

interface currentPostFromApiProps extends Post {}

const MainPage: FC = () => {
  const { posts } = useAppSelector(getPosts);
  const [search, setSearch] = useState<string>(``);
  const [postsFromApi, setPostsFromApi] = useState<[]>();

  const handleChange = (value: string): void => {
    setSearch(value);
  };

  const getPostsFromApi = (): void => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => setPostsFromApi(json));
  };

  const getPostIndexBySearch = useCallback((): number => {
    if (postsFromApi && search) {
      const currentPostFromApi: currentPostFromApiProps = postsFromApi.filter(
        (post: Post) => post.title.toLowerCase() === search.toLowerCase() // Находим текущий пост из поиска, чтобы в дальнейшем по нему вытащить нужный пост из стора, чтобы работали лайки.
      )[0]; // Совпадение по полному названию поста}
      if (currentPostFromApi) {
        return posts.findIndex((post) => post.id == currentPostFromApi.id); // Получаем пост со стора, чтобы работал reaction bar
      }
    }
    return -2;
  }, [postsFromApi, posts, search]);

  useEffect(() => {
    getPostsFromApi(); // `Запрос на сервер`
  }, []);

  useEffect(() => {
    getPostIndexBySearch();
  }, [search, getPostIndexBySearch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Блог</h1>
      <p className={styles.about}>
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
        также переводим зарубежные статьи
      </p>
      <SearchString onChange={handleChange} />
      <div className={styles.postsContainer}>
        {search.length < 1 ? ( // Если в инпуте пусто выводим все посты, slice 13 чтобы все 100 не выводить.
          posts
            .slice(0, 13)
            .map((post) => <PostsPreview post={post} key={post.id} />)
        ) : (
          // если в инпуте что-то есть
          <PostsPreview post={posts[getPostIndexBySearch()]} />
        )}
      </div>
    </div>
  );
};

export default MainPage;
