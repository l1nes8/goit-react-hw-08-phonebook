import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';
import { FormLabel } from '@chakra-ui/react';
import css from 'form.module.css';

export default function ContactForm({ contacts, onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') return;

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts`);
    } else {
      onAddContact(name, number);
      setName('');
      setNumber('');
    }
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel>Name</FormLabel>
      <Input
        size="md"
        width="240px"
        variant="filled"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <FormLabel>Phone</FormLabel>
      <Input
        size="md"
        width="240px"
        variant="filled"
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />
      <button type="submit" className={css.addBtn}>
        Add Contact
      </button>
    </form>
  );
}
