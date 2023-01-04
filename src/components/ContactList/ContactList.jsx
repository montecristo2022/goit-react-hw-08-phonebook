import React from 'react';
import styles from '../ContactList/ContactList.module.css';
import { getContacts } from 'redux/contactsListSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilter } from 'redux/contactsFilterSlice';
import { deleteOneContact } from 'redux/operations';
import { getLoader } from 'redux/contactsListSlice';
import { useContacts } from 'hooks';


export const ContactList = () => {
const {isLoading, filterContacts, contacts} = useContacts()


const dispatch = useDispatch();


  // const contactsArray = useSelector(getContacts).myContacts;
  // const loader = useSelector(getLoader).isLoading



  // const filteredContacts = useSelector(getFilter);

  // const contactsLowerFilter = filteredContacts.toLowerCase();

  
  const contactsLowerFilter = filterContacts ? filterContacts.toLowerCase() : null

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactsLowerFilter)
  );

console.log(visibleContacts)


  return (
  <>
  {/* {loader && <p>Loading...</p>} */}
    <ul className={styles.contactsWrapper}>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li className={styles.oneContact} key={id}>
            <p className={styles.oneContactText}>
              {' '}
              {name}: {number}
            </p>

            <button
              className={styles.deleteButton}
              onClick={() => {
                dispatch(deleteOneContact(id));
              }}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  </>
  );
};
