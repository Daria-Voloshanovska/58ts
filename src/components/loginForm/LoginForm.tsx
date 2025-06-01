import { Formik } from "formik";
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput"
import styles from "./LoginForm.module.css"
import cn from 'classnames'

function LoginForm() {
    const initialValues = {
        login: "",
        email: "",
        password: "",
    };

    const handleSubmit = (values: typeof initialValues) => {
        console.log(values);
        
    }
    return (
<Formik initialValues={initialValues} onSubmit={handleSubmit}>
    {(formik) =>(
        <form onSubmit={formik.handleSubmit}>
            <div className={cn(styles.container)}>
            <MyInput
            formik={formik}
            name="login" 
            type="text" 
            placeholder="Login"
            label="login: "
            />
            <MyInput
            formik={formik}
            name="email" 
            type="email" 
            placeholder="Email"
            label="Email: "
            />
            <MyInput
            formik={formik}
            name="password" 
            type="password" 
            placeholder="Password"
            label="password: "
            />
            <MyButton text="Enter" type="submit" />
            </div>
        </form>
    )}
</Formik>
    );
}
export default LoginForm;