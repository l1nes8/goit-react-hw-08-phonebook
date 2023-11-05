import React from 'react';
import css from 'form.module.css';
import { ListItem, OrderedList } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <div>
      <OrderedList className={css.listContact}>
        {contacts.map(contact => (
          <ListItem className={css.item} key={contact.id}>
            {contact.name}: {contact.number}
            <Button
              colorScheme="teal"
              size="xs"
              type="submit"
              onClick={() => onDeleteContact(contact.id)}
              className={css.deleteContact}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </OrderedList>
    </div>
  );
}
