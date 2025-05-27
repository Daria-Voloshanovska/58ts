import { Link } from 'react-router-dom';
import type { IProduct } from '../types';
import styles from './StoreCard.module.css'
import type { JSX } from 'react';
import MyButton from '../../myButton/MyButton';
import { useCart } from '../../../context/CartContext';

interface IStoreCardProps {
    product:IProduct;
  
}


export default function StoreCard({product}:IStoreCardProps):JSX.Element {
 
  const {addToCart} = useCart()
  return (
<div className={styles.card}>
   
     <img src={product.thumbnail} alt={product.title} className={styles.image} />
    <div className={styles.info}>
      <h3 className={styles.title}>
            {product.title.length < 30 ? product.title : product.title.slice(0, 30) + '...'}</h3>

          <p className={styles.price}>€{product.price}</p>
          <p className={styles.description}>
            {product.description.length < 100
              ? product.description
              : product.description.slice(0, 100) + '...'}
          </p>
        </div>
        <article>
           <Link to={`/products/${product.id}`} className={styles.link}><MyButton text='to product'/></Link>
           <MyButton func={() => addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
           })} variant="success" text='add to cart'/>
        </article>
      </div>
  );
}