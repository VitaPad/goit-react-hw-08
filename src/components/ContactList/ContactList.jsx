import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
/* import { selectNameFilter } from '../../redux/filtersSlice'; */
/* import { selectContacts } from "../../redux/contactsSlice"; */

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  /*   const filter = useSelector(selectNameFilter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
 */
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
