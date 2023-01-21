  
import { Box,Text,Flex,Input,Image, VStack ,Button} from "@chakra-ui/react"
import { MdCreditCard } from "react-icons/md"
import {SiPhonepe,SiPaypal} from "react-icons/si"
import { Link } from "react-router-dom"
import Footer from "../../landingpage/Footer/Footer"
import { FormControl,FormLabel } from "@chakra-ui/react"
import { useState } from "react"




export const Checkout=()=>{
    let item=JSON.parse(localStorage.getItem("onprocess"))


 console.log(item)
    return (
        <>
        <Box
        bg="rgb(196,77,255)"
        >
        <Flex  m={"auto"} mt={"40px"}
        w={"90%"} justifyContent={"space-around"}
        bg={"gray.400"}
        boxShadow= "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"        >
     <Box w={"30%"}> <img
      style={{
        width:"100%",
        boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
        marginLeft:"20px"
      }}
      src={item.image} alt="" />
     </Box>
      <VStack m={"20px"} w={"20%"} >
        <Text fontSize={"20px"} fontWeight={"extrabold"} >Name-{item.title}</Text>
        <Text fontSize={"20px"} fontWeight={"extrabold"} >Price-{item.price}/5hr</Text>
        <Text fontSize={"12px"}fontWeight={"bold"} >Description-{item.description}</Text>
      </VStack>
       {/* Checkout Pageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
      <VStack
      border={"3px solid turquoise"}
      p={"35px"}
      m={"20px"}

      boxShadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
      >
        <Text
        fontStyle={"italic"}
        color="rgb(102,153,0)"
        fontWeight={"bold"}
        fontSize={"30px"}
        mb={"30px"}
        >Pay And Feel The Ride</Text>
       
      <Flex w={"90%"} justifyContent={"space-between"} gap={"10"}
      
      >
          <FormControl id="firstName" isRequired>
          <FormLabel color={"#d3cefc"}>First Name</FormLabel>
                    <Input type="text" variant={"filled"} placeholder="name"/>
                  </FormControl>

                  <FormControl id="firstName" isRequired>
          <FormLabel color={"#d3cefc"}>Last Name</FormLabel>
                    <Input type="text" variant={"filled"} placeholder="surName"/>
                  </FormControl>
      
      </Flex>
      <Flex
     
      justifyContent={"space-around"}
      gap={"2"}
      p={"20px"}
      >
        
      <Input  mt={"10px"} w={"70%"} id="ccn" variant='filled' type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="cred-it-card-number"isRequired/>
      <Input  mt={"10px"} w={"20%"} type="text" name="expiry" id="expiry" isRequired placeholder="XX / XX"/>
      </Flex>

      <Flex
      justifyContent={"space-around"}
       p={"30px"}
      >
        <Input w={"30%"} type={"text"} variant='filled' placeholder='CvC'/>
        <Link to="/">
        <Button w={"100%"} bg="rgb(0,213,255)"
        
        onClick={(e)=>{
            
            alert("Payment Successfull")
          localStorage.setItem("checkoutDetails",JSON.stringify(item))
        }}
        >Pay Now-{item.price}</Button>
        </Link>
      </Flex>
      
      <hr />
   <Flex>
 <MdCreditCard/>
 <SiPhonepe/>
 <SiPaypal/>
   </Flex>
  
   
      </VStack>




</Flex>
<Flex
justifyContent={"space-around"}
>

<Image
mt={"20px"}
src="https://i.ibb.co/VMxK1Nh/1428609-Travis-Pastrana-Quote-In-life-you-re-along-for-the-ride-either-way.jpg"/>
  
  <Text m={"30px"} fontSize={"30px"} fontWeight={"bolder"}>Ride Safe</Text>

<Image mt={"20px"} src="https://i.ibb.co/LPj9RK5/hero-car.webp" alt="hero-car"/>

</Flex>
</Box>
<Footer/>
        </>
    )
}