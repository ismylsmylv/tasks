import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import { ChakraProvider } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      console.log(res.data);
      setData(res.data)

    })
  }, [])
  return (
    <>
      <h1>Products</h1>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>

          <Tbody>
            {
              data.map(elem => {
                return <Tr key={uuidv4()}>
                  <Td>{elem.name}</Td>
                  <Td>{elem.unitPrice}</Td>
                </Tr>
              })
            }
          </Tbody>

        </Table>
      </TableContainer>
    </>
  )
}

export default App
