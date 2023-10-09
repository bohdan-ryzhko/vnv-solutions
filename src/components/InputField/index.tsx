import sass from "./InputField.module.scss";
import { FC } from "react";
import { ContactsValues } from "../../d";
import { FormikProps } from "formik";

type InputFieldProps = {
  formik: FormikProps<ContactsValues>;
  name: keyof ContactsValues;
}

export const InputField: FC<InputFieldProps> = ({ formik, name }) => {
  const isError = formik.touched[name] && formik.errors[name];
  return (
    <>
      <label className={isError ? sass.labelError : sass.label} htmlFor={name}>
        {name}
        <input
          className={isError ? sass.inputError : sass.input}
          id={name}
          name={name}
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[name]}
        />
        {
          isError && <p className={sass.errorText}>{formik.errors[name]}</p>
        }
      </label>
    </>
  );
}
