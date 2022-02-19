import Typeahead from "./Components/Typeahead";
import styles from "./App.module.css";
const DUMMIE_DATA = {
  login: "Saba-Var",
  id: 96234653,
  node_id: "U_kgDOBbxsnQ",
  avatar_url: "https://avatars.githubusercontent.com/u/96234653?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Saba-Var",
  html_url: "https://github.com/Saba-Var",
  followers_url: "https://api.github.com/users/Saba-Var/followers",
  following_url: "https://api.github.com/users/Saba-Var/following{/other_user}",
  gists_url: "https://api.github.com/users/Saba-Var/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Saba-Var/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Saba-Var/subscriptions",
  organizations_url: "https://api.github.com/users/Saba-Var/orgs",
  repos_url: "https://api.github.com/users/Saba-Var/repos",
  events_url: "https://api.github.com/users/Saba-Var/events{/privacy}",
  received_events_url: "https://api.github.com/users/Saba-Var/received_events",
  type: "User",
  site_admin: false,
  name: "Saba Vartasashvili",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 7,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2021-12-16T09:50:18Z",
  updated_at: "2022-01-20T18:16:10Z",
};

function App() {
  return (
    <div className={styles.container}>
      <Typeahead data={DUMMIE_DATA} />
    </div>
  );
}

export default App;
