import styles from "./Users.module.css";
import { useState, useEffect } from "react";

const Users = (props) => {
  const [usersData, setUsersData] = useState([]);
  const [found, setFound] = useState(true);
  const username = props.user;

  useEffect(() => {
    let timer = setTimeout(() => {
      if (username !== "") {
        async function fetchGithubAPI() {
          const response = await fetch(
            `https://api.github.com/search/users?q=${username}`
          );
          const data = await response.json();
          if (response.status === 200) {
            setUsersData(
              data.items.filter((item) => item.login.includes(username))
            );
            setFound(true);
          }
          if (data.total_count === 0) {
            setFound(false);
          }
        }
        fetchGithubAPI();
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [username]);

  return (
    <>
      {username !== "" && found && (
        <div className={styles.filtered__users}>
          {usersData.map((data) => {
            return (
              <div className={styles.user} key={data.login}>
                <a href={data.html_url} target="_blank" rel="noreferrer">
                  <p>{data.login}</p>
                  <img src={data.avatar_url} alt={"Avatar of user"} />
                </a>
              </div>
            );
          })}
        </div>
      )}
      {!found && (
        <div className={styles["not_found__container"]}>
          <p className={styles["not_found"]}>user nor found</p>
        </div>
      )}
    </>
  );
};
export default Users;
