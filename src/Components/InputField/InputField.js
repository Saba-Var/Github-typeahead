import styles from "./InputField.module.css";

const InputField = (props) => {
  const logoVisibility = props.logoVisibility;
  const inputHandler = (e) => {
    props.setInput(e.target.value);
  };
  const usersListVisibility = () => {
    props.setUsersList(true);
    logoVisibility(true);
  };
  const inputLeaveHandler = () => {
    logoVisibility(false);
  };
  return (
    <input
      type="text"
      placeholder="username"
      spellCheck="false"
      onChange={inputHandler}
      className={`${props.input !== "" && styles["bottom_corners"]}`}
      onClick={usersListVisibility}
      onBlur={inputLeaveHandler}
    />
  );
};

export default InputField;
