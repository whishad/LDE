import './App.css';
import { BrowserRouter } from "react-router-dom"
import Router from './routes/Router';
import { Suspense } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="loading...">
        <Router/>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
