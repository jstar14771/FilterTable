
import { useEffect, useState } from 'react';
import StudentTable from './StudentTable';

function App() {
  const[data,setData]=useState(0)
  useEffect(()=>{
    setData()
  },[data])
  return (
    <>
    <StudentTable/>
    </>
  );
}

export default App;
