import { Formik, Form, Field } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operation";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, action) => {
    dispatch(register(values));
    action.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <div>
          <label className={css.label}>Username</label>
          <Field type="text" name="name" />
        </div>
        <div>
          <label className={css.label}>Email</label>
          <Field type="email" name="email" />
        </div>
        <div>
          <label className={css.label}>Password</label>
          <Field type="password" name="password" />
        </div>

        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
