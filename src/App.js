import { useEffect, useState, useLayoutEffect } from "react";
import Typeahead from "./Components/Typeahead/Typeahead";
import Card from "./Components/Card/Card";
import GithubLogo from "./Components/GithubLogo/GithubLogo";
import Cursor from "./Components/Cursor/Cursor";

function App() {
  const [logoVisibility, setLogoVisibility] = useState(false);
  const [size, setSize] = useState([0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (size[0] < 800) {
      document.getElementById("input").style.cursor = "text";
      document.querySelector("html").style.cursor = "default";
    } else {
      document.getElementById("input").style.cursor = "none";
      document.querySelector("html").style.cursor = "none";
    }
  }, [size]);

  return (
    <Card>
      <GithubLogo logoVisibility={logoVisibility} />
      <Typeahead setLogoVisibility={setLogoVisibility} windowWidth={size[0]} />
      {window.innerWidth > 800 && <Cursor />}
    </Card>
  );
}

export default App;
