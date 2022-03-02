import React from "react";
import { useState, useCallback } from "react";
import GithubLogo from "../GithubLogo/GithubLogo";
import InputField from "../InputField/InputField";
import closeSVG from "../../assets/close_svg.svg";
import spinner from "../../assets/spinner.svg";
import styles from "./Typeahead.module.css";
import Users from "../Users/Users";

const Typeahead = (props) => {
  const [logoVisibility, setLogoVisibility] = useState(false);
  const [input, setInput] = useState("");
  const [usersList, setUsersList] = useState(true);
  const [loading, setLoading] = useState(false);
  const [found, setFound] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const clickHandler = useCallback(() => {
    setInput("");
    document.querySelector("input").focus();
    setLogoVisibility(true);
    setUsersList(true);
  }, []);

  return (
    <div>
      <GithubLogo logoVisibility={logoVisibility} />
      <form onSubmit={submitHandler}>
        <div className={styles.container}>
          <div className={styles.search}>
            <label id="label" className={styles.label}>
              Search a Github User
            </label>
            <InputField
              setlogoVisibility={setLogoVisibility}
              setUsersList={setUsersList}
              setInput={setInput}
              input={input}
              setLoading={setLoading}
              found={found}
            />
            {input !== "" && (
              <div className={styles["img__container"]}>
                <img
                  id="close__svg"
                  onClick={clickHandler}
                  src={closeSVG}
                  className={styles["close__svg"]}
                  alt="close icon"
                  draggable="false"
                />
              </div>
            )}
          </div>
        </div>
        <Users
          user={input}
          usersListVisibility={usersList}
          setLoading={setLoading}
          loading={loading}
          found={found}
          setFound={setFound}
        />
        {loading && input !== "" && (
          <div className={styles.spinner}>
            <img src={spinner} alt="spinner" />
          </div>
        )}
      </form>
    </div>
  );
};

export default React.memo(Typeahead);
