import axios from "axios"
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../landingpage/Footer/Footer";
import { useParams } from "react-router-dom";
import { Box, Flex,HStack,Image,Text,VStack } from "@chakra-ui/react";
export const Demo=()=>{
  let [data,setData]=useState([]);
let index=useParams();

const fetfinal=()=>{
    axios.get(`https://636d2336ab4814f2b279de8f.mockapi.io/car?limit=10`)
    .then(res=>{setData(res.data)
    console.log(res.data)
    })
    .catch(err=>console.log(err))
}
useEffect(()=>{
    fetfinal()
},[])
 return(<>
<h2>Hey there</h2>
  {
    data?.map((item,index)=>(
    
      
        <div>
         <Flex>
          <Image src={item.image} />
          <VStack>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.category}</Text>
            <Text>{item.rating.rate}</Text>
          </VStack>
         </Flex>
        </div>
      
      
    ))
  }

 </>)
}



