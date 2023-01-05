import { Task } from '../Task/Task';
import css from './TaskList.module.css';
import { useContacts } from 'hooks/useContacts';

export const TaskList = () => {
  const { filterContacts, contacts } = useContacts();
  const contactsLowerFilter = filterContacts?.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactsLowerFilter)
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Task id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

