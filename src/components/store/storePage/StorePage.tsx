import type { JSX } from "react";
import type { IProduct } from "../types";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./StorePage.module.css";
import Loader from "../../loader/Loader";

const initialState: IProduct = {
  id: 0,
  title: "",
  description: "",
  price: 0,
  thumbnail: "",
  images: [],
  rating: 0,
  stock: 0,
  brand: "",
  category: "",
};

export default function StorePage(): JSX.Element {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
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

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }
  if (!product || product.id === 0) {
    return <p>Product not found</p>;
  }

  return (
    <div className={styles.pageContainer}>
      <h1>{product.title}</h1>
      <div className={styles.productContainer}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.mainImage}
        />
        <div className={styles.productInfo}>
          
            <h2>Product Details</h2>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>€{product.price}</p>
          <p>Rating: {product.rating}/5</p>
          <p>In stock: {product.stock}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
      </div>
      </div>
      {product.images.length > 1 && (
      <div className={styles.gallery}>
        {product.images
        .filter((image) => image !== product.thumbnail)
        .map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.title} ${index + 1}`}
            className={styles.galleryImage}
          />
        ))}
        </div>
      )}
         <Link to="/lesson-15" className={styles.backlink}>Back to products</Link>
    </div>
  );
}
