import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css'
import type { JSX } from 'react';
import MyButton from '../myButton/MyButton';
import { useCart } from '../../context/CartContext';

export interface IProductCardProps {
  id: number,
  title: string,
  price: number,
  image: string,
 
}
export default function ProductCard({id, title, price,image}:IProductCardProps):JSX.Element {
  // ! забираем данные из контекста
  const {addToCart} = useCart()


  return (
   
    <div className={styles.shopContainerCard}>
      <h4>{title.length <20 ? title : title.slice(0,20) + '...'}</h4>
      <p>Price: {price}€</p>
      <div>
        <img src={image}alt="product-img"/>
      </div>
      <article>
         <Link to={String(id)}><MyButton text='to product'/></Link>
      
      <MyButton func={() => addToCart({id, title, price, quantity: 1})} variant="success" text='add to cart'/>
      </article>
    </div>
   
  )
}