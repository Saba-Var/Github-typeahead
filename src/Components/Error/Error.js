import styles from "./Error.module.css";
const Error = (props) => {
  return (
    <div className={styles["error_message__container"]}>
      <p className={styles["error_message"]}>
        Exceed 10 requests per minute. Try after a few seconds.
      </p>
    </div>
  );
};
export default Error;
