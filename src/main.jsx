import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { RoomContext } from './context/RoomContext';
import './style/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RoomContext>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </RoomContext>
);
