import Footer from "../landingpage/Footer/Footer"
import "./Componentscss/reservation.css"
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Box,SimpleGrid,Text,Flex,Input,Select,Button } from '@chakra-ui/react'
  import React from "react"
const Reservation=()=>{
   const Images=[
    {
        url:"https://i.ibb.co/Fw7hDxZ/roadtrip-wallpaper.jpg"
    },{
        url:"https://i.ibb.co/r5wm7Fq/road-trip-west-usa-header.jpg"
    },{
        url:"https://i.ibb.co/8rGtd8D/street-593165-1920.jpg"
    }
   ]
let [count,setCount]=React.useState(0);
const [slide,setSlide]=React.useState("")
// const count=0;
setInterval(()=>{
    slider()
},[2000])
function slider(){
if(count>=2){
    setCount(0)
}else{
    for(let i=count;i<=count;i++){
      setSlide(Images[i].url)
      setCount(count+1);
    }}
}



        const [sliderValue, setSliderValue] = React.useState(25)
      
        const labelStyles = {
          mt: '2',
          ml: '-2.5',
          fontSize: 'sm',
        }
    return(
        <>
        <div
        style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        }}
        >
         <SimpleGrid mt={"10px"} columns="4">
            
            <Text borderRight={"1px solid gray"}>1</Text>
            <Text borderRight={"1px solid gray"}>2</Text>
            <Text borderRight={"1px solid gray"}>3</Text>
            <Text borderRight={"1px solid gray"}>4</Text>
         </SimpleGrid>

        <Box pt={6} pb={4} mb={"30px"}>
      <Slider aria-label='slider-ex-2' onChange={(val) => setSliderValue(val)}>
        <SliderMark value={25} {...labelStyles}>
          25%
        </SliderMark>
        <SliderMark value={50} {...labelStyles}>
          50%
        </SliderMark>
        <SliderMark value={75} {...labelStyles}>
          75%
        </SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign='center'
          bg='blue.100'
          color='white'
          mt='-10'
          ml='-5'
          w='11'
        >
          {sliderValue}%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
{
  
        <div className="midDiv"
        style={{
          backgroundImage: `url(${slide})`,
          backgroundColor:"black", 
          backgroundRepeat:"no-repeat",
          width:'100%',
          height:"500px",
          backgroundPosition:"center",
          backgroundSize:"90% 90%",
          zIndex:"-1"

      }}>
      <div className="bigInputdiv">
      <div
      className="input1fist"
      >

      <Flex
 direction={["column","row"]}

 > 
 <Input   bg={"white"} border={"2px solid green"} placeholder="Enter your pickup location or zip code" />
 <Input  bg={"white"} placeholder='Enter The Date' type={"date"} border={"2px solid green"} />
 <Select placeholder='Noon'
border={"2px solid green"}
 bg={"white"}

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
      </div>
      <div
      className="input1fist"
      >
      <Flex
 direction={["column","row"]}
 > 
 <Input  pos={"sticky"} top={"80px"} bg={"white"} border={"2px solid green"} placeholder="Return to same location" />
 <Input bg={"white"} placeholder='Enter The Date' type={"date"} border={"2px solid green"} />
 <Select placeholder='Noon'
border={"2px solid green"}
 bg={"white"}
 
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
      </div>

      <div
      className="input1fist"
      >
      <Flex
 direction={["column","row"]}
 > 
  <Select placeholder='Noon'
border={"2px solid green"}
 bg={"white"}

 >
    
  <option value='option1'>United State</option>
  <option value='option2'>Canada</option>
  <option value='option3'>Turkey</option>
  <option value='option2'>Australia</option>
  <option value='option3'>Czech Republic</option>
</Select>
 <Input type={"number"} pos={"sticky"} top={"80px"} bg={"white"} border={"2px solid green"} placeholder="Zip code" />
 <Input   bg={"white"} placeholder='Discount Code' type={"text"} border={"2px solid green"} />

 </Flex>
      </div>
      <Button
      ml={"45%"}
      mt={"20px"}
      bg={"red.600"}
      color={'white'}
      >Select My Car</Button>
      </div>
</div>
  }
</div>
<div
style={{
    margin:"30px"
}}
>
    <Text
    textAlign={"center"}
    fontSize={"2xl"}
    fontWeight={"extrabold"}
    mb={"20px"}
    > ADDITIONAL INFORMATION  </Text>
    <SimpleGrid
    columns={3}
    width={"80%"}
    margin={"auto"}
    textAlign={"center"}
    >
        <Box
        borderLeft={"1px solid gray"}
        borderRight={"1px solid gray"}
       
        ml="10px"
        >
            <Text
              fontSize={"20px"}
              fontWeight={"bold"}
            >Reservations & Avis.com Assistance</Text>
            <Text>1-800-230-4898</Text>
        </Box>
        <Box
          borderLeft={"1px solid gray"}
          borderRight={"1px solid gray"}
          
       
        >
            <Text
            fontSize={"20px"}
            fontWeight={"bold"}
            >Wizard Number / Preferred Profile Updates</Text>
            <Text>1-866-842-5552</Text>
            <Text>Monday - Friday 8am-5pm EST</Text>
        </Box>
        <Box
         borderLeft={"1px solid gray"}
         
         
        >
            <Text
            fontSize={"20px"}
            fontWeight={"bold"}
            >Other Avis Telephone Numbers</Text>
            <Text>Worldwide Telephone Numbers</Text>
        </Box>
    </SimpleGrid>
</div>

        <Footer/>
        </>
    )
}
export default Reservation