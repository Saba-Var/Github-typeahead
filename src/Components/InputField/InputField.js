import React from "react";
import styles from "./InputField.module.css";
const InputField = (props) => {
  const setlogoVisibility = props.setlogoVisibility;
  const inputHandler = (e) => {
    props.setInput(e.target.value);
    if (props.found) {
      props.setLoading(true);
    }
  };
  const usersListVisibility = () => {
    setlogoVisibility(true);
    props.setUsersList(true);
  };
  const inputLeaveHandler = (e) => {
    if (e.nativeEvent.relatedTarget === null) {
      setlogoVisibility(false);
      props.setUsersList(false);
    }
  };

  return (
    <input
      id="input"
      type="text"
      value={props.input}
      placeholder="username..."
      spellCheck="false"
      onChange={inputHandler}
      className={`${props.input !== "" && styles["bottom_corners"]} ${
        styles.input
      }`}
      onClick={usersListVisibility}
      onBlur={inputLeaveHandler}
      autoComplete="off"
    />
  );
};

export default React.memo(InputField);
