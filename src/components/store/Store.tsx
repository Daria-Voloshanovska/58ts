import styles from "./Store.module.css";
import Loader from "../loader/Loader";
import StoreCard from "./storeCard/StoreCard";
import * as Yup from "yup";
import { Formik } from "formik";
import { useStoreContext } from "./StoreContext";
import type { JSX } from "react";

export default function Store(): JSX.Element {
  const { products, loading, error, limit, setLimit, fetchProducts } =
    useStoreContext();

  const initialState = {
    limit: limit,
  };
  const validationSchema = Yup.object({
    limit: Yup.number()
      .min(1, "Minimum 1 product")
      .max(30, "Maximum 30 products")
      .required("Required"),
  });

  const handleSubmit = (values: { limit: number }) => {
    setLimit(values.limit);
    fetchProducts(values.limit);
  };

  return (
    <div className={styles.StorePage}>
      <h2 className={styles.title}>Store</h2>
      <div className={styles.formContainer}>
        <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, handleChange, values }) => (
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.label}>
                Quantity of items (1-30)
                <input
                  name="limit"
                  type="number"
                  min="1"
                  max="30"
                  className={styles.input}
                  value={values.limit}
                  onChange={handleChange}
                />
              </label>
            </form>
          )}
        </Formik>
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <div className={styles.error}>{error}</div>
      ) : (
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <StoreCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
