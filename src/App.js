import Typeahead from "./Components/Typeahead";
import styles from "./App.module.css";
import logo from "./assets/svg logo.svg";
function App() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="github logo" className={styles.logo} />
      <div>
        <Typeahead />
      </div>
    </div>
  );
}

export default App;
