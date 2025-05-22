import { useFormik } from "formik";
import styles from "./FormGender.module.css";
import MyButton from "../myButton/MyButton";
import type { JSX } from "react";

interface IGenderData {
  name: string;
  gender: string;
  probability: number;
}

export default function FormGender():JSX.Element {
  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "",
      probability: 0,
    } as IGenderData,
    onSubmit: async (values) => {
      const res = await fetch(`https://api.genderize.io/?name=${values.name}`);
      const data = await res.json();
      formik.setFieldValue("gender", data.gender);
       formik.setFieldValue("probability", data.probability);
    }
      });
  return (
    <div>
      <h1>Homework 12</h1>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input
          onChange={formik.handleChange}
          name="name"
          type="text"
          placeholder="enter name"
          value={formik.values.name}
        />
        <MyButton type="submit" text="send data" />
      </form>
      {formik.values.gender && (
        <div className={styles.result}>
          <h2>Results:</h2>
          <p>Name: {formik.values.name}</p>
          <p>Gender: {formik.values.gender}</p>
          <p>Probability: {formik.values.probability *100}%</p>
        </div>
      )}
    </div>
  );
}
