import styles from "./Error.module.css";
const Error = () => {
  return (
    <div className={styles["error_message__container"]}>
      <p className={styles["error_message"]}>
        Failed to fetch. Try again in a few seconds.
      </p>
    </div>
  );
};
export default Error;
