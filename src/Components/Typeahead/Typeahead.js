import styles from "./Typeahead.module.css";
import Users from "../Users/Users";
import { useState } from "react";
import Overlay from "../Overlay/Overlay";
import InputField from "../InputField/InputField";
import closeSVG from "../../assets/close_svg.svg";
import spinner from "../../assets/Rolling-1s-200px.svg";

const Typeahead = (props) => {
  const [input, setInput] = useState("");
  const [usersList, setUsersList] = useState(true);
  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const clickHandler = () => {
    setInput("");
    document.querySelector("input").focus();
    props.setLogoVisibility(true);
  };
  return (
    <div>
      <Overlay setUsersList={setUsersList} />
      <form onSubmit={submitHandler}>
        <div className={styles.container}>
          <div className={styles.search}>
            <label className={styles.label}>Search a Github User</label>
            <InputField
              setlogoVisibility={props.setLogoVisibility}
              setUsersList={setUsersList}
              setInput={setInput}
              input={input}
            />
            {loading && (
              <div className={styles.spinner}>
                <img src={spinner} alt="spinner" />
              </div>
            )}
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
        <Users
          user={input}
          usersListVisibility={usersList}
          setLoading={setLoading}
          loading={loading}
        />
      </form>
    </div>
  );
};

export default Typeahead;
