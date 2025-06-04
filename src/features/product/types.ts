import type { IProduct } from "../../components/products/types";


export interface IProductState {
 products: IProduct[],
  isLoading: boolean,
  error: string,
  
}