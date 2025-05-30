import { NavLink, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

const navLinks = [
  { to: '/', title: 'Home' },
   { to: 'products', title: 'Products' },
   { to: 'cart', title: 'Cart' },
    {to: "store", title: 'Store'},

];

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        {navLinks.map(el => (
          <NavLink key={el.to} className={({ isActive }) => (isActive ? styles.isActive : '')} to={el.to}>{el.title}</NavLink>
        ))}
      </header>
      <main className={styles.main}>
{/* сюда за место Outlet будут призодить переключаемые компоненты из навигации */}
<Outlet />
      </main>
      <footer className={styles.footer}></footer>
    </>
  )
}
