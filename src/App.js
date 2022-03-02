import { useEffect, useState, useLayoutEffect } from "react";
import GithubLogo from "./Components/GithubLogo/GithubLogo";
import Typeahead from "./Components/Typeahead/Typeahead";
import Cursor from "./Components/Cursor/Cursor";
import Card from "./Components/Card/Card";

function App() {
  const [logoVisibility, setLogoVisibility] = useState(false);
  const [innerWidth, setInnerWidth] = useState([0]);

  useLayoutEffect(() => {
    function updateSize() {
      setInnerWidth([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  useEffect(() => {
    if (innerWidth[0] < 800) {
      document.getElementById("input").style.cursor = "text";
      document.querySelector("html").style.cursor = "default";
    } else {
      document.getElementById("input").style.cursor = "none";
      document.querySelector("html").style.cursor = "none";
    }
  }, [innerWidth]);

  return (
    <Card>
      <GithubLogo logoVisibility={logoVisibility} />
      <Typeahead setLogoVisibility={setLogoVisibility} />
      {window.innerWidth > 800 && <Cursor />}
    </Card>
  );
}

export default App;
