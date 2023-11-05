import React from 'react';
import css from 'form.module.css';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';

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
