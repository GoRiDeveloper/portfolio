import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import { Index } from "./routes";
import './styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>,
);