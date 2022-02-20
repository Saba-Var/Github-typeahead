import styles from "./Overlay.module.css";
const Overlay = (props) => {
  const overlayClickHandler = () => {
    props.setUsersList(false);
  };
  return <div className={styles.overlay} onClick={overlayClickHandler}></div>;
};

export default Overlay;
