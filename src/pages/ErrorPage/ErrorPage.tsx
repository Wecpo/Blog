import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div id="error-page">
      <h1>Упс!</h1>
      <p>Простите, такой страницы не существует.</p>
      <button onClick={() => navigate("/")}>На главную</button>
      <p></p>
    </div>
  );
};

export default ErrorPage;
