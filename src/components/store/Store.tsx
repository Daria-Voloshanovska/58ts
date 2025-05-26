import styles from "./Store.module.css";
import { useEffect, useState, type JSX } from "react";
import Loader from "../loader/Loader";
import type { IProduct } from "./types";
import StoreCard from "./storeCard/StoreCard";
import * as Yup from "yup";
import { Formik } from "formik";



export default function Store(): JSX.Element {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const initialState = {
    limit: 10,
  };
  const validationSchema = Yup.object({
    limit: Yup.number()
      .min(1, "Minimum 1 product")
      .max(30, "Maximum 30 products")
      .required("Required"),
  });

   

  const fetchProducts = async (limit: number = 10) => {
    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setProducts(data.products);
      setError(null);
    } catch (err) {
      setError("Failed to fetch products");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = (values: { limit: number }) => {
    fetchProducts(values.limit);
  };


  return (
    <div>
      <div className={styles.storeWrapper}>
      <div className={styles.storeContainer}>
        <div className={styles.formContainer}>
          <Formik
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, handleChange, values }) => (
              <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label}>Quantity of items (1-30)</label>
                <input
                  name="limit"
                  type="number"
                  min="1"
                  max="30"
                  className={styles.input}
                  value={values.limit}
                  onChange={handleChange}
                />
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
              <StoreCard key={product.id} product={product}  />
            ))}
            
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
