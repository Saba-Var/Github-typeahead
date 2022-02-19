import styles from "./Typeahead.module.css";
import Users from "./Users/Users";
import { useState } from "react";

const Typeahead = (props) => {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={styles.search}>
      <div className={styles.input}>
        <input type="text" placeholder="username" onChange={inputHandler} />
        <Users user={input} />
      </div>
    </div>
  );
};

export default Typeahead;
