import React from "react";

import styles from "./Navbar.module.css";

import logo from "_assets/logo.svg";
import search from "_assets/icons/search.svg";
import bell from "_assets/icons/bell.svg";

import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <img src={logo} alt="logo" />
        <h1>Livine</h1>
      </div>

      <div className={styles.right}>
        <img src={search} className={styles.icon} alt="search" />

        <div className={styles.notification_wrapper}>
          <img src={bell} className={styles.icon} alt="search" />
          <span>1</span>
        </div>

        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
