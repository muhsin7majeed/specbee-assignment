import React, { useRef } from "react";
import PurchaseReceiptHeader from "./PurchaseReceiptHeader";

import styles from "./styles.module.css";
import SupplierForm from "./SupplierForm";

const PurchaseReciept = () => {
  const receiptFormRef = useRef();

  function handleBtnClick() {
    if (receiptFormRef.current) {
      receiptFormRef.current.handleSubmit();
    }
  }

  function handleSubmit(values) {
    console.log(values);
  }

  const initialValues = {
    supplierName: "",
    supplierAddress: "",
    unit: "",
    quoteNumber: "",
    transactDate: "",
    priceListTemplate: "",
  };

  return (
    <>
      <PurchaseReceiptHeader handleBtnClick={handleBtnClick} />

      <div className={styles.wrapper}>
        <h1 className={styles.title}>Supplier Details</h1>

        <SupplierForm initialValues={initialValues} handleSubmit={handleSubmit} formRef={receiptFormRef} />
      </div>
    </>
  );
};

export default PurchaseReciept;
