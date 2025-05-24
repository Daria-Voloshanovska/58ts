import styles from "./Products.module.css";
import { useEffect, useState } from "react";

import type { JSX } from "react";
import type { IProduct } from "./types";
import ProductCard from "../productCard/ProductCard";
import Loader from "../loader/Loader";

export default function Products(): JSX.Element {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [limit, setLimit] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(false);

  const getProducts = async (amount: number) => {
    setLoading(true);
    const res = await fetch(
      `https://fakestoreapi.com/products?limit=${amount}`
    );
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts(limit);
  }, [limit]);

  return (
    <div className={styles.ProductPage}>
      <h2 className={styles.title}></h2>
      <div className={styles.formContainer}>
        <label className={styles.label}>
          Quantity of items (1-20):
          <input
            type="number"
            min="1"
            max="20"
            value={limit}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 1 && value <= 20) {
                setLimit(value);
              }
            }}
            className={styles.input}
          />
        </label>
        {loading ? (
          <Loader />
        ) : (
          <div className={styles.shopContainer}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
