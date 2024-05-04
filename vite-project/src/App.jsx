import './App.css'
import { useState,useEffect } from 'react'

function App() {
  const [data,setData] =useState(null);

  useEffect(()  =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response) => Response.json())
    .then((data) => setData(data));

  },[]);
  return (
    <>
      <div className='App'>
        <h1>Fetch like a Pro</h1>
        <div className='card'>
          <ul>
            {data?.map((user)=> (
                <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App

