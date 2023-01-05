import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addTask } from 'redux/tasks/operations';
import { selectAllTasks } from 'redux/tasks/selectors';
import Filter from 'components/Filter/Filter';

export default function TaskEditor() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contactsArray = useSelector(selectAllTasks);


  const handleChange = event => {
    let eventName = event.target.name;
    let eventValue = event.target.value;

    if (eventName === 'name') {
      setName(eventValue);
    }

    if (eventName === 'number') {
      setNumber(eventValue);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    let name = event.target.name.value;
    let number = event.target.number.value;

    addContactToArray(name, number);
  };

  const addContactToArray = (name, number) => {
    const oneContact = {
      id: nanoid(),
      name,
      number,
    };
    areTheseNumbersSame(oneContact);
  };

  const areTheseNumbersSame = oneContact => {
    if (
      contactsArray.find(
        oneArrayContact =>
          oneArrayContact.name.toLowerCase() === oneContact.name.toLowerCase()
      )
    ) {
      alert(`контакт с именем ${oneContact.name}уже существует`);
      return;
    }

    dispatch(addTask(oneContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <> Name </>
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></input>

        <p> Number </p>
        <input
          name="number"
          type="tel"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></input>

        <div>
          <button type="submit">Добавить контакт</button>
        </div>
      </form>
      <p>Найти контакт</p>
      <Filter />
    </div>
  );
}

