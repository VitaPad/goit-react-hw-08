import { PiPhoneFill } from 'react-icons/pi';
import { PiUserFill } from 'react-icons/pi';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ contact, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log('Видаляємо контакт з ідентифікатором:', id);
    dispatch(deleteContact(id));
  };
  return (
    <li key={contact.id} className={css.item}>
      <div className={css.box}>
        <p>
          <PiPhoneFill size="20" />
          {contact.name}
        </p>
        <p>
          <PiUserFill size="20" />
          {contact.number}
        </p>
      </div>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
