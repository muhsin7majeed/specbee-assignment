import * as YUP from "yup";

export const receiptSchema = YUP.object().shape({
  supplierName: YUP.string().required("Supplier name is required"),
  supplierAddress: YUP.mixed().required("Supplier address is required"),
  unit: YUP.mixed().required("Unit / warehouse is required"),
  quoteNumber: YUP.string(),
  transactDate: YUP.string().required("Transaction date is required"),
  priceListTemplate: YUP.mixed(),
});
