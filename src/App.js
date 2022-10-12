import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Ways from './routes';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Ways />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
