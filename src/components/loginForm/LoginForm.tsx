import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput"
import './LoginForm.css'

function LoginForm() {
    return (
<>
<div className="container">
    <MyInput/>
    <MyButton text ="Enter" type="submit"/>
    <MyInput name="login" type="text" placeholder="Login" label="login: " />
      <MyInput name="email" type="email" placeholder="Email" label="Email: " />
      <MyInput name="password" type="password" placeholder="Password" label="password: " />
      <MyButton text="Enter" type="submit" />
</div>
</>
    );
}
export default LoginForm;