import sass from "./Form.module.scss";
import { FormikHelpers, useFormik } from "formik";
import { FC } from "react";
import { FormSelect } from "./components";
import { InputField, SubmitButton } from "../index";
import { useDispatch } from "react-redux";
import { AppDispatch, createComment } from "../../redux";
import { options } from "../../constants";
import { ContactsValues } from "../../d";
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup
    .string()
    .min(2, 'Minimum 2 characters')
    .required('Required'),
  phone: Yup
    .string()
    .matches(/^[0-9]+$/, 'Phone must contain only digits')
    .max(10, 'Maximum 10 characters')
    .required('Required'),
  email: Yup
    .string()
    .email()
    .required('Required'),
  comment: Yup
    .string(),
  option: Yup
    .string()
    .oneOf(options.map(({ value }) => value), 'Invalid option')
    .required('Required'),
});

const initialValues: ContactsValues = {
  name: "",
  phone: "",
  comment: "",
  email: "",
  option: options[0].value,
}

export const Form: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (values: ContactsValues, formikHelpers: FormikHelpers<ContactsValues>) => {
    dispatch(createComment(values));
    formikHelpers.resetForm();
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <form
      className={sass.form}
      onSubmit={formik.handleSubmit}
    >
      <div className={sass.formBody}>
        <InputField formik={formik} name="email" />
        <InputField formik={formik} name="name" />
        <InputField formik={formik} name="phone" />
        <textarea
          placeholder="Write your idea..."
          className={sass.message}
          name="comment"
          id="comment"
          onChange={formik.handleChange}
          value={formik.values.comment}></textarea>
        <FormSelect values={formik.values} />
        <SubmitButton />
      </div>
    </form>
  );
}
