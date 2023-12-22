// src/App.jsx
import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <div>
        <Header />
        <TaskList />
      </div>
    </ChakraProvider>
  );
}

export default App;
