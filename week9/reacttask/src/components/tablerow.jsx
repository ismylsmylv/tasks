import React from 'react'
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
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios'

function Tablerow({ elem, prods, setprods }) {
    return (<>

        <Td>{elem.id}</Td>
        <Td>{elem.name}</Td>
        <Td>{elem.price}</Td>
        <Td>{elem.stock}</Td>
        <Td>{elem.discountPercent}</Td>
        <Td><Button colorScheme='cyan' onClick={() => {
            console.log("first")
        }}>Edit</Button></Td>
        <Td><Button colorScheme='red' onClick={() => {
            // axios.delete("https://654bcb115b38a59f28efb8ab.mockapi.io/products/" + elem.id)

            for (let element of prods) {
                if (elem.id != element.id) {
                    console.log(elem)
                    setprods([...prods])

                }

            }

        }}>Delete</Button></Td>
    </>
    )
}

export default Tablerow