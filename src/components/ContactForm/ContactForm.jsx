import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
/* import { nanoid } from "nanoid"; */
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contactsOps";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "To short")
    .max(50, "Maximum 50 characters")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
    .required("Required"),
});

const initialValues = { name: "", number: "" };

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContacts(newContact));
    action.resetForm();
  };

  /*   const usernameId = nanoid();
  const usernumberId = nanoid(); */
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form>
        <div className={css.container}>
          <label>Name</label>
          <Field type="text" name="name"></Field>
          <ErrorMessage name="name" component="div" className={css.error} />
          <label>Number</label>
          <Field type="tel" name="number"></Field>
          <ErrorMessage name="number" component="div" className={css.error} />
          <button className={css.button} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
