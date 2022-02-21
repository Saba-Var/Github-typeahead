import styles from "./Typeahead.module.css";
import Users from "../Users/Users";
import { useState } from "react";
import Overlay from "../Overlay/Overlay";
import InputField from "../InputField/InputField";

const Typeahead = (props) => {
  const [input, setInput] = useState("");
  const [usersList, setUsersList] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Overlay setUsersList={setUsersList} />
      <form onSubmit={submitHandler}>
        <div className={styles.search}>
          <InputField
            logoVisibility={props.setLogoVisibility}
            setUsersList={setUsersList}
            setInput={setInput}
            input={input}
          />
          <Users user={input} usersListVisibility={usersList} />
        </div>
      </form>
    </>
  );
};

export default Typeahead;
