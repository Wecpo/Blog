import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import PostPage from "./pages/PostPage/PostPage";
import { useEffect } from "react";
import { addReactionsToPost } from "./utils/addReactionsToPost";
import { useAppDispatch } from "./hook";
import { loadPosts } from "./store/postSlice";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((posts) => addReactionsToPost(posts))
      .then((posts) => dispatch(loadPosts(posts)));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="post/:postId" element={<PostPage />} />
    </Routes>
  );
}

export default App;
