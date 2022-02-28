import { useState } from "react";
import Typeahead from "./Components/Typeahead/Typeahead";
import Card from "./Components/Card/Card";
import GithubLogo from "./Components/GithubLogo/GithubLogo";
import Cursor from "./Components/Cursor/Cursor";

function App() {
  const [logoVisibility, setLogoVisibility] = useState(false);
  if (window.innerWidth > 900)
    document.querySelector("html").style.cursor = "none";
  return (
    <Card>
      <GithubLogo logoVisibility={logoVisibility} />
      <Typeahead setLogoVisibility={setLogoVisibility} />
      {window.innerWidth > 900 && <Cursor />}
    </Card>
  );
}

export default App;
