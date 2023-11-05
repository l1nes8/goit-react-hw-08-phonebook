import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RotatingLines } from 'react-loader-spinner';
import { FormLabel } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import {
  fetchContacts,
  addContacthContacts,
  deleteContacts,
  setFilter,
} from 'redux/contactsReucer';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilter,
} from 'redux/contactsSelector';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const Contact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (name, number) => {
    const newContact = {
      name,
      number,
    };

    dispatch(addContacthContacts(newContact));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  const handleFilterTerm = filter => {
    dispatch(setFilter(filter));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <Text fontSize="30px" as="b">
        Phonebook
      </Text>
      <ContactForm onAddContact={handleAddContact} contacts={contacts} />
      <FormLabel>Contacts</FormLabel>
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      {error && <h1>{error}</h1>}
      <Filter filter={filter} onFilterChange={handleFilterTerm} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default Contact;
