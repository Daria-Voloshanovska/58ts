import type { JSX } from "react";

import type { FormikProps } from "formik";

interface IMyInputProps {
    name: string
    type:  "email" |"number" | "password" |"text";
    placeholder: string
    label: string
  
    formik: FormikProps<any>
}

export default function MyInput({formik, label, name, placeholder, type }: IMyInputProps): JSX.Element {
    
   const { errors } = formik;

    return (
        <div>
      <div>
         {errors[name] ? <label style={{color: 'red'}}>{errors[name] as string}</label> : label}
      </div>
      
      <input value={formik.values[name]} onChange={formik.handleChange} name={name} placeholder={placeholder} type={type} />
    </div>
   
    )
}
