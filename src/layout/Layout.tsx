import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { getTotalPrice } from "../components/cart/Cart";
import { useCart } from "../context/CartContext";

const navLinks = [
  { to: "/", title: "Home" },
  { to: "products", title: "Products" },
  { to: "store", title: "Store" },
  { to: "cart", title: "Cart" },
];

export default function Layout() {
  const { cart } = useCart();

  return (
    <>
      <header className={styles.header}>
        {navLinks.map((el) => (
          <NavLink
            key={el.to}
            className={({ isActive }) => (isActive ? styles.isActive : "")}
            to={el.to}
          >
            {el.title}
          </NavLink>
        ))}
        <h3>{getTotalPrice(cart)}€</h3>
      </header>
      <main className={styles.main}>
        {/* сюда за место Outlet будут призодить переключаемые компоненты из навигации */}
        <Outlet />
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
}
