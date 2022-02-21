import Typeahead from "./Components/Typeahead/Typeahead";
import styles from "./App.module.css";
import logo from "./assets/svg logo.svg";
import { useState } from "react";

function App() {
  const [logoVisibility, setLogoVisibility] = useState(false);

  return (
    <div className={styles.container}>
      <img
        src={logo}
        alt="github logo"
        className={`${styles.logo} ${
          logoVisibility && styles["increase__opacity"]
        } ${!logoVisibility && styles["decrease__opacity"]}`}
      />
      <div>
        <Typeahead setLogoVisibility={setLogoVisibility} />
      </div>
    </div>
  );
}

export default App;
