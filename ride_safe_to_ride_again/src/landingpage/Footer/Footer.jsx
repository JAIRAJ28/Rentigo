import { Box,Flex ,VStack,SimpleGrid,Text,HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Select } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { BsInstagram,BsTwitter,BsFacebook,BsLinkedin,BsYoutube, } from "react-icons/bs";
import React from "react"
import "./Footer.css"
const Footer=()=>{
const [isActive,setActive]=React.useState(false);
  return<>

<Box bg="#333333" 
color="#FFF"
// background={"https://tse1.mm.bing.net/th?id=OIP.2nsAvNTQFc7UB2rIzsjmwQHaDL&pid=Api&P=0"}
>




<SimpleGrid columns={{ base: 1, sm: 2, md: 6 }} spacing={8}  p="20px">
          <VStack  >
            <h4 style={{fontWeight:"760"}} > TOP US DESTINATIONS</h4>
            <Link style={{padding:"2px"}} to='/'>Travel Guides</Link>
            <Link style={{padding:"2px"}} to='/'>Car Rental Las Vegas</Link>
            <Link style={{padding:"2px"}} to='/'>Car Rental Los Angeles</Link>
            <Link style={{padding:"2px"}} to='/'>Car Rental Chicago</Link>
            <Link style={{padding:"2px"}} to='/'>Car Rental Orlando</Link>
            <Link style={{padding:"2px"}} to='/'>Car Rental Miami</Link>
          </VStack>
          <VStack >
          <h4 style={{fontWeight:"760"}}>RENTAL CAR TYPES</h4>
            <Link style={{padding:"2px"}} to='/'>One-Way Airport Car Rental</Link>
            <Link style={{padding:"2px"}} to='/'>Luxury Car Rental</Link>
            <Link style={{padding:"2px"}} to='/'>Pickup Truck Rental</Link>
            <Link style={{padding:"2px"}} to='/'>Van Rental</Link>
            <Link style={{padding:"2px"}} to='/'>SUV Rental</Link>
            <Link style={{padding:"2px"}} to='/'>Rental Car-Size Sedan</Link>
          </VStack>
          <VStack >
          <h4 style={{fontWeight:"760"}}>AVIS EXTRAS</h4>
            <Link style={{padding:"2px"}} to='/'>Rental Car Products</Link>
            <Link style={{padding:"2px"}} to='/'>Car Rental Services</Link>
            <Link style={{padding:"2px"}} to='/'>Protections & Coverages</Link>
            <Link style={{padding:"2px"}} to='/'>Loss Damage Waiver</Link>
            <Link style={{padding:"2px"}} to='/'>Roadside Assistance</Link>
          </VStack>
          <VStack >
          <h4 style={{fontWeight:"760"}}>AVIS PARTNERS</h4>
            <Link style={{padding:"2px"}} to='/'>Affiliates</Link>
            <Link style={{padding:"2px"}} to='/'>Travel Agents</Link>
            <Link style={{padding:"2px"}} to='/'>Military & Veterans</Link>
            <Link style={{padding:"2px"}} to='/'>Airline Points Partners</Link>
            <Link style={{padding:"2px"}} to='/'>Hotel Points Partners</Link>
            <Link style={{padding:"2px"}} to='/'>COMPANY INFO</Link>
          </VStack>
          <VStack >
          <h4 style={{fontWeight:"760"}}>COMPANY INFO</h4>
          <Link style={{padding:"2px"}} to='/'>About Avis</Link>
            <Link style={{padding:"2px"}} to='/'>Best Price Pledges</Link>
            <Link style={{padding:"2px"}} to='/'>Avis Careers</Link>
            <Link style={{padding:"2px"}} to='/'>Site Map</Link>
            <Link style={{padding:"2px"}} to='/'>Lost & Found</Link>
            <Link style={{padding:"2px"}} to='/'>We Try Hardert</Link>
           <Link style={{padding:"2px"}} to='/'>Accessibility</Link>
        
          </VStack>
         <VStack>
         <h4 style={{fontWeight:"760"}}>SECURITY & PRIVACY</h4>
          <Link style={{padding:"2px"}} to='/'>Terms Of Use</Link>
            <Link style={{padding:"2px"}} to='/'>Privacy Notice</Link>
            <Link style={{padding:"2px"}} to='/'>Your Privacy Choices</Link>
            <Link style={{padding:"2px"}} to='/'>Copyright Notices</Link>
            <Link style={{padding:"2px"}} to='/'>Fraud & Scams</Link>
         </VStack>

        </SimpleGrid>
        <Flex m="20px" direction={{base:"column",md:"row"}}>
            <Box>
            <Flex m="20px" direction={{base:"column",md:"row"}}>
        <Select placeholder='Select option' color={"black"} bg={"white"} size="md" w={[60,60]}>
  <option value='option1'>United State</option>
  <option value='option2'>Canada</option>
  <option value='option3'>Turkey</option>
  <option value='option2'>Australia</option>
  <option value='option3'>Czech Republic</option>
</Select>

<Select placeholder='English' color={"black"} bg={"white"} size="md" w={[60,60]}>
  <option value='English'>English</option>
  <option value='Espaniol'>Espaniol</option>
  <option value='Portugues'>Portugues</option>
  
</Select>
</Flex>
</Box>

<Text marginLeft={"30%"} fontSize='19px'> © 2023 Avis Rent A Car System, LLC</Text>
<Image marginLeft={"30px"} width="90px" h={"60px"} src="https://tse4.mm.bing.net/th?id=OIP.xch2DXSTQIsi_ShL2gyZ7QHaD4&pid=Api&P=0" alt=""/>
</Flex>

<Box bg="black" h="140px" padding={"40px"}>
<Flex>
<Box boxSize='sm' >
  <Image width="70px"  src='https://www.avis.com/etc/designs/avis/home/clientlib/images/AvisApp@2xHalf-Cut-Mobile.png' alt='Dan Abramov' />
</Box>
<HStack bg={"red"} h="20px" paddingTop={"30px"} marginTop={"50px"} marginLeft={"50%"}>
    
    <BsFacebook/>
    <BsTwitter/>
    <BsLinkedin/>
    <BsYoutube/>
    <BsInstagram/>
</HStack>
</Flex>
</Box>

<div
className={`Feebackpopup ${isActive? "ActiveFeedback":""}`}
// className="ActivePopup"
>
<h1
style={{
fontFamily:"cursive",
fontWeight:"800"
}}
>Avis</h1>
<p
style={{
    marginTop:"10px",
    marginBottom:"20px"
}}
>Tell Us How We Are Doing</p>

<h3
style={{
    
    marginBottom:"6%",

    
}}
>What type of feedback do you have?</h3>
<button
style={{
    backgroundColor:"black",
    borderRadius:"20px"
}}
>Website Feedback</button>
<button
style={{
    backgroundColor:"magenta",
    marginLeft:"10%",
    padding:"10px",
    borderRadius:"20px",
    
}}
>Rental Feedback</button>
<hr />
<hr />
<h1>---Opinion Lab</h1>
    
</div>
<Box>
<button className='Reddish'    onClick={(e)=>setActive(!isActive)}>FeedBack</button>
</Box>
</Box>
 </>
}
export default Footer