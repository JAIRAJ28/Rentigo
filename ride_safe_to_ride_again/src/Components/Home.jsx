import React from "react";
import { Box,Image,Input ,Flex,Select,Button,Text,SimpleGrid ,Center, background} from "@chakra-ui/react";
import "./Componentscss/Home.css"
import Footer from "../landingpage/Footer/Footer";
const Home=()=>{

    return(<>

   <div 
   className="firstdiv"
   >
   <Box bg={"rgb(212, 0, 42)"}>
 <Image m={"auto"} w={"70%"} z-index={-1} h="400px" src="https://i.ibb.co/ZfKzVQ1/car-subscriptions-rise-in-india.jpg" alt='Car' />
 <div
 style={{
    position:"sticky",
    top:"30%",
    margin:"20px"
 }}
 >
 <Flex
 direction={["column","row"]}
 > 
 <Input marginLeft={"2%"} pos={"sticky"} top={"80px"} bg={"white"} border={"2px solid green"} placeholder="Enter your pickup location or zip code" />
 <Input marginLeft={"3%"} marginRight={"3%"} bg={"white"} placeholder='Enter The Date' type={"date"} border={"2px solid green"} />
 <Select placeholder='Noon'
border={"2px solid green"}
 bg={"white"}
 marginRight={"3%"}
 >
  <option value='12:30AM'>12:30pM</option>
  <option value='option2'>1:00pm</option>
  <option value='option2'>1:30pm</option>
  <option value='option2'>2:00pm</option>
  <option value='option2'>3:00pm</option>
  <option value='option2'>4:00pm</option>
  <option value='option2'>5:00pm</option>
  <option value='option2'>6:00pm</option>
  <option value='option2'>6:00pm</option>
  <option value='option2'>7:00pm</option>
  <option value='option2'>9:00pm</option>
  <option value='option2'>10:00pm</option>
  <option value='option2'>11:00pm</option>
  <option value='option2'>12:00Am</option>

  
</Select>
 </Flex>

 <Button
 p={"10px"}
 bg={"turquoise"}
 margin="10px"
 marginLeft={"46%"}
 >Select Your Car</Button>
 </div>
</Box>
   </div>
{/* Functionality is to be added here check it will go to the admin page and redirect to the car pages wher ethere wil be variety */}
<Box bg={"black"}>
    <Text w={"30%"} m="auto" color={"white"}> SAVE up to 35% and get OUR BEST RATES! Book Now!</Text>
</Box>



<div className="secondDiv">
   
<Box
w={"45%"}

ml={"10%"}
>
    <Text color={"white"} fontWeight={"800"} mt={"10%"}>
        Get Best Rates when you book at Rentigo.com
    </Text>
    <Text
    mt={"10%"}
    color={"white"}
    >
        Plus save up to 35% when you pay in advance!
    </Text>
    <Button colorScheme='teal' size='lg' mt={"5%"} marginBottom={"20%"}
    
    >
    Save Now
  </Button>
</Box>
</div>
<Flex justifyContent={"space-between"} w="80%" m="auto" mt={"10px"} p={"20px"}
boxShadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
>
    <Box>
    <Text fontWeight={"extrabold"} fontSize="30px">EXPLORE ALL THE WAYS YOU CAN SAVE</Text>
    <Text
    fontWeight={"bold"} 
    >Save on your next daily or monthly car rental with these deals and offers.</Text>
    </Box>
    <Box>
        <Button bg={"turquoise"}>VIEW ALL OFFERS</Button>
    </Box>
</Flex>

<hr />
{/* Now the third div aftet the two div */}
<Center w={"90%"} fontFamily={" Rockwell sans-serif"} fontSize={"30px"} bg={"turquoise"}fontWeight={"bold"} m="auto"
>FIND YOUR BEST CAR WITH RENTIGO</Center>
<div
style={{
    padding:"20px"
}}
>
<SimpleGrid   columns={{ base: 1, md: 3 }}  spacing={7}  p="20px" >
<Box >
<Image src="https://i.ibb.co/qN2PMg4/th.jpg" />
<Text
fontWeight={"extrabold"} fontSize="40px"
        >Get A Free Up Grade</Text>

<Text
    fontWeight={"bold"} fontSize="20px"
    >Travel in a roomier ride.</Text>
    <Button bg={"gray.500"}>Upgrade Now</Button>
</Box>

<Box >
<Image src="https://i.ibb.co/GFfXKkW/photo-1523676060187-f55189a71f5e.jpg" />
<Text
fontWeight={"extrabold"} fontSize="40px"
        >Get A Last Minute Travel Guide.</Text>

<Text
    fontWeight={"bold"} fontSize="20px"
    >Use our last-minute car rental travel deals to save today.</Text>
    <Button bg={"gray.500"}
    pos="absolute"
    top={{ base:"2230px", md:"1650px"}}
    left={{ base:"350px", md:"830px"}}
    >Save Now</Button>
</Box>

<Box >
<Image src="https://i.ibb.co/9TDBDf0/National-Car-Rental-options.jpg" />
<Text
fontWeight={"extrabold"} fontSize="40px"
        >EARN FREE DAYS!</Text>

<Text
    fontWeight={"bold"} fontSize="20px"
    >Start earning FREE days by registering today.</Text>
    <Button bg={"gray.500"}>Register</Button>
</Box>

</SimpleGrid>
</div>

{/* 2@nd Lasdt div before Footer */}
<div
style={{
    width:"87%",
    margin:"auto"
}}
>

    <Text
    fontWeight={"extrabold"} fontSize="35px"
    >BENEFITS FROM OUR TRAVEL PARTNERS</Text>
    <SimpleGrid columns={{base:1,md:3}}  spacing={9}>
    <Box>
<Flex>
    <Image w={"55%"} src="https://i.ibb.co/fq9xk2W/Screenshot-456-e1623267117882-1024x537.png" />
    <Box>
        <Text margin={"10px"} fontSize={"13px"}>Get up to 30% off with pay now plus 10% back in an Amazon Gift Card*</Text>
        <Text margin={"10px"} color="red" fontWeight={"bold"}>LEARN MORE</Text>
    </Box>
</Flex>
</Box>

<Box>
<Flex>
    <Image w={"40%"} src="https://i.ibb.co/hH49qVc/th-1.jpg" />
    <Box>
        <Text margin={"10px"} fontSize={"13px"} >Learn more about our exclusive offers and savings for AARP members*</Text>
        <Text margin={"10px"} color="red" fontWeight={"bold"}>LEARN MORE</Text>
    </Box>
</Flex>
</Box>

<Box>
<Flex>
    <Image w={"45%"} src="https://i.ibb.co/fDwfyLG/th-2.jpg" />
    <Box>
        <Text margin={"10px"} fontSize={"13px"}>Save up to 25% with Veteran's Advantage*</Text>
        <Text margin={"10px"} color="red" fontWeight={"bold"}>LEARN MORE</Text>
    </Box>
</Flex>
</Box>
    </SimpleGrid>


<div
style={{
    padding:"10%",
    marginTop:"10px",
    backgroundImage: 
 "url('https://i.ibb.co/gJnJdx2/wp2707518-4k-car-wallpaper.jpg')",
 backgroundRepeat:"no-repeat",

}}
>

<Box
ml={"30%"}

>
    <Text
    fontSize={"30px"} fontWeight={"extrabold"} color="black" bg={"magenta"} fontFamily={"Rockwell sans-serif"}
    >BUY A CERTIFIED PRE-OWNED CAR WITH AVIS CAR SALES AND SAVE AN AVERAGE OF $2500*
    </Text>
    <Text
    mb={"10px"}
    fontSize={"20px"}
    >
    Find your car today.
    </Text>

    <Button
    bg={"red.500"}
    p={"20px"}
    color="white"
    >LEARN MORE</Button>
</Box>

</div>
</div>
<Footer/>
    </>)

}
export default Home;