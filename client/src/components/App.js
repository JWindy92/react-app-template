import React from 'react';
import Header from './Header';
import Footer from './Footer';

const App = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default App;
