import React from 'react';
import { Input } from '@chakra-ui/react';

export default function Filter({ filter, onFilterChange }) {
  const handleChange = e => {
    onFilterChange(e.target.value);
  };

  return (
    <Input
      size="md"
      width="240px"
      variant="filled"
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Search contacts by name"
    />
  );
}
