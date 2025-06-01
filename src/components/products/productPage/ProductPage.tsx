import styles from "./ProductPage.module.css";
import { useEffect, useState, type JSX } from "react";
import { Link, useParams } from "react-router-dom";
import type { IProduct } from "../types";
import Loader from "../../loader/Loader";

const initialState: IProduct = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
};

export default function ProductPage(): JSX.Element {
  // получаем id из адресной строки
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://fakestoreapi.com/products/" + id);
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }
  return (
    <div className={styles.main}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <h2>{product.title}</h2>
          <div className={styles.imageDescBox}>
            <img src={product.image} alt={String(product.id)} />{" "}
            <div>
              <h3>Price: {product.price}€</h3>
              <h3>Rating: {product.rating.rate}</h3>
              <p>{product.description}</p>
            </div>
          </div>
          <Link to="/lesson-14" className={styles.backlink}>
            Back to products
          </Link>
        </div>
      )}
    </div>
  );
}
