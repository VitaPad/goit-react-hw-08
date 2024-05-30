import { selectFilteredContacts } from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              id={contact.id}
            ></Contact>
          );
        })}
      </ul>
    </div>
  );
}
