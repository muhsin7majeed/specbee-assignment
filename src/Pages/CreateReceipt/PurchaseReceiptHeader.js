import React from "react";

import styles from "./styles.module.css";

const PurchaseReceiptHeader = ({ handleBtnClick }) => {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.left}>
        <h1>Create a purchase receipt</h1>{" "}
      </div>

      <div className={styles.right}>
        <button type="button" className="btn btn-primary" onClick={handleBtnClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PurchaseReceiptHeader;
