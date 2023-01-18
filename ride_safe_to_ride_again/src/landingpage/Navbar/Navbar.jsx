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

            
            <li>
            <Link to='/login' className='nav-link' >
            LogIn
            </Link>
            </li>
            

            <li>
            <Link to='/signin' className='nav-link' >
            Sign-up
            </Link>
            </li>
            
        </ul>
        </div>
</nav>
</>
)
}
export default Nav;