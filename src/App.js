import { useEffect, useState, useLayoutEffect } from "react";
import Typeahead from "./Components/Typeahead/Typeahead";
import Cursor from "./Components/Cursor/Cursor";
import Card from "./Components/Card/Card";

function App() {
  const [innerWidth, setInnerWidth] = useState([0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setInnerWidth([window.innerWidth]);
    };
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
      <Typeahead />
      {window.innerWidth > 800 && <Cursor />}
    </Card>
  );
}

export default App;
