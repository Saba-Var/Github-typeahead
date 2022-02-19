import styles from "./Users.module.css";

const Users = (props) => {
  return (
    <div className={styles.filtered__users}>
      <div className={styles.user}>
        <a href={props.data.html_url} target="_blank" rel="noreferrer">
          <p>{props.data.login}</p>
          <img src={props.data.avatar_url} alt={"Avatar of user"} />
        </a>
      </div>
    </div>
  );
};
export default Users;
