import styles from "./Typeahead.module.css";
import Users from "./Users/Users";

const Typeahead = (props) => {
  return (
    <div className={styles.search}>
      <div className={styles.input}>
        <input type="text" placeholder="username" />
        <Users data={props.data} />
      </div>
    </div>
  );
};

export default Typeahead;
