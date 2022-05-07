import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary';
import { ThemeModeProvider } from 'hooks/useThemeMode';

import App from 'pages/App';
import './index.css';

const ROOT_ELEMENT_ID = 'root';

const root = ReactDOM.createRoot(document.getElementById(ROOT_ELEMENT_ID) as HTMLElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeModeProvider>
          <App />
        </ThemeModeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
