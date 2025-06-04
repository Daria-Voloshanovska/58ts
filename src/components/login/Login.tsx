import { useFormik } from 'formik';
import React, { type JSX } from 'react'
import * as Yup from 'yup';
import MyInput from '../myInput/MyInput';
import MyButton from '../myButton/MyButton';
import styles from './Login.module.css'

import { loginAction } from '../../features/auth/authAction';
import { useAppDispatch } from '../../app/hooks';


export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});

export default function Login():JSX.Element {

const  dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      username: 'sophiab',
      password: 'sophiabpass'
    } as { username: string; password: string },
    validateOnChange: false,
    // добавляем валидацию в форму
    validationSchema: loginSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(loginAction(values))
      resetForm();
    }
  });

  return (
    <div>
        <h2>Login 🔐</h2>
        <form onSubmit={formik.handleSubmit} className={styles.formStyle}>
            <MyInput name={'username'} label={'Type your username 🙋‍♀️'} placeholder={'username'} type={'text'} formik={formik}/>
           <MyInput name={'password'} label={'Type your pass 🙋‍♀️'} placeholder={'password'} type={'text'} formik={formik}/>
           <MyButton text="sign in"/> 
        </form>
    </div>
  )
}
