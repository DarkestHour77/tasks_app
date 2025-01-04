import logo from './logo.svg';
import './App.css';
import Task from './Components/Task';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListTask from './Components/ListTask';

function App() {



  return (
    <div className="App">
      {/* <Task /> */}
      <ListTask />
    </div>
  );
}

export default App;
