import React from "react";
import styles from "./GithubLogo.module.css";
import logo from "../../assets/svg logo.svg";

const GithubLogo = (props) => {
  return (
    <img
      src={logo}
      alt="github logo"
      className={`${styles.logo} ${
        props.logoVisibility && styles["increase__opacity"]
      } ${!props.logoVisibility && styles["decrease__opacity"]}`}
    />
  );
};
export default React.memo(GithubLogo);
