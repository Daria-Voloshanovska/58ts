import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput"
import styles from "./LoginForm.module.css"
import cn from 'classnames'

function LoginForm() {
    return (
<>
<div className={cn(styles.container)}>
    <MyInput name="login" type="text" placeholder="Login" label="login: " />
      <MyInput name="email" type="email" placeholder="Email" label="Email: " />
      <MyInput name="password" type="password" placeholder="Password" label="password: " />
      <MyButton text="Enter" type="submit" />
</div>
</>
    );
}
export default LoginForm;