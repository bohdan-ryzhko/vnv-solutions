import sass from "./InputField.module.scss";
import { FC } from "react";
import { ContactsValues } from "../../d";
import { FormikProps } from "formik";

type InputFieldProps = {
  formik: FormikProps<ContactsValues>;
  name: keyof ContactsValues;
}

export const InputField: FC<InputFieldProps> = ({ formik, name }) => {
  return (
    <>
      <label className={sass.label} htmlFor={name}>
        {name}
        <input
          className={sass.input}
          id={name}
          name={name}
          type="text"
          onChange={formik.handleChange}
          value={formik.values[name]}
        />
      </label>
    </>
  );
}
