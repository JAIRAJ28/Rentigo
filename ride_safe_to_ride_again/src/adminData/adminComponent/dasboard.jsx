import { Text,HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
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
import { useState,useEffect } from "react"


  const getitem=()=>{
  return  axios.get("https://636d2336ab4814f2b279de8f.mockapi.io/meals")
  
  }



export const AdminDashboard=()=>{
const [data,setData]=useState([]);

useEffect(()=>{
    getitem().then((res)=>{
        setData(res.data)
       
    })
},[])
console.log(data)

const HandelChange=(id)=>{
    axios.delete(`https://636d2336ab4814f2b279de8f.mockapi.io/meals/${id}`)
    window.location.reload()
    console.log(id)
}



    return(
        <>
        <Text
        fontSize={"30px"}
        fontWeight={"bold"}
        textAlign="center"
        mt={"20px"}
        >Admin Dashboard</Text>

<HStack 
gap={200}
margin="auto"
width={"30%"}
>
  <Link  to="/admin/dasboard/rented">
    <Text
    fontSize={"30px"}
    fontWeight={"bold"}
    color={"red"}
    >

    Rented
    </Text>
    </Link>
  <Link to="/admin/dasboard/rented">
  <Text
    fontSize={"30px"}
    fontWeight={"bold"}
    color={"red"}
    >

    Model
    </Text>
  </Link>
</HStack>
       
<TableContainer>
  <Table variant='striped' colorScheme='teal' w={"90%"} m="auto" fontFamily={"sans-serif"}>
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
    {data?.map((item)=>(
 <Tr>
 <Td>{item.id}</Td>
 <Td>{item.title} (mm)</Td>
 <Td isNumeric>{item.price}</Td>

 <Td><Image w={"30%"} src={item.image}/></Td>
 <Td><Button onClick={(e)=>HandelChange(item.id)}>Delete</Button></Td>
 
</Tr>
    ))}
    

    </Tbody>
    {/* <Tfoot>
      {/* <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr> */}
    {/* </Tfoot> */} 
  </Table>
</TableContainer>



        </>
    )
}