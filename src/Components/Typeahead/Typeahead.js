import styles from "./Typeahead.module.css";
import Users from "../Users/Users";
import { useState } from "react";
import Overlay from "../Overlay/Overlay";
import InputField from "../InputField/InputField";
import closeSVG from "../../assets/close_svg.svg";
const Typeahead = (props) => {
  const [input, setInput] = useState("");
  const [usersList, setUsersList] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const clickHandler = () => {
    setInput("");
    document.querySelector("input").focus();
  };
  return (
    <div>
      <Overlay setUsersList={setUsersList} />
      <form onSubmit={submitHandler}>
        <div className={styles.container}>
          <div className={styles.search}>
            <InputField
              logoVisibility={props.setLogoVisibility}
              setUsersList={setUsersList}
              setInput={setInput}
              input={input}
            />
            {input !== "" && (
              <div className={styles["img__container"]}>
                <img
                  onClick={clickHandler}
                  src={closeSVG}
                  className={styles["close__svg"]}
                  alt="close icon"
                  draggable="false"
                />
              </div>
            )}
          </div>
        </div>
        <Users user={input} usersListVisibility={usersList} />
      </form>
    </div>
  );
};

export default Typeahead;
