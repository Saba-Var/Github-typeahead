import styles from "./Typeahead.module.css";
import Users from "./Users/Users";
import { useState } from "react";

const Typeahead = (props) => {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <form>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="username"
          onChange={inputHandler}
          className={`${input !== "" && styles["bottom_corners"]}`}
        />
        <Users user={input} />
      </div>
    </form>
  );
};

export default Typeahead;
