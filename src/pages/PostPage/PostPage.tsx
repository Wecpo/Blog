import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hook";
import { Post, getPosts } from "../../store/postSlice";
import styles from "./PostPage.module.scss";
import ReactionBar from "../../components/UI/ReactionBar/ReactionBar";
import LeftArrow from "../../assets/svgs/leftArrow.svg?react";
import { FC } from "react";
import ErrorPage from "../ErrorPage/ErrorPage";

type Params = {
  postId: string;
};

const PostPage: FC = () => {
  const { postId } = useParams<Params>();
  const { posts } = useAppSelector(getPosts);
  const post: Post = posts.filter((post) => post.id === Number(postId))[0];
  const navigate = useNavigate();

  // Запрос `posts/{id}` не стал делать, т.к. есть редакс, нет сервера самого и нет смысла запрос делать.
  // Можно было как-бы получить пост с апи и методом сравнения получить на его основе пост со стора, чтобы лайки работали.
  //

  // fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)  и т.д. и т.п.
  //     .then(response => response.json())
  //     .then(json => console.log(json))

  if (postId) {
    if (+postId > posts.length) {
      return <ErrorPage />;
    }
  }

  return post ? (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <button className={styles.backButton} onClick={() => navigate("/")}>
            <LeftArrow style={{ width: `25px` }} />
            Вернуться к статьям
          </button>
          <div>
            <ReactionBar post={post} />
          </div>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{post.title}</h1>
          <img src="/Image.jpg" alt="Здесь должно быть изображение поста" />
          <p className={styles.body}>{post.body}</p>
        </div>
      </div>
    </>
  ) : (
    <h1>Идет загрузка, пожалуйста, ожидайте</h1>
  );
};

export default PostPage;
