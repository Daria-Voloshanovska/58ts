import type { JSX } from "react";
import type { IProduct } from "../../components/store/types";
import styles from "./Cart.module.css";


interface CartProps {
  cart: IProduct[];
}

export default function Cart({cart}: CartProps): JSX.Element {
  const total = cart.reduce((sum, product) => sum + product.price, 0);
  
  return (
      <div className={styles.cartIconContainer}>
      
      <span className={styles.cartIcon}>
        🛒
        {cart.length > 0 && (
          <span className={styles.cartCount}>{cart.length}</span>
        )}
      </span>

      <div className={styles.compactCart}>
        {cart.length === 0 ? (
          <p>The cart is empty</p>
        ) : (
          <>
            <ul className={styles.compactList}>
              {cart.map(({ title, price }, index) => (
                <li key={index}>
                  <span className={styles.productTitle}>{title}</span>
                  <span className={styles.productPrice}>€{price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className={styles.compactTotal}>
              Total: €{total.toFixed(2)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}