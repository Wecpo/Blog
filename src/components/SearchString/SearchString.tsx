import styles from "./SearchString.module.scss";

const SearchString = () => {
  return (
    <div className={styles.container}>
      <input
        placeholder="Поиск по названию статьи"
        className={styles.search}
        type="text"
      />
    </div>
  );
};

export default SearchString;
