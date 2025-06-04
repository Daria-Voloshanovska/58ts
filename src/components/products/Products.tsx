import styles from "./Products.module.css";
import { useEffect, type JSX } from "react";
import ProductCard from "./productCard/ProductCard";
import Loader from "../loader/Loader";
// import { useProductContext } from "./ProfuctContext";
import * as Yup from "yup";
import { loadLimitProducts,loadProducts} from "../../features/product/productAction";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import MyButton from "../myButton/MyButton";
import { Formik, useFormik } from "formik";
import MyInput from "../myInput/MyInput";



export default function Products(): JSX.Element {
  // ! данные, которые получаем из redux
  // * данные доступны в любом месте приложения
  const { products, isLoading, error } = useAppSelector(
    (store) => store.products);

  // const { products, limit, setLimit, loading, fetchProducts } =
  //   useProductContext();

  // готовим функцию для отправки данных
  const dispatch = useAppDispatch();

const formik = useFormik({
  initialValues: {
    limit: '',
  } as { limit: string },
  validateOnChange: false,
  onSubmit: (values, { resetForm }) => {
      // лимитированный запрос в redux
    console.log(values);
    resetForm();
  }
});

 useEffect(() => {
    //! передаем в dispatch вызов нужного action
    dispatch(loadProducts());
  }, [dispatch]);

  return (

   <div className={styles.ProductPage}>
      <h2 className={styles.title}>Products</h2>

     {isLoading ? (
          <Loader />
        ) : (
         <>
         <div className={styles.formContainer}>
          <form onSubmit={formik.handleSubmit} className={styles.form}>
              <MyInput
                name="limit"
                label="🤔 What is your limit? 🛍️"
                placeholder="limit of products"
                type="text"
                formik={formik}/>
         <MyButton variant="danger"  type="submit" text="load limit products" />
   
     </form>
         </div>
        
            <div className={styles.shopContainer}>
              {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image} />
               ))}  
               </div>
               </>
          )}
 {error && <p>Error:{error} ⚠️</p>}
 </div>
       );
}

     
      
      