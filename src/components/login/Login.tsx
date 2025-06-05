import { useFormik } from 'formik';
import React, { type JSX } from 'react'
import * as Yup from 'yup';
import MyInput from '../myInput/MyInput';
import MyButton from '../myButton/MyButton';
import styles from './Login.module.css'

import { loginAction } from '../../features/auth/authAction';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';


export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});

export default function Login():JSX.Element {
  const {error} = useAppSelector(store => store.user)

// готовим dispatch для передачи action в redux
const  dispatch = useAppDispatch()

 // ! хук для перемещения между маршрутами
const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: 'sophiab',
      password: 'sophiabpass'
    } as { username: string; password: string },
    validateOnChange: false,
    // добавляем валидацию в форму
    validationSchema: loginSchema,

    onSubmit:  async (values, { resetForm }) => {
      
      // ! отправляем данные в redux и проверяем полученные  данные      
const user = await dispatch(loginAction(values)).unwrap();

 // ! если данные пришли перемещаемся на главную страницу
if (user) {
 navigate('/');
}
      resetForm();
    }
  });

  return (
    <div className={styles.container}>
        <h2>Login 🔐</h2>
        <form onSubmit={formik.handleSubmit} className={styles.formStyle}>
            <MyInput name={'username'} label={'Type your username 🙋‍♀️'} placeholder={'username'} type={'text'} formik={formik}/>
           <MyInput name={'password'} label={'Type your pass 🙋‍♀️'} placeholder={'password'} type={'text'} formik={formik}/>
           <MyButton text="sign in"/> 
        </form>
        {error && <span style={{color: 'red'}}>{error === 'Request failed with status code 400' ? 'Mistake in username or pass' : ''}</span>}
    </div>
  )
}
