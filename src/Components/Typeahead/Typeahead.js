import styles from "./Typeahead.module.css";
import Users from "../Users/Users";
import { useState } from "react";
import Overlay from "../Overlay/Overlay";

const Typeahead = (props) => {
  const [input, setInput] = useState("");
  const [usersList, setUsersList] = useState(true);
  const logoVisibility = props.setLogoVisibility;
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const usersListVisibility = () => {
    setUsersList(true);
    logoVisibility(true);
  };
  const inputLeaveHandler = () => {
    logoVisibility(false);
  };
  return (
    <>
      <Overlay setUsersList={setUsersList} />
      <form>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="username"
            spellCheck="false"
            onChange={inputHandler}
            className={`${input !== "" && styles["bottom_corners"]}`}
            onClick={usersListVisibility}
            onBlur={inputLeaveHandler}
          />
          <Users user={input} usersListVisibility={usersList} />
        </div>
      </form>
    </>
  );
};

export default Typeahead;
