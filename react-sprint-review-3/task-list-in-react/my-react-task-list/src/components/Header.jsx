// src/components/Header.jsx
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header" p={4} bg="teal.500" color="white">
      <Heading as="h1" size="lg">
        My React Task List
      </Heading>
    </Box>
  );
};

export default Header;
