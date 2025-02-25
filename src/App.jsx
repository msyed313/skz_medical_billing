import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PagesRoutes from './PagesRoutes';

function App() {
  return (
    <BrowserRouter>
      <PagesRoutes />
    </BrowserRouter>
  );
}

export default App;
