/* import ContactList from "../ContactList/ContactList.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx"; */
/* import css from "./App.module.css"; */
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Suspense, lazy } from "react";
/* import { fetchContacts } from "../../redux/contacts/operations.js";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import { selectError, selectLoading } from "../../redux/contacts/slice.js"; */

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const LoginPage = lazy(() => import("../../pages/LogInPage/LoginPage"));

export default function App() {
  /*   const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
 */
  /*   useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]); */
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/register" element={<RegistrationPage />}></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />}></Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Layout>

    /*     <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        {isLoading && <Loader />}
        {isError && (
          <ErrorMessage
            message={"Failed to fetch reviews. Please try again later."}
          />
        )}

        <SearchBox />

        <ContactList />
      </div>
    </> */
  );
}
