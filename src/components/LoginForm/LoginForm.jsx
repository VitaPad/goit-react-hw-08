import { Field, Formik, Form } from "formik";
import css from "./LoginForm.module.css";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    dispatch(logIn(values))
      .unwrap()
      .then((response) => {
        console.log(response);
        toast.success("Success!!!");
      })
      .catch((error) => {
        console.log(error);
      });
    action.resetForm();
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
