import { useState } from "react";
import Store from "../../components/store/Store.tsx";
import Cart from "../../components/cart/Cart";
import type { IProduct } from "../../components/store/types";


export default function Lesson15() {
  const [cart, setCart] = useState<IProduct[]>([]);

   const handleAddToCart = (product: IProduct) => {
    setCart((prev) => [...prev, product]);
  };


  return (
     <div>
          <h1>Lesson 15: React_practice</h1>
            <Cart cart={cart} />
          <Store onAddToCart={handleAddToCart}/>
        </div>

  );
}
