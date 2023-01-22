import axios from "axios"
import React, { useState,useEffect } from "react";

import Footer from "../landingpage/Footer/Footer";
import { useParams } from "react-router-dom";
import { Flex,Image,Text,VStack } from "@chakra-ui/react";
export const Demo=()=>{
  let [data,setData]=useState([]);
let index=useParams();
console.log(index)
const fetfinal=()=>{
    axios.get(`https://636d2336ab4814f2b279de8f.mockapi.io/meals?id=${index.userid}`)
    .then(res=>{setData(res.data)
    console.log(res.data)
    })
    .catch(err=>console.log(err))
}
useEffect(()=>{
    fetfinal()
},[])
 return(<>

  {
    data?.map((item,index)=>(
    
      
        <div>
         <Flex>
          <Image margin={"30px"} w={"30%"} src={item.image} />
          <VStack 
          margin={"30px"}
          >
            <Text fontSize={"30px"} fontWeight={"extrabold"} m={"10px"}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.category}</Text>
            <Text>Rating-{item.rating.rate}</Text>
          </VStack>
         </Flex>
        </div>
      
      
    ))

  }
 <Footer/>
 </>)
}



