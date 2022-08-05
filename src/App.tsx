import React from 'react';
import './App.css';
import { SWRConfig } from 'swr'
import Dashboard from './pages/Dashboard';
import {fetcher} from './api/'

function App() {
  return (
    <SWRConfig 
      value={{
        fetcher
      }}
    >
      <Dashboard/>
    </SWRConfig>
  );
}

export default App;
