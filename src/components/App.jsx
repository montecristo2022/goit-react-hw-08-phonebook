import Input from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',

        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <Layout/>
        <h2>Phonebook</h2>
        <Input />

        <h3>Find contact</h3>
        <Filter />
        <h3>My contacts</h3>
        <ContactList />
      </div>
    </div>
  );
}
