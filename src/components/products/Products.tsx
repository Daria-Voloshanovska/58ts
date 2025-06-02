import styles from "./Products.module.css";
import { useEffect, type JSX } from "react";
import ProductCard from "./productCard/ProductCard";
import Loader from "../loader/Loader";
// import { useProductContext } from "./ProfuctContext";
// import * as Yup from "yup";
// import { Formik } from "formik";
import { loadLimitProducts, loadProducts } from "../../features/productAction";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import MyButton from "../myButton/MyButton";

export default function Products(): JSX.Element {
  // ! данные, которые получаем из redux
  // * данные доступны в любом месте приложения
  const {products,isLoading,error} = useAppSelector(store =>store.products)

  // const { products, limit, setLimit, loading, fetchProducts } =
  //   useProductContext();

  // готовим функцию для отправки данных
    const dispatch = useAppDispatch()

  useEffect(() => {
    //! передаем в dispatch вызов нужного action
    dispatch(loadProducts())
  }, [dispatch]);

  const handleLoadLimited = (count: number) => {
    dispatch(loadLimitProducts(count));
  }

  // const validationSchema = Yup.object({
  //   limit: Yup.number()
  //     .min(1, "Minimum 1 product")
  //     .max(20, "Maximum 20 products")
  //     .required("Required"),
  // });

  // const initialState = {
  //   limit: limit,
  // };

  // const handleSubmit = (values: { limit: number }) => {
  //   setLimit(values.limit);
  //   fetchProducts(values.limit);
  // };

  return (
    <div className={styles.ProductPage}>
      <h2 className={styles.title}>Products</h2>
      <div className={styles.formContainer}>
        <MyButton 
        text=" Download 5 products" 
        func={() => handleLoadLimited(5)}
        variant="primary"
        className={styles.customBtn}
        /> 
         <MyButton  
         text=" Download 10 products"  
         func={() => handleLoadLimited(10)}
         variant="success"
         className={styles.customBtn}
         /> 

        {/* <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, handleChange, values }) => (
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.label}>
                Quantity of items (1-20):
                <input
                  name="limit"
                  type="number"
                  min="1"
                  max="20"
                  value={values.limit}
                  onChange={handleChange}
                  className={styles.input}
                />
              </label>
            </form>
          )}
        </Formik> */}
      </div>
{/* 
      {loading ? (
        <Loader />
      ) : ( */}
        <div className={styles.shopContainer}>
          {isLoading ? <Loader/> : (
            <> 
             {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              />
          ))}
        </>
        )}
        </div>
        {error && <p>Error:{error} ⚠️</p>}
      {/* )} */}
    </div>
  );
}
