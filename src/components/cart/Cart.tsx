// import styles from './Cart.module.css'
// ! забираем данные из контекста

import { useCart } from "../../context/CartContext"
import MyButton from "../myButton/MyButton"
import styles from "./Cart.module.css"

 

export default function Cart() {
    // ! забираем данные из контекста

   const {cart, removeFromCart, clearCart } = useCart() 

   const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
   }

  return (
   <div className={styles.cartContainer}>
      <h1>Cart 🛒</h1>
      {cart.length === 0 ? <p>Your cart is empty...</p> : (
        <>
          {cart.map(el => (
            <div className={styles.cartItem} key={el.id}>
              <span>{el.title}</span>
              <div>
                <span className={styles.totalPrice}>  {(el.price * el.quantity).toFixed(2)}€  </span>
                <span>x{el.quantity} </span>
                <button onClick={() => removeFromCart(el.id)}>delete</button>
              </div>
            </div>
          ))}
          <div>
            <h3>Total price: {getTotalPrice()}€</h3>
            <MyButton variant="danger" func={clearCart} text="clear cart"/>
          </div>
        </>
      )}
    </div>
  )
}