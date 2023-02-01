import './index.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './pages/counter';
import Modal from './pages/modal';
import Layout from './pages/layout';
import NoPage from './pages/nopage/NoPage';
import Quiz from './pages/quiz';
import Invitation from './pages/invitation';
import Todolist from './pages/todolist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Counter />} />
          <Route path="modal" element={<Modal />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="invitation" element={<Invitation />} />
          <Route path="todolist" element={<Todolist />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;