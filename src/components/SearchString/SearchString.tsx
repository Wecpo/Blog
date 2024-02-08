import { FC } from "react";
import styles from "./SearchString.module.scss";

interface SearchStringProps {
  onChange: (event: string) => void;
}

const SearchString: FC<SearchStringProps> = ({ onChange }) => {
  return (
    <div className={styles.container}>
      <input
        name="search"
        onChange={(event) => onChange(event.target.value)}
        placeholder="Поиск по названию статьи"
        className={styles.search}
        type="text"
      />
    </div>
  );
};

export default SearchString;
