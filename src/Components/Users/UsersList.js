import { useEffect, useState } from "react";
import styles from "./UsersList.module.css";
const UsersList = (props) => {
  const [boldText, setBoldTExt] = useState("");
  const username = props.username;
  const listLength = props.usersCount.length;
  const listStyle = `${styles.filtered__users} ${
    listLength === 1 && styles["user__length1"]
  } ${listLength === 2 && styles["user__length2"]} ${
    listLength === 3 && styles["user__length3"]
  } ${listLength === 4 && styles["user__length4"]} ${
    listLength === 5 && styles["user__length5"]
  } ${listLength > 5 && styles["user__length__other"]}`;

  useEffect(() => {
    setBoldTExt(
      <ul className={listStyle} id="ul">
        {props.usersData.map((data) => {
          return (
            <li className={styles.user} key={data.login}>
              <a href={data.html_url} target="_blank" rel="noreferrer">
                <p>
                  {data.login.slice(0, username.length)}
                  <b>{data.login.slice(username.length, data.login.length)}</b>
                </p>
                <img src={data.avatar_url} alt={"Avatar of user"} />
              </a>
            </li>
          );
        })}
      </ul>
    );
  }, [props.usersData]);

  return <>{boldText}</>;
};

export default UsersList;
