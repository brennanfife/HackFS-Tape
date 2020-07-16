import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Global } from '@emotion/core';
import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';

import theme, { GlobalStyle } from './utils/theme';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Global styles={GlobalStyle} />
          <App />
        </ColorModeProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
