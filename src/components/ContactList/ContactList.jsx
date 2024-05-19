import { selectVisibleContscts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector(selectVisibleContscts);
  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <Contact key={contact.id} contact={contact} id={contact.id}></Contact>
        );
      })}
    </ul>
  );
}
