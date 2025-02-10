"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().min(3, "Мінімум 3 символи").required("Обов'язкове поле"),
  email: Yup.string().email("Невірний формат email").required("Обов'язкове поле"),
  password: Yup.string().min(6, "Мінімум 6 символів").required("Обов'язкове поле"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Паролі мають співпадати")
    .required("Обов'язкове поле"),
});

export default function RegisterForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 className="text-xl font-bold mb-4">Реєстрація</h2>
          <div className="mb-3">
            <label className="block text-sm font-medium">Ім'я користувача</label>
            <Field name="username" type="text" className="w-full p-2 border rounded" />
            <ErrorMessage name="username" component="div" className="text-red-500 text-xs" />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium">Email</label>
            <Field name="email" type="email" className="w-full p-2 border rounded" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium">Пароль</label>
            <Field name="password" type="password" className="w-full p-2 border rounded" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium">Підтвердити пароль</label>
            <Field name="confirmPassword" type="password" className="w-full p-2 border rounded" />
            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs" />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded w-full"
            disabled={isSubmitting}
          >
            Зареєструватися
          </button>
        </Form>
      )}
    </Formik>
  );
}
