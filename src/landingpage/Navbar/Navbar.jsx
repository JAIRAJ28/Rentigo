import "./Navbar.css"
import React from "react";
import { Link } from "react-router-dom"
// import Dropdown from "./Dropdown";
import { GoThreeBars,GoX } from "react-icons/go";
import Dropdown from "./DropDowns/Dropdown";
import Offerdown from "./DropDowns/Dropdown2/offermenudrop";
import Location from "./DropDowns/Dropdown3/location";
import Servicecar from "./DropDowns/Dropdown4/servicescar";
import Buissdown from "./DropDowns/Dropdown5/business";
import { Switch,FormLabel,Flex,Box,Text ,Input,Button,Image,SimpleGrid,FormControl,Stack,useColorModeValue,Checkbox,Heading} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/contextApi";
import { useNavigate } from "react-router-dom";



const Nav=()=>{
const [click,setClick]=React.useState(false);
const [dropDown,setDropdown]=React.useState(false)
const [mDown,setmdown]=React.useState(false)
const [loc,setloc]=React.useState(false)
const [serv,setServ]=React.useState(false)
const [buiss,setBuiss]=React.useState(false)
const  handelClick=(()=>{
    setClick(!click)
})
// const classMobileMenu=()=> setClick(false);

const wantDropDown=()=>{
   if(window.innerWidth>960){
    setDropdown(true)
   }else{
    setDropdown(false)
   }
}
const noDropdown=()=>{
    if(window.innerWidth<960){
        setDropdown(true)
       }else{
        setDropdown(false)
       }
}


const wantofferDown=()=>{
    if(window.innerWidth>960){
        setmdown(true)
    }else{
        setmdown(false)
    }
 }
 const noofferdown=()=>{
     if(window.innerWidth<960){
        setmdown(true)
        }else{
            setmdown(false)
        }
 }







 const locationDown=()=>{
    if(window.innerWidth>960){
        setloc(true)
    }else{
        setloc(false)
    }
 }
 const nolocationdown=()=>{
     if(window.innerWidth<960){
        setloc(true)
        }else{
        setloc(false)
        }
 }

 


 const ServiceDown=()=>{
    if(window.innerWidth>960){
        setServ(true)
    }else{
        setServ(false)
    }
 }
 const Servicenone=()=>{
     if(window.innerWidth<960){
        setServ(true)
        }else{
            setServ(false)
        }
 }

 


 const setBuissDropDown=()=>{
    if(window.innerWidth>960){
        setBuiss(true)
    }else{
        setBuiss(false)
    }
 }
 const noBuissDropdown=()=>{
     if(window.innerWidth<960){
        setBuiss(true)
        }else{
            setBuiss(false)
        }
 }

 
const [pop,setpop]=React.useState(false);
const Handelclick=()=>{
   setpop(!pop);
}



// let [yeno,setYesNo]=React.useState(false)
// const HandelClick=()=>{
// setYesNo(!yeno)
// }
//  Contxt Apiiii Part
const [cred, setCred] = React.useState({}); 
const {isAuth,togglleAuth}=useContext(AuthContext)
const navigateTo=useNavigate()

const postDetails = async () => { 
    try { 
        const data = await fetch(`https://reqres.in/api/login`, { 
            method: 'POST', 
           
            headers: { 
                'Content-type': 'application/json' 
            },
             body: JSON.stringify(cred)
        }); 
        const res = await data.json(); 
        // console.log(res.token); 
        if (res.createdAt) { 
            togglleAuth(true) 
            console.log(isAuth)
            navigateTo('/carsales'); 
        } 
        // console.log(res); 
    } catch (error) { 
        console.log(error); 
        togglleAuth(false);
    } 
} 

 
const HandelInput=(e)=>{

const { type, value } = e.target; 
setCred({ 
    ...cred, 
    [type]: value 
}) 
}
console.log(cred);


const ClickToLogin=()=>{
    console.log("Hello")
    postDetails()
}

return(
    <>
<nav className="navbar">
    <Link to='/' className='navbar-logo'>
      <h2><span>R</span>entig<span>O</span></h2>
           </Link> 
        <div className="menu-icon" onClick={handelClick}>
         {click?<GoX/>:<GoThreeBars/>}       
         </div>
         
         <div className="allLink">
         <ul className={click ?'nav-menu active':'nav-menu' }>
          <li 
          onMouseEnter={wantDropDown}
          onMouseLeave={noDropdown}
          >
            <Link to='/' className='nav-link'  >
            Reservation
         </Link>
         {dropDown && <Dropdown/>}
 </li>


            <li 
            onMouseEnter={wantofferDown}
            onMouseLeave={noofferdown}
            >
            <Link to='/' className='nav-link' >
            OFFERS
         </Link>
         {mDown && <Offerdown/>}
 </li>
        
           
            <li
             onMouseEnter={locationDown}
             onMouseLeave={nolocationdown}
            >
            <Link to='/' className='nav-link' >
            LOCATIONS
         </Link>
         {loc && <Location/>}
</li>

            <li
              onMouseEnter={ServiceDown}
              onMouseLeave={Servicenone}
            >
            <Link to='/' className='nav-link' >
            CARS & SERVICES
            </Link>
              {serv && <Servicecar/>}
            </li>
            
            <li
              onMouseEnter={setBuissDropDown}
              onMouseLeave={noBuissDropdown}
            >
            <Link to='/' className='nav-link' >
            BUSINESS RENTALS
            </Link>
              {buiss && <Buissdown/>}
            </li>

            <li>
            <Link to='/carsales' className='nav-link' >
            CAR SALES
            </Link>
            </li>
            
            <li>
            <Link to='/carsales' className='nav-link' >
            Help
            </Link>
            </li>
       
            <li>
            <Link to='/carsales' className='nav-link' >
            Avis Preferred
            </Link>
            </li>
 
                 {/* Popuppppppppppppp */}
            <li>
            <Button onClick={Handelclick}>
               
                LogIn
           
            
              
            </Button>
            
            
            </li>
            

            <li>
            <Link to='/signin' className='nav-link' >
            Sign-up
            </Link>
            </li>
            
        </ul>
        </div>
</nav>


<div 
className={`Loginup ${pop?"Activelogin":""}`}
        style={{
            fontFamily:"  gothic-italic"
        }}
        >

            <Flex 
                // bg='black' 
                // minH={'100vh'} 
                align={'center'} 
                justify={'center'} 
                borderRadius={"10px"}
                
            bg={useColorModeValue('white')
           
        } 
                        > 
                <Stack spacing={7} mx={'auto'} maxW={'lg'} py={3} px={10} >
                    <Stack align={'center'}> 
                        <Heading fontSize={'4xl'}>Login for great deals </Heading> 
                    </Stack> 
                    <Box 
                        rounded={'lg'} 
                        bg="gray.400"
                        // bg={useColorModeValue('white', 'gray.700')} 
                        boxShadow={'lg'} 
                        p={8}> 
                        <Stack  spacing={4}> 
                            <FormControl id="email"> 
                                <FormLabel>Email address</FormLabel> 
                                <Input bg="white" type="email" onChange={HandelInput}  /> 
                            </FormControl> 
                            <FormControl id="password"> 
                                <FormLabel>Password</FormLabel> 
                                <Input bg="white" type="password" onChange={HandelInput} /> 
                            </FormControl> 
                             
                            <Stack spacing={10}> 
                                <Stack 
                                    direction={{ base: 'column', sm: 'row' }} 
                                    align={'start'} 
                                    justify={'space-between'}> 
                                    <Checkbox>Remember me</Checkbox> 
                                    <Link color={'blue.400'}>Forgot password?</Link> 
                                </Stack> 
                                <Button 
                                    onClick={ClickToLogin} 
                                    bg={'blue.400'} 
                                    color={'white'} 
                                    _hover={{ 
                                        bg: 'blue.500', 
                                    }}> 
                                    Sign in 
                                </Button> 
                            </Stack> 
                            <Text>Don't have an account ? 
                                <Link to='/signup'> 
                                    <Link color={'blue.400'}> Sign Up</Link> 
                                </Link> 
                            </Text>
                            </Stack> 
                    </Box> 
                    <Link to="/admin">
<img 
onClick={()=>setpop(false)}
className="mcQueen"
src="https://i.ibb.co/L1sVxjf/th-5.jpg" alt="" />
</Link>
                </Stack> 
            </Flex>


</div>




</>
)
}
export default Nav;







//         {/* <h1
//         style={{
//             fontWeight:"800",
//             fontSize:"20px",
//             marginDown:"30px"
//         }}
//         >LOG INTO YOUR RENTIGO ACCOUNT.</h1>
//             <form 
//             bg={"linear-gradient(0deg,rgb(255,149,128),rgb(57, 56, 56))"}
//             >
               
//                 <div>
//                 <Input mt={"20px"} mb={"30px"} type="text" variant='filled' placeholder="Username/Wizard Number" isRequired="true"
//                 value={email} onChange={(e)=>{setEmail(e.target.value)
//                     console.log(e.target.value);
//                 }}
//                 />
                   
//                     <br />

//                     <Input type="number" variant='filled' placeholder="Password (Case Sensitive)" isRequired="true"
//                     value={password} onChange={(e)=>{setPassword(e.target.value)
//                     console.log(e.target.value);
//                     }}
//                     />
                 
//                 </div>
//                <Flex justifyContent={"space-between"} mt={"20px"} mb={"20px"}>
//                 <FormLabel htmlFor='email-alerts' >
//                     Remember Me
//                     </FormLabel>
//                     <Box>
//                     <Switch id='email-alerts' onChange={(e)=>{
                        
//                         HandelClick()
                        
                    
//                     }} />
//                     <span>{yeno?"Yes":"No"}</span>
//                     </Box>

//                     </Flex>

//                     <Box mt={"20px"} mb={"20px"}>
//                         <Text>This site is protected by reCAPTCHA Enterprise and the Google 
//                             <span><Link color={"blue"}> Privacy Policy </Link></span>
//                              and  <Link color={"blue"}> Terms of Service </Link>apply.</Text>
//                     </Box>
//                     <Link to="/reservation">
//                     <Button w="80%" color={"black"} mt={"10px"} mb={"30px"}>Log In</Button>
//                    </Link>
//               <hr />
//        <Flex justifyContent={"space-between"} mt={"20px"}>
//         <Link color={"green"}>Forgot UserName</Link>
//         <Link color={"green"}>Forgot password</Link>
//        </Flex>
//      <hr />
      
//      </form>
//      <Link to="/admin">
// <img 
// onClick={()=>setpop(false)}
// className="mcQueen"
// src="https://i.ibb.co/L1sVxjf/th-5.jpg" alt="" />
// </Link> */}