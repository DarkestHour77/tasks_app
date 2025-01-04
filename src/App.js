import logo from './logo.svg';
import './App.css';
import Task from './Components/Task';
import { useEffect, useState } from 'react';

function App() {
  const[list, setList] = useState([]);

  useEffect(()=>{
    const arr = JSON.parse(localStorage.getItem("arr"));
    setList(arr)
  },[])


  return (
    <div className="App">
      <Task />
      {JSON.stringify(list)}
    </div>
  );
}

export default App;
