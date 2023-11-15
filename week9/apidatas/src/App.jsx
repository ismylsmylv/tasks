import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [data, setData] = useState([])
  const [catName, setCatName] = useState("");
  const [catDesc, setCatDesc] = useState("");

  useEffect(() => {
    axios("https://654bcb115b38a59f28efb8ab.mockapi.io/users").then((res => {
      console.log(res.data);
      setData(res.data)
    }))
  }, [])
  return (
    <>
      <h1>Products</h1>
      {/* listing datas */}
      <ul>
        {
          data.map(elem => {
            return <li key={uuidv4()}>{elem.name} {elem.description}
              <button>edit</button>
              <button data-id={elem.id}
                onClick={(e) => {
                  e.preventDefault()
                  console.log(elem.id)
                  let arr = data.filter(
                    element => {
                      element.id != (e.target.getAttribute("data-id"))
                    }
                  )
                  setData(

                    arr)
                  axios.delete('https://654bcb115b38a59f28efb8ab.mockapi.io/users/' + e.target.getAttribute("data-id"))
                  console.log(arr)
                }}>delete</button>
            </li>
          })
        }
      </ul >

      {/* posting data */}
      <div className="inputs">
        <input type="text" placeholder='category name' onChange={
          (e) => {
            console.log(e.target.value)
            setCatName(e.target.value)
          }
        } />
        <input type="text" placeholder='category desc' onChange={(e) => {
          console.log(e.target.value)
          setCatDesc(e.target.value)


        }

        } />
        <button onClick={() => {
          let datas = {
            name: catName,
            description: catDesc
          }

          axios.post("https://654bcb115b38a59f28efb8ab.mockapi.io/users", datas).then(res => {
            setData([...data, res.data])
          })
          setCatDesc("")
          setCatName("")
        }}>add</button>
      </div >
    </>
  )
}

export default App
