import { useState } from 'react';
import './App.css';
import useFetch from './usefetch';
function App() {
  const [url, seturl] = useState("");
  const [method, setmethod] = useState("");
  let { data, loading, error } = useFetch("https://654bcb115b38a59f28efb8ab.mockapi.io/productsssssss", "get")
  // useFetch()
  return (
    <>
      {/* inputs */}
      {/* <input type="text" placeholder='link' onChange={(e) => {
        seturl(e.target.value)
        console.log(url)
      }} />
      <input type="text" placeholder='method' onChange={(e) => {
        console.log(e.target.value)
        setmethod(e.target.value)
      }} />

      {/* button */}
      {/* <button onClick={() => {
        // useFetch(url, method)
      }}>run</button> */}


      {/* listing */}
      {/* <p className="datas">data {data}</p> */}
      <p className="datas">{loading && "loading"}</p>
      <p className="datas">{error && "error made"}</p>
      <ul>
        {
          data.map((elem, i) => {
            return <li key={i}>{elem.name}</li>
          })
        }
      </ul>
    </>
  )
}

export default App
