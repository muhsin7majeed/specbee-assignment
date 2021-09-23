import React from "react";

import styles from "./Navbar.module.css";

import arrowDown from "_assets/icons/arrow_down.svg";
import avatar from "_assets/avatar.jpg";

const Profile = () => {
  return (
    <div className={styles.profile_wrapper}>
      <div>
        <span className={styles.user_name}>Shawn Brooks</span>

        <span className={styles.profile_status}>
          <span>Active</span>
          <img src={arrowDown} alt="arrow down" />
        </span>
      </div>

      <img className={styles.profile_image} src={avatar} alt="arrow down" />
    </div>
  );
};

export default Profile;
