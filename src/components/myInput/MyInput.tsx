import type { JSX } from "react";
// import cn from 'classnames'
import styles from "./MyInput.module.css"
import type { FormikProps } from "formik";

interface IMyInputProps {
    name: string
    type:  "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    placeholder: string
    label: string
    // onChange?: () => void
    formik: FormikProps<any>
}

// function MyInput({name, type, placeholder,label}:IMyInputProps): JSX.Element {

export default function MyInput({formik, label, name, placeholder, type }: IMyInputProps): JSX.Element {
    
    return (
        <div>
      <div>
        <label>{label}</label>
      </div>
      <input value={formik.values[name]} onChange={formik.handleChange} name={name} placeholder={placeholder} type={type} />
    </div>
    //     <label className={cn(styles.label)}>
    //         {label}
    //    <input className={cn(styles.input)} name={name} type={type} placeholder={placeholder} onChange={onChange}/>
    //   </label>
      
    )
}
// export default MyInput;