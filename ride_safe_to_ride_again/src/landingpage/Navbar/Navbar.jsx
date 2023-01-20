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
import { Switch,FormLabel,Flex,Box,Text ,Input,Button,Image,SimpleGrid} from "@chakra-ui/react";





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



let [yeno,setYesNo]=React.useState(false)
const HandelClick=()=>{
setYesNo(!yeno)
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
        <h1
        style={{
            fontWeight:"800",
            fontSize:"20px",
            marginDown:"30px"
        }}
        >LOG INTO YOUR RENTIGO ACCOUNT.</h1>
            <form 
            bg={"linear-gradient(0deg,rgb(21, 20, 20),rgb(57, 56, 56))"}
            >
               
                <div>
                <Input mt={"20px"} mb={"30px"} type="text" variant='filled' placeholder="Username/Wizard Number" isRequired="true" />
                   
                    <br />

                    <Input type="number" variant='filled' placeholder="Password (Case Sensitive)" isRequired="true" />
                 
                </div>
               <Flex justifyContent={"space-between"} mt={"20px"} mb={"20px"}>
                <FormLabel htmlFor='email-alerts' >
                    Remember Me
                    </FormLabel>
                    <Box>
                    <Switch id='email-alerts' onChange={HandelClick} />
                    <span>{yeno?"Yes":"No"}</span>
                    </Box>

                    </Flex>

                    <Box mt={"20px"} mb={"20px"}>
                        <Text>This site is protected by reCAPTCHA Enterprise and the Google 
                            <span><Link color={"blue"}> Privacy Policy </Link></span>
                             and  <Link color={"blue"}> Terms of Service </Link>apply.</Text>
                    </Box>
                    <Link to="/reservation">
                    <Button w="80%" color={"black"} mt={"10px"} mb={"30px"}>Log In</Button>
                   </Link>
              <hr />
       <Flex justifyContent={"space-between"} mt={"20px"}>
        <Link color={"green"}>Forgot UserName</Link>
        <Link color={"green"}>Forgot password</Link>
       </Flex>
     <hr />
      
     </form>
     <Link to="/">
<img 
onClick={()=>setpop(false)}
className="mcQueen"
src="https://i.ibb.co/L1sVxjf/th-5.jpg" alt="" />
</Link>
</div>




</>
)
}
export default Nav;