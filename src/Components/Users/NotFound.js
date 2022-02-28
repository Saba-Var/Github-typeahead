import styles from "./NotFound.module.css";
const NotFound = (props) => {
  return (
    <div className={styles["not_found__container"]}>
      <p className={styles["not_found"]}>
        User (
        {props.username.length <= 15
          ? props.username
          : props.username.slice(0, 15) + "..."}
        ) not found
      </p>
    </div>
  );
};
export default NotFound;
