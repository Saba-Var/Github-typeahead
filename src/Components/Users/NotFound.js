import styles from "./NotFound.module.css";
const NotFound = (props) => {
  return (
    <div className={styles["not_found__container"]}>
      <p className={styles["not_found"]}>User ({props.username}) not found</p>
    </div>
  );
};
export default NotFound;
