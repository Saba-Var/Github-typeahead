import styles from "./InputField.module.css";

const InputField = (props) => {
  const setlogoVisibility = props.setlogoVisibility;
  const inputHandler = (e) => {
    props.setInput(e.target.value);
  };
  const usersListVisibility = () => {
    props.setUsersList(true);
    setlogoVisibility(true);
  };
  const inputLeaveHandler = () => {
    setlogoVisibility(false);
  };

  return (
    <input
      type="text"
      value={props.input}
      placeholder="Enter a Github username"
      spellCheck="false"
      onChange={inputHandler}
      className={`${props.input !== "" && styles["bottom_corners"]}`}
      onClick={usersListVisibility}
      onBlur={inputLeaveHandler}
    />
  );
};

export default InputField;
