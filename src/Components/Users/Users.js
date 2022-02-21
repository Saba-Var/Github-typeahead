import { useState, useEffect } from "react";
import UsersList from "./UsersList";
import NotFound from "./NotFound";
const Users = (props) => {
  const [usersData, setUsersData] = useState([]);
  const [found, setFound] = useState(true);
  const username = props.user.toLowerCase().trim();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (username !== "") {
        async function fetchGithubAPI() {
          const response = await fetch(
            `https://api.github.com/search/users?q=${username}`
          );
          const data = await response.json();
          if (response.status === 200) {
            setFound(true);
            setUsersData(
              data.items.filter(
                (item) =>
                  item.login.toLowerCase().includes(username) &&
                  item.login[0].toLowerCase() === username[0]
              )
            );
          }
          if (data.total_count === 0) setFound(false);
        }
        fetchGithubAPI();
      }
    }, 1000);
    if (username === "") setFound(true);
    return () => {
      clearTimeout(timer);
    };
  }, [username]);

  return (
    <>
      {username !== "" && found && props.usersListVisibility && (
        <UsersList usersData={usersData} usersCount={usersData} />
      )}
      {!found && <NotFound />}
    </>
  );
};
export default Users;
