import styles from "./UsersList.module.css";

const UsersList = (props) => {
  const listLength = props.usersCount.length;
  const listStyle = `${styles.filtered__users}  ${
    listLength === 1 && styles["user__length1"]
  } ${listLength === 2 && styles["user__length2"]} ${
    listLength === 3 && styles["user__length3"]
  } ${listLength === 4 && styles["user__length4"]} ${
    listLength === 5 && styles["user__length5"]
  } ${listLength > 5 && styles["user__length__other"]}`;

  return (
    <>
      {!props.loading && (
        <ul className={listStyle}>
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
      )}
    </>
  );
};

export default UsersList;
