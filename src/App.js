import { useState } from "react";
import Typeahead from "./Components/Typeahead/Typeahead";
import Card from "./Components/Card/Card";
import GithubLogo from "./Components/GithubLogo/GithubLogo";

function App() {
  const [logoVisibility, setLogoVisibility] = useState(false);

  return (
    <Card>
      <GithubLogo logoVisibility={logoVisibility} />
      <Typeahead setLogoVisibility={setLogoVisibility} />
    </Card>
  );
}

export default App;
