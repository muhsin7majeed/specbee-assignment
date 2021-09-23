import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./styles.module.css";

import { priceListTemplates, supplierAddresses, units } from "_helpers/constants";
import { receiptSchema } from "_helpers/validators/receipt";

import Select from "_components/Select";
import DatePicker from "_components/DatePicker";

const SupplierForm = ({ initialValues, handleSubmit, formRef }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={receiptSchema} onSubmit={handleSubmit} innerRef={formRef}>
      {({ setFieldValue, values }) => (
        <Form className={styles.form_wrapper}>
          <div className={styles.left}>
            <div className={styles.form_group}>
              <Field name="supplierName" placeholder="Supplier Name *" />
              <ErrorMessage component="span" className="invalid-feedback" name="supplierName" />
            </div>

            <div className={styles.form_group}>
              <Field name="quoteNumber" placeholder="Quote Number *" />
            </div>

            <div className={styles.form_group}>
              <DatePicker
                placeholder="Transaction Date *"
                name="transactDate"
                value={values.transactDate}
                onChange={setFieldValue}
              />
              <ErrorMessage component="span" className="invalid-feedback" name="transactDate" />
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.form_group}>
              <Select
                className={styles.custom_input}
                isMulti
                placeholder="Unit/Warehouse *"
                value={values.unit}
                setFieldValue={setFieldValue}
                field="unit"
                options={units}
              />

              <ErrorMessage component="span" className="invalid-feedback" name="unit" />
            </div>

            <div className={styles.form_group}>
              <Select
                className={styles.custom_input}
                placeholder="Supplier Addreess *"
                value={values.supplierAddress}
                setFieldValue={setFieldValue}
                field="supplierAddress"
                options={supplierAddresses}
              />

              <ErrorMessage component="span" className="invalid-feedback" name="supplierAddress" />
            </div>

            <div className={styles.form_group}>
              <Select
                className={styles.custom_input}
                placeholder="Price List Template"
                value={values.priceListTemplate}
                setFieldValue={setFieldValue}
                field="priceListTemplate"
                options={priceListTemplates}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SupplierForm;
