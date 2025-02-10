"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Невірний формат email").required("Обов'язкове поле"),
  password: Yup.string().min(6, "Мінімум 6 символів").required("Обов'язкове поле"),
});

export default function LoginForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 className="text-xl font-bold mb-4">Вхід</h2>
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
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
            disabled={isSubmitting}
          >
            Увійти
          </button>
        </Form>
      )}
    </Formik>
  );
}