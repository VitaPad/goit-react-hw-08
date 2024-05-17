import ContactList from "../ContactList/ContactList.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import css from "./App.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps.js";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader.jsx";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.loading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        {isLoading && <Loader />}

        <SearchBox />

        <ContactList />
      </div>
    </>
  );
}
