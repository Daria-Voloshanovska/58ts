import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { getTotalPrice } from "../components/cart/Cart";
import { useCart } from "../context/CartContext";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { loginToken } from "../features/auth/authAction";
import { logoutUser } from "../features/auth/authSlice";
import Loader from "../components/loader/Loader";

const navLinks = [
  { to: "/", title: "Home" },
  { to: "products", title: "Products" },
  { to: "store", title: "Store" },
  { to: "cart", title: "Cart" },
  // { to: "login", title: "Login" },
];

export default function Layout() {
  const dispatch = useAppDispatch();

  // ! получаем данные из redux
  const { user } = useAppSelector((store) => store.user);
  console.log(user);

  const { cart } = useCart();
  const totalPrice = getTotalPrice(cart);

  // ! logout обработчик
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
  };

  // ! проверка токена и загрузка данных по юзеру
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    if (token) {
      dispatch(loginToken(token));
    }
  }, [dispatch]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.leftSection}>
          {navLinks.map((el, index) => (
            <NavLink
              key={index}
              className={({ isActive }) => (isActive ? styles.isActive : "")}
              to={el.to}
            >
              {el.title}
            </NavLink>
          ))}
        </div>

        <div className={styles.rightSection}>
          <NavLink
            to="cart"
            className={({ isActive }) =>
              isActive ? styles.isActive : styles.navLink
            }
          >
            Cart: {totalPrice}€
          </NavLink>

          {user.id ? (
            <div className={styles.userInfo}>
              <span className={styles.userName}>Hello, {user.firstName}</span>

              {/* запускаем функцию handleLogout + проходим переадресацию на login */}
              <NavLink
                to={"login"}
                onClick={handleLogout}
                className={({ isActive }) =>
                  isActive ? styles.isActive : styles.navLink
                }
              >
                Logout
              </NavLink>
            </div>
          ) : (
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.isActive : styles.navLink
              }
              to={"login"}
            >
              Login
            </NavLink>
          )}
        </div>
      </header>

      <main className={styles.main}>
        {/* сюда за место Outlet будут приходить переключаемые компоненты из навигации */}
        <Outlet />
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
}
