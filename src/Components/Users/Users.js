import { useState, useEffect } from "react";
import UsersList from "./UsersList";
import NotFound from "./NotFound";
import Error from "../Error/Error";

const Users = (props) => {
  const [usersData, setUsersData] = useState([]);
  const [hasError, setError] = useState(false);
  const username = props.user.toLowerCase().trim();
  const [token, setToken] = useState("");

  useEffect(() => {
    async function getToken() {
      const response = await fetch(
        "https://github-token-default-rtdb.europe-west1.firebasedatabase.app/token.json"
      );
      const data = await response.json();
      setToken(data.token);
    }
    getToken();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (username !== "") {
        async function fetchGithubAPI() {
          try {
            const response = await fetch(
              `https://api.github.com/search/users?q=${username}`,
              {
                method: "get",
                headers: new Headers({
                  Authorization: `token ${token}`,
                }),
              }
            );
            if (response.status === 403) throw new Error("403");
            const data = await response.json();
            if (response.ok === true) {
              setError(false);
              props.setFound(true);
              setUsersData(
                data.items.filter(
                  (item) =>
                    item.login.toLowerCase().includes(username) &&
                    item.login[0].toLowerCase() === username[0]
                )
              );
              if (username.includes(" ")) props.setFound(false);
            }
            props.setLoading(false);
            data.total_count === 0 && props.setFound(false);
          } catch (error) {
            if (error) {
              props.setLoading(false);
              setError(true);
            }
          }
        }
        fetchGithubAPI();
      }
    }, 300);
    if (username === "") {
      props.setFound(true);
      setUsersData([]);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [username]);

  return (
    <>
      {username !== "" &&
        props.found &&
        !hasError &&
        props.usersListVisibility && (
          <UsersList
            usersData={usersData}
            usersCount={usersData}
            username={username}
          />
        )}
      {!props.found && !hasError && <NotFound username={username} />}
      {hasError && <Error />}
    </>
  );
};
export default Users;
