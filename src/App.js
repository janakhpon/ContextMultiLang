import React from 'react';
import Navbar from './Components/Navbar'
import Container from './Components/Container'
import { LanguageProvider } from './Container'

const App = () => {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <Container />
      </LanguageProvider>
    </>
  );
}

export default App