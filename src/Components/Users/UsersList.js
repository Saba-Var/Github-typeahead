import styles from "./Users.module.css";

const UsersList = (props) => {
  return (
    <ul className={styles.filtered__users}>
      {props.usersData.map((data) => {
        return (
          <li className={styles.user} key={data.login}>
            <a href={data.html_url} target="_blank" rel="noreferrer">
              <p>{data.login}</p>
              <img src={data.avatar_url} alt={"Avatar of user"} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default UsersList;
