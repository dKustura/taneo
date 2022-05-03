import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeModeProvider } from 'hooks/useThemeMode';

import App from 'pages/App';
import './index.css';

const ROOT_ELEMENT_ID = 'root';

const root = ReactDOM.createRoot(document.getElementById(ROOT_ELEMENT_ID) as HTMLElement);

// Note to self: StrictMode is intentionally causing double re-render but only in development mode.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeModeProvider>
        <App />
      </ThemeModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
