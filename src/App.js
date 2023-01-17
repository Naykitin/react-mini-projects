import './index.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './pages/counter';
import Modal from './pages/modal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Counter />} />
          <Route path={modal} element={<Modal />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;