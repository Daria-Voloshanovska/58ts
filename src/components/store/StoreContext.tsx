import { createContext, useContext, useEffect, useState } from "react";
import type { IProduct } from "./types";

interface IStoreContextType {
  products: IProduct[];
  loading: boolean;
  error: string | null;
  limit: number;
  setLimit: (limit: number) => void;
  fetchProducts: (limit?: number) => void;
}

const StoreContext = createContext<IStoreContextType | undefined>(undefined);

export function useStoreContext() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStoreContext must be used within a StoreProvider");
  }
  return context;
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState<number>(10);

  const fetchProducts = async (limitValue: number = 10) => {
    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/products?limit=${limitValue}`);
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setProducts(data.products);
      setError(null);
    } catch (err) {
      setError("Failed to fetch products");
      console.error(err);
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
    error,
    limit,
    setLimit,
    fetchProducts,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}