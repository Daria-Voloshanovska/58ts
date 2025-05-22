import { useFormik } from 'formik';
import * as Yup from 'yup';
import MyButton from '../../components/myButton/MyButton';
import styles from './Lesson13.module.css'


interface IFormData {
    model: string;
    creator: string;
    email: string;
}
// описание проверок по ключам в объекте schema
const schema = Yup.object().shape({
    // *проверка модели на соответствие числу
    // model: Yup
    // .number()
    // .typeError('model is a number')
    // .required('model is required')
    // .integer('model is integer')
    // .min(10, 'model number is more than 10')
    // .max(10000, 'model number is less than than 10000'),
    // * проверка модели на соответствие регулярному выражению
    model: Yup
    .string()
    .required('model is required')
    .matches(/^T\d{4}$/, 'model must be in format by 4 digits'),
    creator: Yup
    .string()
    .required('model is a string'),
    email: Yup
    .string()
    .required('email is required')
    .email('incorrect email format')
    .max(50, 'less than 50 symbols')
});
export default function Lesson13() {

    const formik = useFormik({
        initialValues: {
            model: '',
            creator: '',
            email: ''

        } as IFormData,
        // подключаем схему валидации
    validationSchema: schema,
    // отключаем валидацию на изменение
    // ошибки появятся  после нажатия на кнопку
    validateOnChange: false,
        onSubmit: (values:IFormData) => {
            console.log(values);
            
            
        }
    })
  return (
    <div>
      <h1>Lesson 13: Yup 🤖</h1>
      <form onSubmit={formik.handleSubmit} className={styles.robotForm}>
        <input value={formik.values.model} name='model' onChange={formik.handleChange} type="text" placeholder='robot model' />
        <input value={formik.values.creator} name='creator' onChange={formik.handleChange}  type="text" placeholder='creator name'/>
        <input value={formik.values.email} name='email' onChange={formik.handleChange}  type="text" placeholder='company email' />
        <MyButton text='send'/>
      </form>
       <span className={styles.errorMessage}>{formik.errors.model}</span>
      <span className={styles.errorMessage}>{formik.errors.creator}</span>
      <span className={styles.errorMessage}>{formik.errors.email}</span>
    </div>
  )
}
