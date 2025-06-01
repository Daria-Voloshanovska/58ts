import { createContext, useContext, useEffect, useState } from "react";
import type { IProduct } from "./types";



interface IProductContextType {
products: IProduct[];
limit: number;
loading: boolean;
setLimit: (limit: number) => void;
 fetchProducts: (limit?: number) => void;
}

const ProductContext = createContext<IProductContextType | undefined>(undefined);

export const useProductContext = () : IProductContextType => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error ('useProductContext must be used within a ProductProvider')
    }
    return context;
}

export const ProductProvider = ({children} : {children:React.ReactNode}) => {
    const [products, setProducts] = useState<IProduct[]>([]);
const [limit, setLimit] = useState<number>(10);
const [loading,setLoading] = useState<boolean>(false);


const fetchProducts = async (amount: number = 10) => {
    try {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products?limit=${amount}`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(limit);
  }, [limit]);

  const value = {
    products,
    loading,
    limit,
    setLimit,
    fetchProducts,
  };
// const getProducts = async (amount: number) => {
//     setLoading(true);
//     const res = await fetch(`https://fakestoreapi.com/products?limit=${amount}`);
//     const data = await res.json();
//     setProducts(data);
//     setLoading(false);
// };
// useEffect(() =>{
//     getProducts(limit);
// },[limit]);

return (
    <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
);
}