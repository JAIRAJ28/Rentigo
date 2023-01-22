import { Text } from "@chakra-ui/react"
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
    Image,
    Button
  } from '@chakra-ui/react'
import axios from "axios"

export const Rented=()=>{
    let data=JSON.parse(localStorage.getItem('onprocess'))

    const HandelChange=(id)=>{
        axios.delete(`https://636d2336ab4814f2b279de8f.mockapi.io/meals/${id}`)
    
        console.log(id)
    }
    console.log(data)
    return(
        <>
        <Text>HEY THERE</Text>



        <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
      <Th>id</Th>
        <Th>title</Th>
        <Th isNumeric>price</Th>
        
        <Th>image</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
      <Td>{data.id}</Td>
 <Td>{data.title} (mm)</Td>
 <Td isNumeric>{data.price}</Td>

 <Td><Image w={"30%"} src={data.image}/></Td>
 <Td><Button onClick={(e)=>HandelChange(data.id)}>Delete</Button></Td>
      </Tr>

    </Tbody>

  </Table>
</TableContainer>
        </>
    )
}