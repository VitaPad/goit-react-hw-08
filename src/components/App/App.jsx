import ContactList from "../ContactList/ContactList.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import css from "./App.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps.js";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.loading);
  const isError = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
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
    </>
  );
}
