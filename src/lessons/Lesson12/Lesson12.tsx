import { useFormik } from "formik"
import MyButton from "../../components/myButton/MyButton"
import styles from "./Lesson12.module.css"

interface IFormValues {
    firstname: string,
    lastname: string,
    email: string
}


export default function Lesson12() {

    // * обьект с настройками формы
    const formik = useFormik({
        // начальные значение для input 
        initialValues:{
            firstname: 'john',
            lastname: 'doe',
            email: 'noreple@john.doe'
        } as IFormValues,
        // функция, которая сработает при отправке формы
        onSubmit: (values: IFormValues) => {
            console.log(values);
            
        }
    })



  return (
    <div>
      <h1>Lesson12: Formik 💁‍♂️</h1>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input onChange={formik.handleChange} name="firstname" type="text" placeholder="firstname" value={formik.values.firstname}/>
        <input onChange={formik.handleChange} name="lastname" type="text" placeholder="lastname" value={formik.values.lastname}/>
        <input onChange={formik.handleChange} name="email" type="text" placeholder="email" value={formik.values.email}/>
        <MyButton type="submit" text="send data"/>
      </form>
      <h2>Что нужно не забыть, чтобы форма заработала:</h2>
      <ul className={styles.ul}>
        <li>Установить formik через 'npm i formik' </li>
        <li>Создать типы под будущие значение input</li>
        <li>Создать обьект formik с помощью функции useFormik с настройками </li>
        <li>В initialValues начальные значения формы</li>
        <li>В onSubmit описываем действие по отправке формы </li>
        <li>Для form добавили в onSubmit - formik.handleSubmit</li>
        <li>Для input добавили в onChange - formik.handleChange</li>
        <li>Для input в value добавили его значение из formik.values</li>
        <li>У input в поле name должно быть то же значение, что и у соответствующего ключа в initialValues ⚠️ </li>
      </ul>
    </div>
  )
}
