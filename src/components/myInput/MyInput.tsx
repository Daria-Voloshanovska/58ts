import type { JSX } from "react";
import cn from 'classnames'
import styles from "./MyInput.module.css"

interface IMyInputProps {
    name?: string
    type?:  "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    placeholder?: string
    label?: string
    onChange?: () => void
}

function MyInput({name, type, placeholder,label, onChange}:IMyInputProps): JSX.Element {

    return (
        <label className={cn(styles.label)}>
            {label}
       <input className={cn(styles.input)} name={name} type={type} placeholder={placeholder} onChange={onChange}/>
      </label>
      
    )
}
export default MyInput;